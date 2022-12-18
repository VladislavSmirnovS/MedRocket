import { pages } from '../controllers/index.js';

const content = document.querySelector('.root');
const router = (route) => {
  content.innerHTML = '';

  switch (route) {
    case '#/':
      return pages.home(content);
    case '#/favorites':
      return pages.favorites(content);
    default:
      return content.appendChild(pages.notFound());
  }
};

export { router };
