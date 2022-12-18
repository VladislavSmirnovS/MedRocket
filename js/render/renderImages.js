function renderImages(arrayImages, content, albumId) {
  arrayImages.forEach((item) => {
    const imageHtml = 
    `<li class="list-album__item" data-image-id=${item.id} data-parent-id=${albumId}>
       <div class="card">
         <div class="card__block">
           <img src=${item.thumbnailUrl} alt="" class="card-img" data-big-size=${item.url}>
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

export { renderImages };
