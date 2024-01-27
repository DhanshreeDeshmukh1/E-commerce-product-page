document.querySelector('.menu').addEventListener('click',() => document.querySelector('.right-nav').classList.toggle('show'));

function changeImage(imageSrc) {
    var largeImage = document.querySelector('.large-img');
    largeImage.src = imageSrc;
    
    var smallImages = document.querySelectorAll('.small-img img');
    smallImages.forEach(function(smallImage) {
        smallImage.style.border = 'none';
    });

    var matchedSmallImage = document.querySelector('.small-img img[src="' + imageSrc + '"]');
        if (matchedSmallImage) {
            matchedSmallImage.style.border = '3px solid #8d627e'; 
        }
}
var cartCount = 0;

function addToCart() {
    cartCount++;
    updateCartCount();
    showCart();
}

function updateCartCount() {
    var cartCountSpan = document.querySelector('.cart-count'); 
    cartCountSpan.textContent = cartCount;
}

function showCart() {
    console.log("Shopping cart clicked");
}
