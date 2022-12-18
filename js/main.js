import {  checkHash, toggleClass } from './modules/activeClassBtn.js';
import { FavoriteAlbums } from './modules/CheckFavorites.js';
import { modal } from './modules/Modal.js';
import { setHash } from './modules/setHash.js';
import { router } from './router/indexRoutes.js';

function loadFunctions() {
  setHash();
  checkHash(window.location.hash);
  toggleClass();
  FavoriteAlbums();
  modal.initModal('card-img');
}

window.addEventListener('DOMContentLoaded', loadFunctions);
window.addEventListener('hashchange', (e) => {
  router(window.location.hash);
  checkHash(window.location.hash);
});


