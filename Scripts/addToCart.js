function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  closeSecondaryNav(); 
}


let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const CART_WIDTH = "350px"; 


function saveCartToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}


function updateNavbarBagColor() {
  
  const navbarBagIcon = document.querySelector(".cart-btn");
  if (navbarBagIcon) {
    if (cartItems.length > 0) {
      navbarBagIcon.style.color = "#2ec4b6"; 
    } else {
      navbarBagIcon.style.color = ""; 
    }
  }
}


function openCartNav() {
  document.getElementById("myCartNav").style.width = CART_WIDTH;
  renderCartItems(); 
}


function closeCartNav() {
  document.getElementById("myCartNav").style.width = "0";
}


function renderCartItems() {
  const container = document.getElementById("cartItemsContainer");
  const totalAmountSpan = document.getElementById("cartTotalAmount");
  
  
  const cartCountSpan = document.getElementById("cart-count");
  
  if (!container) return; 
  
  container.innerHTML = ""; 
  
  
  if (cartItems.length === 0) {
    container.innerHTML = '<p class="empty-cart-msg">Your cart is empty!</p>';
    if (totalAmountSpan) totalAmountSpan.innerText = "Rs. 0";
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
  
  
  if (totalAmountSpan) totalAmountSpan.innerText = `Rs. ${total.toLocaleString()}`;
  if (cartCountSpan) cartCountSpan.innerText = totalQuantity; 
}


function updateQuantity(id, change) {
  const item = cartItems.find(item => item.id === id);
  if (item) {
    item.quantity += change;
    
    
    if (item.quantity <= 0) {
      removeItem(id);
      return; 
    }
    
    saveCartToLocalStorage(); 
    updateNavbarBagColor();   
    renderCartItems();
  }
}


function removeItem(id) {
  cartItems = cartItems.filter(item => item.id !== id);
  saveCartToLocalStorage(); 
  updateNavbarBagColor();   
  renderCartItems();
}


function goToCheckout() {
  if(cartItems.length === 0) {
    alert("Your Cart is empty.");
  } else {
    window.location.href = "checkout.html"
    
  }
}


function addToCart(id, name, price) {
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

  saveCartToLocalStorage(); 
  updateNavbarBagColor();   
  renderCartItems();
}


document.addEventListener("DOMContentLoaded", () => {
  renderCartItems();
  updateNavbarBagColor(); 
});