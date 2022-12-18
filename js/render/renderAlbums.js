function renderAlbums(albumsArray, content, userId) {
  albumsArray.forEach((item) => {
    const albumHtml = 
    `<li class="list__item parent-click" data-albums-id=${item.id} data-parent-id=${userId}>
       <a class="list__block">
         <span class="list__drop-down">
           <span></span>
           <span></span>
         </span>
         <span class="list__text">${item.title}</span>
       </a>
       <ul class="list list-album padding--left-second child-click" style="height: 0px">
       </ul>
     </li>`;
    content.insertAdjacentHTML('beforeend', albumHtml);
  });
}

export { renderAlbums };
