document.addEventListener('DOMContentLoaded', () => {
  const text = document.querySelector('.main-wrp-content__textQuote');

  const checkboxes = Array.from(document.querySelectorAll('.checkbox'));
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', check);
  });

  function check() {
    const checked = checkboxes.filter(checkbox => {
      return checkbox.checked === true;
    });

    if (checked.length === checkboxes.length) {
      changeText();
    }
  }

  function changeText() {
    text.innerText = "Nice, now you're good to go!";
    text.classList.remove('main-wrp-content__textQuote');
    text.classList.add('main-wrp-content-textQuote__nice');

    //if (!textVisible()) {
    text.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    });
    //}
  }

  /**function textVisible() {
    var rect = text.getBoundingClientRect();
    var viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }*/
});
