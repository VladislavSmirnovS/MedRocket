function renderFavorites(arrayFavorites, content, albumId) {
  arrayFavorites.forEach((item) => {
    const imageHtml = 
    `<li class="list-album__item${item.favorite ? " select--active" : null}"
     data-image-id=${item.imageId} data-parent-id=${albumId}>
       <div class="card">
         <div class="card__block">
           <img src=${item.img} alt="" class="card-img" data-big-size=${item.imgBigSize}>
           <span class="card-title">${item.title}</span>
           <span class="select-card">
             <span class="select-icon"></span>
           </span>
          </div>
         </div>
      </li>`;
    content.insertAdjacentHTML("beforeend", imageHtml);
  });
}

export { renderFavorites };
