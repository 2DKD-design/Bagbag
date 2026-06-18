function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  closeSecondaryNav(); // Yeh secondary nav ko bhi saath me band kar dega
}

// Dummy Cart Data converted to Rs. values (USD * 280)
let cartItems = [
  { id: 1, name: "Women Ethnic Kurta", price: 14000, quantity: 1 },
  { id: 2, name: "Men Slim Fit Jeans", price: 16800, quantity: 2 },
  { id: 3, name: "Running Shoes", price: 25200, quantity: 1 }
];

const CART_WIDTH = "350px"; // Cart side nav ki width

// 1. Cart Nav Open karne ka function
function openCartNav() {
  document.getElementById("myCartNav").style.width = CART_WIDTH;
  renderCartItems(); // Har baar open hone par naye items load honge
}

// 2. Cart Nav Close karne ka function
function closeCartNav() {
  document.getElementById("myCartNav").style.width = "0";
}

// 3. Items ko Side Nav ke andar display karne ka function
function renderCartItems() {
  const container = document.getElementById("cartItemsContainer");
  const totalAmountSpan = document.getElementById("cartTotalAmount");
  const cartCountSpan = document.getElementById("cart-count");
  
  container.innerHTML = "";
  
  if (cartItems.length === 0) {
    container.innerHTML = '<p class="empty-cart-msg">Your cart is empty!</p>';
    totalAmountSpan.innerText = "Rs. 0";
    if (cartCountSpan) cartCountSpan.innerText = "0";
    return;
  }
  
  let total = 0;
  let totalQuantity = 0;
  
  cartItems.forEach(item => {
    total += item.price * item.quantity;
    totalQuantity += item.quantity;
    
    const itemHTML = `
      <div class="cart-item">
        <div class="item-details">
          <h4>${item.name}</h4>
          <p>Rs. ${item.price.toLocaleString()}</p>
          
          <div class="cart-qty-controls">
            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
        </div>
        
        <div class="item-right-side">
          <div class="item-price">
            <strong>Rs. ${(item.price * item.quantity).toLocaleString()}</strong>
          </div>
          <button class="remove-item-btn" onclick="removeItem(${item.id})">&times;</button>
        </div>
      </div>
    `;
    container.innerHTML += itemHTML;
  });
  
  totalAmountSpan.innerText = `Rs. ${total.toLocaleString()}`;
  if (cartCountSpan) cartCountSpan.innerText = totalQuantity;
}

// Function to change item quantities (+1 or -1)
function updateQuantity(id, change) {
  const item = cartItems.find(item => item.id === id);
  if (item) {
    item.quantity += change;
    
    // Agar quantity 0 ho jaye, toh item ko array se filter out (remove) kar edin
    if (item.quantity <= 0) {
      removeItem(id);
      return; 
    }
    
    renderCartItems();
  }
}

// Function to instantly wipe an item from the cart array
function removeItem(id) {
  cartItems = cartItems.filter(item => item.id !== id);
  renderCartItems();
}

// 4. Checkout Button Action
function goToCheckout() {
  if(cartItems.length === 0) {
    alert("Aapka cart khali hai. Kripya items add karein!");
  } else {
    alert("Redirecting to checkout page...");
  }
}

// Shuru me cart count set karne ke liye call karein
renderCartItems();

// 5. Function to add an item to the cart
function addToCart(id, name, price) {
  // Ensure we are working with numeric data formats
  const productId = parseInt(id);
  const productPrice = parseFloat(price);

  const existingItem = cartItems.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      id: productId,
      name: name,
      price: productPrice,
      quantity: 1
    });
  }

  renderCartItems();
  openCartNav();
}