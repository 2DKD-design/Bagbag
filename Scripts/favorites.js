// ==========================================
// 1. GLOBAL STATE ARRAYS & PERSISTENCE
// ==========================================
// LOAD: Check localStorage on refresh, fallback to empty array if nothing saved
let favoriteItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];

const FAV_SIDEBAR_WIDTH = "350px";

// Helper function to update localStorage state
function saveToLocalStorage() {
  localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
}

// Helper function to turn the navbar heart red when items are favorited
function updateNavbarHeartColor() {
  // Looks for any link/button triggering openFavoritesNav() and finds the heart icon inside it
  const navbarHeartIcon = document.querySelector("a[onclick='openFavoritesNav()'] i, .fav-nav-btn i");
  if (navbarHeartIcon) {
    if (favoriteItems.length > 0) {
      navbarHeartIcon.style.color = "#ff0000"; // Makes navbar heart red
    } else {
      navbarHeartIcon.style.color = ""; // Resets back to default theme color
    }
  }
}

// Helper function to keep heart buttons on product cards active on refresh
function syncProductCardButtons() {
  favoriteItems.forEach(item => {
    const targetBtn = document.querySelector(`.fav-btn[data-id="${item.id}"]`);
    if (targetBtn) {
      targetBtn.classList.add('active');
      const icon = targetBtn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-heart';
    }
  });
}

// ==========================================
// 2. FAVORITES SYSTEM LOGIC
// ==========================================

function toggleFavorite(buttonElement) {
  const icon = buttonElement.querySelector('i');
  
  const id = parseInt(buttonElement.getAttribute('data-id'));
  const name = buttonElement.getAttribute('data-name');
  const price = parseFloat(buttonElement.getAttribute('data-price'));

  if (isNaN(id)) return;

  const existingIndex = favoriteItems.findIndex(item => item.id === id);

  if (existingIndex !== -1) {
    favoriteItems.splice(existingIndex, 1);
    if (icon) {
      icon.className = 'fa-regular fa-heart';
    }
    buttonElement.classList.remove('active');
  } else {
    favoriteItems.push({ id, name, price });
    if (icon) {
      icon.className = 'fa-solid fa-heart';
    }
    buttonElement.classList.add('active');
  }

  saveToLocalStorage();      // Save on addition/removal
  updateNavbarHeartColor();  // Check navbar state
  renderFavorites();
}

// Sidebar cross click sync helper
function syncAndRemoveFav(id) {
  favoriteItems = favoriteItems.filter(item => item.id !== id);
  
  const targetBtn = document.querySelector(`.fav-btn[data-id="${id}"]`);
  if (targetBtn) {
    const icon = targetBtn.querySelector('i');
    if (icon) icon.className = 'fa-regular fa-heart';
    targetBtn.classList.remove('active');
  }
  
  saveToLocalStorage();      // Save on removal
  updateNavbarHeartColor();  // Check navbar state
  renderFavorites();
}

// Render out wishlist favorites list rows
function renderFavorites() {
  const container = document.getElementById("favItemsContainer");
  const footerArea = document.getElementById("favFooterArea");
  
  if (!container) return;
  container.innerHTML = "";
  
  if (favoriteItems.length === 0) {
    container.innerHTML = '<p class="empty-cart-msg">Your favorites list is empty!</p>';
    if (footerArea) footerArea.style.display = "none";
    return;
  }
  
  if (footerArea) footerArea.style.display = "block";
  
  favoriteItems.forEach(item => {
    const itemHTML = `
      <div class="fav-item-row">
        <div class="fav-details">
          <h4>${item.name}</h4>
          <p class="fav-item-price">$${item.price.toFixed(2)}</p>
        </div>
        <button class="remove-fav-btn" onclick="syncAndRemoveFav(${item.id})">&times;</button>
      </div>
    `;
    container.innerHTML += itemHTML;
  });
}

// Transfer wishlist items array straight into cart matrix safely
function addAllFavoritesToCart() {
  if (favoriteItems.length === 0) return;
  
  favoriteItems.forEach(item => {
    if (typeof addToCart === "function") {
      addToCart(item.id, item.name, item.price);
    }
  });
  
  favoriteItems.forEach(item => {
    const targetBtn = document.querySelector(`.fav-btn[data-id="${item.id}"]`);
    if (targetBtn) {
      const icon = targetBtn.querySelector('i');
      if (icon) icon.className = 'fa-regular fa-heart';
      targetBtn.classList.remove('active');
    }
  });
  
  favoriteItems = [];
  saveToLocalStorage();      // Reset localStorage storage track
  updateNavbarHeartColor();  // Clear navbar color back to standard
  renderFavorites();
  
  if (typeof renderCartItems === "function") {
    renderCartItems();
  }
  
  alert("All favorite items transferred to your cart!");
}

// Sidebar panel UI triggers
function openFavoritesNav() {
  const sidebar = document.getElementById("myFavoritesNav");
  if (sidebar) {
    sidebar.style.width = FAV_SIDEBAR_WIDTH;
    sidebar.style.display = "block";
    sidebar.style.visibility = "visible";
    renderFavorites();
  }
}

function closeFavoritesNav() {
  const sidebar = document.getElementById("myFavoritesNav");
  if (sidebar) {
    sidebar.style.width = "0";
    setTimeout(() => {
      if (sidebar.style.width === "0px" || sidebar.style.width === "0") {
        sidebar.style.visibility = "hidden";
      }
    }, 400); 
  }
}

// Initial structural setup when the webpage reloads
document.addEventListener("DOMContentLoaded", () => {
  renderFavorites();
  updateNavbarHeartColor();
  syncProductCardButtons(); // Makes sure card icons match the loaded data array
});