const dropDawn = (e) => {
  const target = e.target;

  const parentElm = target.closest(".parent-click");
  const childElm = parentElm.querySelector(".child-click");

  parentElm.classList.add("active");

  const heightElm = parseInt(childElm.style.height);

  if (heightElm <= 0) {
    if (childElm.closest(".list-album")) {
      childElm.style.display = "grid";
    } else {
      childElm.style.display = "block";
    }
    childElm.style.overflow = "hidden";
    childElm.style.height = `${
      (100 * childElm.scrollHeight) / window.innerHeight
    }vh`;
    setTimeout(() => {
      childElm.style.height = "";
    }, 200);
  } else {
    parentElm.classList.remove("active");
    parentElm.classList.remove("show");
    childElm.style.height = `${
      (100 * childElm.scrollHeight) / window.innerHeight
    }vh`;
    childElm.style.overflow = "hidden";

    setTimeout(() => {
      childElm.style.height = "0";
    }, 200);
  }
};

function clearDropDown() {
  const parent = document.querySelectorAll(".parent-click");

  parent.forEach((item) => {
    const child = item.querySelector(".child-click");
    child.style.display = "none";
    child.style.height = "0";
    item.classList.remove("active");
  });
}

export { dropDawn, clearDropDown };
