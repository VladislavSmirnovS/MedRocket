import { router } from "../router/indexRoutes.js";

const setHash = () => {
  if (window.location.hash == "") {
    router((window.location.hash = "#/"));
  } else {
    router(window.location.hash);
  }
};

export { setHash };
