// ================================
// GET HTML ELEMENTS
// ================================

const quantityText =
  document.getElementById("quantity");

const plusButton =
  document.getElementById("plus");

const minusButton =
  document.getElementById("minus");

const addToCartButton =
  document.getElementById("addToCart");

const cartCount =
  document.getElementById("cartCount");

const message =
  document.getElementById("message");

const mainImage =
  document.getElementById("mainImage");

const thumbnails =
  document.querySelectorAll(".thumb");


// ================================
// STARTING VALUES
// ================================

let quantity = 0;

let cartItems = 0;


// ================================
// PLUS BUTTON
// ================================

plusButton.addEventListener("click", () => {

  quantity++;

  quantityText.textContent =
    quantity;

});


// ================================
// MINUS BUTTON
// ================================

minusButton.addEventListener("click", () => {

  if (quantity > 0) {

    quantity--;

    quantityText.textContent =
      quantity;

  }

});


// ================================
// ADD TO CART
// ================================

addToCartButton.addEventListener(
  "click",
  () => {

    // Check if quantity is zero
    if (quantity === 0) {

      message.textContent =
        "Please select at least 1 item.";

      return;

    }


    // Add quantity to cart
    cartItems += quantity;


    // Show cart number
    cartCount.textContent =
      cartItems;

    cartCount.style.display =
      "block";


    // Show success message
    message.textContent =
      ${quantity} sneaker(s) added to your cart!;


    // Reset quantity
    quantity = 0;

    quantityText.textContent =
      quantity;

  }
);


// ================================
// CHANGE PRODUCT IMAGE
// ================================

thumbnails.forEach((thumbnail) => {

  thumbnail.addEventListener(
    "click",
    () => {

      // Get image path
      const newImage =
        thumbnail.dataset.image;


      // Change large image
      mainImage.src =
        newImage;


      // Remove active class
      thumbnails.forEach((item) => {

        item.classList.remove("active");

      });


      // Add active class
      thumbnail.classList.add("active");

    }
  );

});