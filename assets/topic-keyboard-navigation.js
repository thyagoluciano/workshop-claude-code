(function () {
  function normalize(text) {
    return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }

  function isInteractiveTarget(target) {
    return Boolean(
      target &&
      target.closest('a, button, input, textarea, select, [contenteditable="true"], [role="textbox"]')
    );
  }

  function isIndexLink(link) {
    const href = (link.getAttribute('href') || '').trim();
    return href.endsWith('index.html');
  }

  function getAdjacentTopicLinks(links) {
    const indexPosition = links.findIndex(isIndexLink);

    if (indexPosition === -1) {
      return { previousLink: null, nextLink: null };
    }

    const previousCandidates = links.slice(0, indexPosition).filter((link) => !isIndexLink(link));
    const nextCandidates = links.slice(indexPosition + 1).filter((link) => !isIndexLink(link));

    return {
      previousLink: previousCandidates.length > 0 ? previousCandidates[previousCandidates.length - 1] : null,
      nextLink: nextCandidates[0] || null,
    };
  }

  document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }

    if (isInteractiveTarget(event.target)) {
      return;
    }

    const footer = document.querySelector('.nav-footer');
    if (!footer) {
      return;
    }

    const links = Array.from(footer.querySelectorAll('a.nav-btn[href]')).filter((link) => {
      const href = (link.getAttribute('href') || '').trim();
      return href && href !== '#';
    });

    let { previousLink, nextLink } = getAdjacentTopicLinks(links);

    if (!previousLink) {
      previousLink = links.find((link) => normalize(link.textContent || '').includes('anterior')) || null;
    }

    if (!nextLink) {
      nextLink = links.find((link) => normalize(link.textContent || '').includes('proximo')) || null;
    }

    if (event.key === 'ArrowLeft' && previousLink) {
      event.preventDefault();
      window.location.href = previousLink.href;
    }

    if (event.key === 'ArrowRight' && nextLink) {
      event.preventDefault();
      window.location.href = nextLink.href;
    }
  });
})();
