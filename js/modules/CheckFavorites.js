import { renderEmpty } from "../render/renderEmpty.js";

let favoriteItems = [];
let favoriteLocal = JSON.parse(localStorage.getItem("favorites"));
if (!!favoriteLocal) {
  favoriteItems = [...favoriteLocal];
}

function FavoriteAlbums() {
  window.addEventListener("click", (e) => {
    const cardFavoriteActive = e.target.closest(".select-card");
    if (!cardFavoriteActive) return false;

    const parent = cardFavoriteActive.closest(".list-album__item");
    parent.classList.toggle("select--active");

    const albumId = parent.dataset.parentId;
    const imageId = parent.dataset.imageId;

    if (parent.classList.contains("select--active")) {
      let state = {
        albumId: parent.dataset.parentId,
        data: [
          {
            imageId: parent.dataset.imageId,
            img: parent.querySelector(".card-img").src,
            imgBigSize: parent.querySelector(".card-img").dataset.bigSize,
            title: parent.querySelector(".card-title").innerText,
            favorite: true,
          },
        ],
      };

      if (favoriteItems == null) {
        favoriteItems.push({
          albumId: parent.dataset.parentId,
          data: [
            {
              imageId: parent.dataset.imageId,
              img: parent.querySelector(".card-img").src,
              imgBigSize: parent.querySelector(".card-img").dataset.bigSize,
              title: parent.querySelector(".card-title").innerText,
              favorite: true,
            },
          ],
        });
      } else {
        const findAlbum = favoriteItems.find((el) => el.albumId == albumId);
        if (findAlbum) {
          findAlbum.data.push({
            imageId: parent.dataset.imageId,
            img: parent.querySelector(".card-img").src,
            imgBigSize: parent.querySelector(".card-img").dataset.bigSize,
            title: parent.querySelector(".card-title").innerText,
            favorite: true,
          });
        } else {
          favoriteItems.push(state);
        }
      }
      localStorage.setItem("favorites", JSON.stringify(favoriteItems));
    } else {
      for (let i = 0; i < favoriteItems.length; i++) {
        if (favoriteItems[i].albumId == albumId) {
          for (let j = 0; j < favoriteItems[i].data.length; j++) {
            if (favoriteItems[i].data[j].imageId == imageId) {
              favoriteItems[i].data.splice(j, 1);
            }
          }
        }
      }
      favoriteItems.flatMap((k, index) =>
        k.data.length <= 0 ? favoriteItems.splice(index, 1) : k
      );
      localStorage.setItem("favorites", JSON.stringify(favoriteItems));
      if (parent.closest(".favorites")) {
        parent.remove();
        if (favoriteItems.length <= 0) {
          const content = document.querySelector(".favorites");
          renderEmpty(content);
        }
      }
    }
  });
}

const FavoriteImages = (e) => {
  const parent = e.target.closest(".parent-click");
  const child = parent.querySelector(".child-click");
  const listAlbum = child.querySelectorAll(".list-album__item");
  if (!!!listAlbum) return false;

  listAlbum.forEach((el) => {
    const albumItemId = el.getAttribute("data-parent-id");
    const imageItemId = el.getAttribute("data-image-id");
    for (let i = 0; i < favoriteItems.length; i++) {
      if (albumItemId == favoriteItems[i].albumId) {
        for (let j = 0; j < favoriteItems[i].data.length; j++) {
          if (favoriteItems[i].data[j].imageId == imageItemId) {
            el.classList.add("select--active");
          }
        }
      }
    }
  });
};

export { FavoriteImages, FavoriteAlbums };
