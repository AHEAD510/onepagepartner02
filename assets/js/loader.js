// GitHub Pages (subdirectory) and shared hosting safe path resolver
const resolvePath = (url) => {
  if (!url) return url;
  // If a URL starts with "/", make it relative so it works under /<repo>/ on GitHub Pages.
  // Example: "/assets/json/loading.json" -> "./assets/json/loading.json"
  if (typeof url === "string" && url.charAt(0) === "/") return `.${url}`;
  return url;
};
// ==========================================
//   event
// ==========================================
document.addEventListener("DOMContentLoaded",function(){loadingAnime()}),window.addEventListener("load",function(){loader()});const loader=function(){$(".js_loaderCover").delay(2e3).fadeOut(1e3),$(".js_loader").delay(1e3).fadeOut(500),setTimeout(function(){return_scroll()},2500)};function scroll_control(e){e.preventDefault()}function no_scroll(){document.addEventListener("mousewheel",scroll_control,{passive:!1}),document.addEventListener("touchmove",scroll_control,{passive:!1})}function return_scroll(){document.removeEventListener("mousewheel",scroll_control,{passive:!1}),document.removeEventListener("touchmove",scroll_control,{passive:!1})}