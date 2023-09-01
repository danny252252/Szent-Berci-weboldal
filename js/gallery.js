function getPics() {} //just for this demo
const imgs = document.querySelectorAll('.parent img');
const fullPage = document.querySelector('.full-size-img');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});