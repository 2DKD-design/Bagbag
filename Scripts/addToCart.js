function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  closeSecondaryNav(); // Yeh secondary nav ko bhi saath me band kar dega
}

// 1. GLOBAL STATE & LOCALSTORAGE INITIALIZATION
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const CART_WIDTH = "350px"; // Cart side nav ki width

// Helper function to save current cart state to the browser memory
function saveCartToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// NEW: Helper function to turn the navbar bag icon green when items are in the cart
function updateNavbarBagColor() {
  // Targets the bag icon based on the classes you used in index.html
  const navbarBagIcon = document.querySelector(".cart-btn");
  if (navbarBagIcon) {
    if (cartItems.length > 0) {
      navbarBagIcon.style.color = "#2ec4b6"; // Elegant, clean retail premium green
    } else {
      navbarBagIcon.style.color = ""; // Reverts back to your default layout CSS colors
    }
  }
}

// 2. Cart Nav Open karne ka function
function openCartNav() {
  document.getElementById("myCartNav").style.width = CART_WIDTH;
  renderCartItems(); // Har baar open hone par naye items load honge
}

// 3. Cart Nav Close karne ka function
function closeCartNav() {
  document.getElementById("myCartNav").style.width = "0";
}

// 4. Items ko Side Nav ke andar display karne ka function
function renderCartItems() {
  const container = document.getElementById("cartItemsContainer");
  const totalAmountSpan = document.getElementById("cartTotalAmount");
  
  // Checking if cart-count element exists in your header before updating it
  const cartCountSpan = document.getElementById("cart-count");
  
  if (!container) return; // Exit if element doesn't exist yet
  
  container.innerHTML = ""; // Pehle purana content clear karein
  
  // Empty State Check
  if (cartItems.length === 0) {
    container.innerHTML = '<p class="empty-cart-msg">Your cart is empty!</p>';
    if (totalAmountSpan) totalAmountSpan.innerText = "Rs. 0";
    if (cartCountSpan) cartCountSpan.innerText = "0";
    return;
  }
  
  let total = 0;
  let totalQuantity = 0; // Total quantity calculation variables setup
  
  cartItems.forEach(item => {
    total += item.price * item.quantity;
    totalQuantity += item.quantity; // Step tracking total quantities context loops
    
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
  
  // Display updates using premium .toLocaleString() comma separations
  if (totalAmountSpan) totalAmountSpan.innerText = `Rs. ${total.toLocaleString()}`;
  if (cartCountSpan) cartCountSpan.innerText = totalQuantity; // Updating global shopping count dynamically
}

// Function to change item quantities (+1 or -1)
function updateQuantity(id, change) {
  const item = cartItems.find(item => item.id === id);
  if (item) {
    item.quantity += change;
    
    // Agar quantity 0 ho jaye, toh item ko array se filter out (remove) kar edin
    if (item.quantity <= 0) {
      removeItem(id);
      return; // Execution yahin rok dein kyunki removeItem khud render karega
    }
    
    saveCartToLocalStorage(); // Save quantity changes
    updateNavbarBagColor();   // Sync navbar bag color
    renderCartItems();
  }
}

// Function to instantly wipe an item from the cart array
function removeItem(id) {
  cartItems = cartItems.filter(item => item.id !== id);
  saveCartToLocalStorage(); // Save removal modifications
  updateNavbarBagColor();   // Sync navbar bag color
  renderCartItems();
}

// 5. Checkout Button Action
function goToCheckout() {
  if(cartItems.length === 0) {
    alert("Your Cart is empty.");
  } else {
    window.location.href = "checkout.html"
    // window.location.href = "/checkout"; // Real website link yahan aayega
  }
}

// 6. Function to add an item to the cart
function addToCart(id, name, price) {
  const productId = parseInt(id);
  const productPrice = parseFloat(price);

  // Check if the item already exists in the cart
  const existingItem = cartItems.find(item => item.id === productId);

  if (existingItem) {
    // If it exists, just increase the quantity
    existingItem.quantity += 1;
  } else {
    // If it's a new item, push it to the cartItems array
    cartItems.push({
      id: productId,
      name: name,
      price: productPrice,
      quantity: 1
    });
  }

  saveCartToLocalStorage(); // Save addition details instantly
  updateNavbarBagColor();   // Turn the navbar bag green on item add
  renderCartItems();
}

// Safe execution listener to ensure code syncs perfectly on webpage loads/refreshes
document.addEventListener("DOMContentLoaded", () => {
  renderCartItems();
  updateNavbarBagColor(); // Sets the initial bag color state on refresh based on localStorage
});