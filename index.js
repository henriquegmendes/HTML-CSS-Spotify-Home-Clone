const pageMainContainer = document.getElementById('main-container');
const loadingLogo = document.getElementById('loading-logo');

if (pageMainContainer && loadingLogo) {
  setTimeout(function() {
    pageMainContainer.style.display = 'block';
    loadingLogo.style.display = 'none';
  }, 2000);
}
