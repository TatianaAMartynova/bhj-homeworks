document.addEventListener('DOMContentLoaded', function () {
  const cartProducts = document.querySelector('.cart__products');
  const products = document.querySelector('.products');

  products.addEventListener('click', function (event) {
      const addButton = event.target.closest('.product__add');
      if (addButton) {
          addToCart(addButton);
      }

      const quantityControl = event.target.closest('.product__quantity-control');
      if (quantityControl) {
          updateQuantity(quantityControl);
      }
  });

  function addToCart(addButton) {
      const product = addButton.closest('.product');
      const productId = product.dataset.id;
      const productTitle = product.querySelector('.product__title').innerText;
      const productImage = product.querySelector('.product__image').src;
      const quantityValue = parseInt(product.querySelector('.product__quantity-value').innerText, 10);

      const existingCartItem = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

      if (existingCartItem) {
          const existingQuantity = parseInt(existingCartItem.querySelector('.cart__product-count').innerText, 10);
          const newQuantity = existingQuantity + quantityValue;
          existingCartItem.querySelector('.cart__product-count').innerText = newQuantity;
      } else {
          const cartProduct = document.createElement('div');
          cartProduct.classList.add('cart__product');
          cartProduct.dataset.id = productId;

          cartProduct.innerHTML = `
              <img class="cart__product-image" src="${productImage}">
              <div class="cart__product-count">${quantityValue}</div>
          `;

          cartProducts.appendChild(cartProduct);
      }
  }

  function updateQuantity(quantityControl) {
      const quantityValue = quantityControl.parentElement.querySelector('.product__quantity-value');
      let quantity = parseInt(quantityValue.innerText, 10);

      if (quantityControl.classList.contains('product__quantity-control_dec')) {
          quantity = Math.max(1, quantity - 1);
      } else if (quantityControl.classList.contains('product__quantity-control_inc')) {
          quantity += 1;
      }

      quantityValue.innerText = quantity;
  }
});
