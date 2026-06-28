
const products = [
  { id: 1, name: "Convertible Pochette", brand: "Michael Kors Classic", price: 83720, img: "MICHEAL KORS/convertible_pochette-removebg-preview.png", desc: "A versatile asset to your luxury collection, perfect for day-to-night transitions." },
  { id: 2, name: "Crackled Leather Case", brand: "Michael Kors", price: 40600, img: "MICHEAL KORS/crackled_leather_with_card_case-removebg-preview.png", desc: "Includes matching card holder. Crafted with premium textured leather." },
  { id: 3, name: "Saint Laurent Bag", brand: "Saint Laurent", price: 518000, img: "Saint Laurent/saint_Laurent_6-removebg-preview (1).png", desc: "Luxury French craftsmanship at its finest. Iconic silhouette with structural elements." }
  
];


const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));


const product = products.find(p => p.id === productId);


if (product) {
  document.title = `${product.name} | Global Luxury`;
  document.getElementById('productTitle').innerText = product.name;
  document.getElementById('productBrand').innerText = product.brand;
  document.getElementById('productPrice').innerText = `Rs. ${product.price.toLocaleString()}`;
  document.getElementById('productMainImage').src = product.img;
  document.getElementById('productMainImage').alt = product.name;
  document.getElementById('productDescription').innerText = product.desc;

  
  const cartBtn = document.getElementById('detailAddToCartBtn');
  cartBtn.onclick = function() {
    
    if (typeof addToCart === "function") {
      addToCart(product.id, product.name, product.price);
    } else {
      console.log(`Added ${product.name} to cart.`);
    }
  };
} else {
  
  document.getElementById('productTitle').innerText = "Product Not Found";
  document.getElementById('productDescription').innerText = "The item you are looking for does not exist or has been removed.";
}

