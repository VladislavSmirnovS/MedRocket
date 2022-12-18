class Modal {
  constructor() {
    this.imgClass = null;
    this.isOpen = false;
    this.isDistrict = false;
  }
  renderModal(img) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.style.transition = "all 1s easy-in-out";
    modal.insertAdjacentHTML(
      "beforeend",
      `<div class="close">
         <div class="close-container">
           <span></span>
           <span></span>
         </div>
       </div>
       <div class="modal-container">
         <img src=${img} class="modal-img" alt="bigSize">
       </div> `
    );
    document.body.appendChild(modal);
    return modal;
  }

  open(e) {
    const target = e.target.closest(`.${this.imgClass}`);
    if (this.isOpen) {
      if (
        !e.target.closest(".modal-container") ||
        e.target.classList.contains("close")
      ) {
        this.isOpen = false;
        this.destroy();
      }
    }
    if (!target) return false;
    this.renderModal(target.dataset.bigSize);
    this.isOpen = true;
  }

  onclick() {
    window.addEventListener("click", (e) => this.open(e));
  }

  destroy() {
    window.removeEventListener("click", (e) => this.open(e));
    document.body.querySelector(".modal").remove();
  }

  initModal(className) {
    this.imgClass = className;
    this.onclick();
  }
}
export const modal = new Modal();
