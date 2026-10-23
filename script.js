document.addEventListener('DOMContentLoaded', () => {
  const donut = document.querySelector('.donut-chart');
  const avatar = document.querySelector('.avatar');

  if (avatar) {
    avatar.textContent = 'AL';
  }

  if (donut) {
    donut.style.filter = 'drop-shadow(0 15px 25px rgba(139, 92, 246, 0.22))';
  }

  const searchInput = document.querySelector('.search-box input');
  if (searchInput) {
    searchInput.addEventListener('focus', () => {
      if (searchInput.value === 'Search metrics...') {
        searchInput.value = '';
      }
    });

    searchInput.addEventListener('blur', () => {
      if (!searchInput.value.trim()) {
        searchInput.value = 'Search metrics...';
      }
    });
  }
});
