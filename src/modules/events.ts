import { route } from './router/router';

function startEvents() {
  const mainPage = document.querySelector('#main-page');
  mainPage?.addEventListener('click', route);
  mainPage?.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (e.target && target.classList.contains('products__item-img')) {
      target.parentNode?.addEventListener('click', route);
      const parent = target.parentNode as HTMLLinkElement;
      parent.click();
    }
  });
}

export default startEvents;
