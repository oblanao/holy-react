module.exports = {
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
    console.log(`inside`)
    const backgrounds = [
      'images/aboutme.jpg',
      'images/discography.jpg',
      'images/philosophy.jpg',
      'images/gallery.jpg',
      'images/aboutme5.jpg',
      'images/aboutme6.jpg',
      'images/bg.jpg'
    ]
    let backgroundImage = backgrounds[backgrounds.length - 1];
    let backgroundPosition = "";
    if (backgrounds[pos]) {
      backgroundImage = backgrounds[pos];
      backgroundPosition = "center"
    }
    document.body.style.backgroundImage = `url("${backgroundImage}")`;
    document.body.style.backgroundPosition = backgroundPosition;
  }
}