import { renderEmpty } from "../render/renderEmpty.js";
import { renderFavorites } from "../render/renderFavorites.js";

const Favorites = async (content) => {
  const favoriteContainer = document.createElement("div");
  favoriteContainer.className = "favorites";

  content.appendChild(favoriteContainer);
  const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

  if (favoriteItems.length===0) {
    renderEmpty(favoriteContainer);
  } else {
    observeFavorites(favoriteContainer, favoriteItems);
  }
  return favoriteContainer;
};

const observeFavorites = (content, favoriteItems) => {
  content.innerHTML = "";
  const favoriteContainer = document.createElement("ul");
  favoriteContainer.className =
    "list list-album padding--left-second child-click favorites";
  content.appendChild(favoriteContainer);
  favoriteItems.map((fav) =>
    renderFavorites(fav.data, favoriteContainer, fav.albumId)
  );
  return favoriteContainer;
};

export { Favorites };
