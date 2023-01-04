
const searchBox = document.querySelector('#search-item');
const productWrapper = document.querySelector('.product-wrapper');
const product = document.querySelectorAll('.product');
const pTitle = document.getElementsByTagName('h2');

searchBox.addEventListener('keyup', function () {


  for (let i = 0; i < pTitle.length; i++) {
    let match = product[i].getElementsByTagName('h2');




  }

})