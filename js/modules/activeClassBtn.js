const dataHref = [];

function checkHash(hash) {
  const btn = document.querySelectorAll(".btn");
  btn.forEach((item, index) => {
    dataHref.push({
      href: item.dataset.href,
      btnIndex: index,
    });
  });
  dataHref.forEach((el) =>
    el.href == hash
      ? btn[el.btnIndex].classList.add("btn--active")
      : btn[el.btnIndex].classList.remove("btn--active")
  );
}

function toggleClass(closest, child, addClass) {
  window.addEventListener("click", (e) => {
    const parentElm = e.target.closest(`${closest}`);
    if (!parentElm) return false;
    const childElm = parentElm.querySelector(`${child}`);
    childElm.classList.toggle(`${addClass}`);
  });
}
toggleClass(".favorite-card", ".favorite-icon", "favorite-icon--active");

export { toggleClass, checkHash};
