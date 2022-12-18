import { dropDawn } from "../modules/dropDawn.js";
import { renderAlbums } from "../render/renderAlbums.js";
import { renderImages } from "../render/renderImages.js";
import { renderUsers } from "../render/renderUsers.js";

const fetchUser = async (content) => {
  try {
    content.innerHTML = "";
    const response = await fetch("https://json.medrocket.ru/users/");
    const data = await response.json();
    content.innerHTML = "";
    content.appendChild(renderUsers(data, content));
  } catch (error) {
    content.innerHTML = "";
    content.classList.add("error-user");
  }
};

const fetchAlbum = async (userId, content, e) => {
  try {
    content.innerHTML = "";
    dropDawn(e);
    const response = await fetch(
      `https://json.medrocket.ru/albums?userId=${userId}`
    );
    const data = await response.json();
    content.innerHTML = "";
    renderAlbums(data, content, userId);
  } catch (error) {
    content.innerHTML = "";
  }
};

const fetchImg = async (albumId, content, e) => {
  try {
    content.innerHTML = "";
    dropDawn(e);
    const response = await fetch(
      `https://json.medrocket.ru/photos?albumId=${albumId}`
    );
    const data = await response.json();
    content.innerHTML = "";
    renderImages(data, content, albumId);
  } catch (error) {
    content.innerHTML = "";
  }
};

export { fetchUser, fetchAlbum, fetchImg };
