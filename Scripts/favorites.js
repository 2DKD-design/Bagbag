// =========================================================================
// 1. GLOBAL STATE ARRAYS & PERSISTENCE
// =========================================================================
let favoriteItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];

const FAV_SIDEBAR_WIDTH = "350px";

// Helper function to update localStorage state
function saveToLocalStorage() {
  localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
}

// Helper function to turn the navbar heart red when items are favorited
function updateNavbarHeartColor() {
  // Target your exact layout class target name
  const navbarHeartIcon = document.querySelector(".visual-fav-btn");
  if (navbarHeartIcon) {
    if (favoriteItems.length > 0) {
      navbarHeartIcon.style.setProperty("color", "#ff0000", "important"); // Force active luxury red accent
      // Swaps the Bootstrap Icon outline framework into a solid filled heart
      navbarHeartIcon.className = "bi bi-heart-fill px-md-5 fs-4 visual-fav-btn";
    } else {
      navbarHeartIcon.style.color = ""; // Reverts style defaults
      // Swaps back to your clean baseline regular outline wireframe heart
      navbarHeartIcon.className = "bi bi-heart px-md-5 fs-4 visual-fav-btn";
    }
  }
}

// Helper function to keep heart buttons on product cards active across pagination and filtration renders
function syncProductCardButtons() {
  // Reset all hearts on product cards back to default regular outline wireframe status first
  // Added :not(.visual-fav-btn) so it never strips styles off your header navigation link!
  document.querySelectorAll('.fav-btn:not(.visual-fav-btn)').forEach(btn => {
    btn.classList.remove('active');
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = 'fa-regular fa-heart';
    }
  });

  // Highlight and fill saved favorite items on your card grids
  favoriteItems.forEach(item => {
    document.querySelectorAll(`.fav-btn[data-id="${item.id}"]:not(.visual-fav-btn)`).forEach(btn => {
      btn.classList.add('active');
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = 'fa-solid fa-heart';
      }
    });
  });
}

// =========================================================================
// 2. FAVORITES SYSTEM LOGIC (DYNAMIC SYNC PIPELINE)
// =========================================================================

function toggleFavorite(productData, buttonElement) {
  // Validate if item already exists inside your active array storage block
  const existingIndex = favoriteItems.findIndex(item => item.id === productData.id);

  if (existingIndex > -1) {
    // A. Remove item if already favorited
    favoriteItems.splice(existingIndex, 1);
    
    // Set all matching instances across the grid back to wireframe outline
    document.querySelectorAll(`.fav-btn[data-id="${productData.id}"]`).forEach(btn => {
      btn.classList.remove('active');
      const icon = btn.querySelector('i');
      if (icon) icon.className = 'fa-regular fa-heart';
    });
  } else {
    // B. Add product object configurations to state array
    favoriteItems.push({
      id: productData.id,
      name: productData.name,
      price: productData.price,
      image: productData.image || productData.img
    });

    // Toggle matching grid elements instantly to filled red state
    document.querySelectorAll(`.fav-btn[data-id="${productData.id}"]`).forEach(btn => {
      btn.classList.add('active');
      const icon = btn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-heart';
    });
  }

  // Update layout storage states and refresh the panel views instantly
  saveToLocalStorage();
  updateNavbarHeartColor();
  renderFavorites();
}

function removeFavoriteItem(id) {
  favoriteItems = favoriteItems.filter(item => item.id !== id);
  
  // Re-synchronize wireframe layout indicators inside grid columns
  document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(btn => {
    btn.classList.remove('active');
    const icon = btn.querySelector('i');
    if (icon) icon.className = 'fa-regular fa-heart';
  });

  saveToLocalStorage();
  updateNavbarHeartColor();
  renderFavorites();
}

// =========================================================================
// 3. UI RENDERER & CONTAINER PANEL ASSEMBLER
// =========================================================================
function renderFavorites() {
  const container = document.getElementById("fav-items-container");
  if (!container) return;

  container.innerHTML = "";

  if (favoriteItems.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5 text-muted">
        <i class="fa-regular fa-heart fs-1 mb-3 d-block text-secondary opacity-50"></i>
        <p class="mb-0" style="font-size: 0.95rem;">Your favorites list is currently empty.</p>
      </div>
    `;
    return;
  }

  favoriteItems.forEach(item => {
    const formattedPrice = typeof item.price === "number" 
      ? `Rs. ${item.price.toLocaleString()}` 
      : `Rs. ${item.price}`;

    const favRow = document.createElement("div");
    favRow.className = "fav-item d-flex align-items-center justify-content-between p-3 border-bottom";
    favRow.innerHTML = `
      <div class="d-flex align-items-center gap-3">
        <img src="${item.image}" alt="${item.name}" class="img-fluid rounded" style="width: 55px; height: 55px; object-fit: contain; background: #f8f9fa;">
        <div>
          <h6 class="fav-item-name text-dark fw-semibold mb-0 text-truncate" style="max-width: 180px; font-size: 0.9rem;" title="${item.name}">${item.name}</h6>
          <p class="fav-item-price text-muted mb-0" style="font-size: 0.85rem;">${formattedPrice}</p>
        </div>
      </div>
      <button class="remove-fav-btn text-danger bg-transparent border-0 fs-4 p-1" onclick="removeFavoriteItem(${item.id})" title="Remove item">
        &times;
      </button>
    `;
    container.appendChild(favRow);
  });
}

// Move all favorite catalog items right into your checkout cart array
function addAllFavoritesToCart() {
  if (favoriteItems.length === 0) return;
  
  favoriteItems.forEach(item => {
    if (typeof addToCart === "function") {
      addToCart(item.id, item.name, item.price);
    }
  });
  
  // Clear layout parameters and reset active arrays back to baseline state
  favoriteItems = [];
  saveToLocalStorage();      
  updateNavbarHeartColor();  
  renderFavorites();
  syncProductCardButtons();
  
  if (typeof renderCartItems === "function") {
    renderCartItems();
  }
  
  alert("All favorite items have been moved to your shopping cart!");
}

// =========================================================================
// 4. FAVORITES SIDEBAR TOGGLES INITIALIZATION
// =========================================================================
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

// Automatically trigger persistent checks on fresh page document loads
document.addEventListener("DOMContentLoaded", () => {
  updateNavbarHeartColor();
  renderFavorites();
});