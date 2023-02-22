// COSMOS CODE
function onPageLoad() {
  const header = document.querySelector('.notion-header');

  const footerCover = () => {
    const footerCoverNode = document.querySelector('.footer-cover');
    if (footerCoverNode) {
      footerCoverNode.remove();
    }
    const cover = document.querySelector('.notion-header__cover');
    const clone = cover.cloneNode(true);
    clone.classList.add('footer-cover');
    clone.classList.remove('notion-header__cover', 'has-cover');
    const content = document.querySelector('.super-content');

    content.appendChild(clone);
  }
  footerCover();

  const config = { subtree: true, characterData: true };

  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'characterData') {
        footerCover();
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(header, config);
}

document.addEventListener("DOMContentLoaded", onPageLoad);



// SIMPLE ANALYTICS
(function () {
  function e() {
    document.querySelectorAll("a[href*='utm_sa_link_event']").forEach(function (e) {
      var t = e.getAttribute("href"),
        r = (function e(t) {
          for (var r = t.split("?")[1].split("&"), a = {}, o = 0; o < r.length; o++) {
            var n = r[o].split("=");
            a[n[0]] = n[1];
          }
          return a;
        })(t).utm_sa_link_event;
      t &&
        window.sa_event &&
        window.sa_loaded &&
        e.addEventListener("click", function (e) {
          return window.sa_event(r), !0;
        });
    });
  }
  "ready" === document.readyState || "complete" === document.readyState
    ? e()
    : document.addEventListener("readystatechange", function (t) {
      "complete" === t.target.readyState && e();
    });
})();
