export const renderEmpty = (empty) => {
  empty.innerHTML = "";
  const emptyHtml = 
  `<div class="empty ">
     <div class="empty__container">
       <div class="empty__photo">
         <img src="./assets/img/empty.svg" alt="">
       </div>
       <div class="empty__block">
         <h1 class="fontStyle--theme--strong">Список избранного пуст</h1>
         <p>Добавляйте изображения, нажимая на звездочки</p>
       </div>
     </div>
   </div>`;
  empty.insertAdjacentHTML("beforeend", emptyHtml);
};
