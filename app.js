// Navbar toggle
const navbarBurger = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('.navbar-menu');
navbarBurger.addEventListener('click', () => {
  navbarBurger.classList.toggle('is-active');
  navbarMenu.classList.toggle('hidden');
});

// Market place
const products = [
  {
    image: './images/bag.jpg',
    name: 'Product 1',
    description: 'This is the description for product 1.',
    price: 10,
  },
  {
    image: './images/bag.jpg',
    name: 'Product 2',
    description: 'This is the description for product 2.',
    price: 20,
  },
  {
    image: './images/bag.jpg',
    name: 'Product 3',
    description: 'This is the description for product 3.',
    price: 30,
  },
  {
    image: './images/bag.jpg',
    name: 'Product 4',
    description: 'This is the description for product 3.',
    price: 30,
  },
];

const productCards = document.getElementById('product-cards');

products.forEach((product) => {
  const card = document.createElement('div');
  card.classList.add('card', 'w-full', 'md:w-1/3', 'bg-cover', 'bg-center', 'rounded-lg', 'shadow-lg');
  // card.style.backgroundImage = `url('${product.image}')`;

  const cardBody = document.createElement('div');
  cardBody.classList.add('p-10');

  const productImage = document.createElement('img');
  productImage.classList.add('product-img');
  productImage.src = product.image;

  const productName = document.createElement('h3');
  productName.classList.add('text-2xl', 'font-bold', 'mb-4');
  productName.textContent = product.name;

  const productDescription = document.createElement('p');
  productDescription.classList.add('text-lg', 'mb-4');
  productDescription.textContent = product.description;

  const productPrice = document.createElement('p');
  productPrice.classList.add('text-lg', 'font-bold', 'mb-4');
  productPrice.textContent = `Kshs.${product.price}`;

  const orderBtn = document.createElement('button');
  orderBtn.classList.add('order-btn');
  orderBtn.textContent = 'Place Order';

  cardBody.appendChild(productImage);
  cardBody.appendChild(productName);
  cardBody.appendChild(productDescription);
  cardBody.appendChild(productPrice);
  cardBody.appendChild(orderBtn);
  card.appendChild(cardBody);
  productCards.appendChild(card);
});

// waste-buying form handlers
const sellForm = document.getElementById('sell-form');
const sellBtn = document.getElementById('sell-btn');

sellBtn.addEventListener('click', () => {
  const productName = document.getElementById('product-name').value;
  const productDescription = document.getElementById('product-description').value;
  const productPrice = document.getElementById('product-price').value;

  // Send the product information to Queening Africa
  // You can use an API or a form submission method to send the information
  // This code is just an example and will not actually send the information
  alert(`Product Name: ${productName}\nProduct Description: ${productDescription}\nProduct Price: $${productPrice}`);
});

// Google Maps
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
