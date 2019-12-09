module.exports = {
  log: (what) => console.log(what),
  debounce: (func, wait, immediate) => {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },
  changeBackground: (pos) => {
    // Very much improved version
    const bgClasses = [
      'bg-aboutme',
      'bg-discography',
      'bg-philosophy',
      'bg-gallery',
      'bg-news',
      'bg-contact',
      'bg'
    ]
    let currentBgClass = bgClasses[bgClasses.length - 1];
    let backgroundPosition = "";
    if (bgClasses[pos]) {
      currentBgClass = bgClasses[pos];
      backgroundPosition = "center";
    }
    function clearBackground() {
      document.body.classList.remove('bg-aboutme');
      document.body.classList.remove('bg-discography');
      document.body.classList.remove('bg-philosophy');
      document.body.classList.remove('bg-gallery');
      document.body.classList.remove('bg-news');
      document.body.classList.remove('bg-contact');
      document.body.classList.remove('bg');
    }
    clearBackground();
    document.body.style.backgroundPosition = backgroundPosition;
    document.body.classList.add(currentBgClass);
  }
}