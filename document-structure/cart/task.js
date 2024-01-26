document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll('.product');
    const cartProducts = document.querySelector('.cart__products');
  
    products.forEach(product => {
      const quantityValue = product.querySelector('.product__quantity-value');
      const addToCartButton = product.querySelector('.product__add');
  
      addToCartButton.addEventListener('click', function () {
        const productId = product.getAttribute('data-id');
        const productTitle = product.querySelector('.product__title').innerText;
        const productImageSrc = product.querySelector('.product__image').src;
  
        const existingCartItem = document.querySelector(`.cart__product[data-id="${productId}"]`);
  
        let quantity = parseInt(quantityValue.innerText);
        quantity = isNaN(quantity) ? 1 : quantity;
  
        if (existingCartItem) {
          const existingQuantity = parseInt(existingCartItem.querySelector('.cart__product-count').innerText);
          quantity += existingQuantity;
          existingCartItem.querySelector('.cart__product-count').innerText = quantity;
        } else {
          const cartProduct = document.createElement('div');
          cartProduct.classList.add('cart__product');
          cartProduct.setAttribute('data-id', productId);
  
          cartProduct.innerHTML = `
            <img class="cart__product-image" src="${productImageSrc}">
            <div class="cart__product-count">${quantity}</div>
          `;
  
          cartProducts.appendChild(cartProduct);
        }
  
        resetQuantity();
      });
    });
  
    function resetQuantity() {
      products.forEach(product => {
        const quantityValue = product.querySelector('.product__quantity-value');
        quantityValue.innerText = '1';
      });
    }
  
    document.addEventListener('click', function (event) {
      const target = event.target;
  
      if (target.classList.contains('product__quantity-control')) {
        const quantityValue = target.closest('.product').querySelector('.product__quantity-value');
        let quantity = parseInt(quantityValue.innerText);
  
        if (target.classList.contains('product__quantity-control_dec')) {
          quantity = Math.max(1, quantity - 1);
        } else if (target.classList.contains('product__quantity-control_inc')) {
          quantity++;
        }
  
        quantityValue.innerText = quantity;
      }
    });
  });
  