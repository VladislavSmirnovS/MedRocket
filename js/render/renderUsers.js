function renderUsers(usersArray) {
  const usersList = document.createElement("ul");
  usersList.classList.add("list");

  usersArray.forEach((item) => {
    const usersHtml = 
    `<li class="list__item parent-click" data-user-id=${item.id}>
      <a  class="list__block">
        <span class="list__drop-down">
          <span></span>
          <span></span>
        </span>
        <span class="list__text fontStyle--theme--bold">${item.name}</span>
      </a>
      <ul class="list padding--left-first child-click" style="height: 0;"></ul>
    </li>`;
    usersList.insertAdjacentHTML("beforeend", usersHtml);
  });
  return usersList;
}

export { renderUsers };
