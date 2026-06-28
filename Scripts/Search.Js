
function openSearch() {
  document.getElementById("myNav").style.height = "100%";
  
  setTimeout(() => {
    document.getElementById("overlay-search-input")?.focus();
  }, 300);
}


function closeSearch() {
  document.getElementById("myNav").style.height = "0%";
}


let defaultOverlayContent = "";

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("overlay-search-input");
  const resultsContainer = document.getElementById("search-results-grid");
  
  
  if (resultsContainer) {
    defaultOverlayContent = resultsContainer.innerHTML;
  }
  
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchKeyword = e.target.value.trim().toLowerCase();
      executeOverlaySearch(searchKeyword);
    });
  }
});

function escapeAttribute(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function executeOverlaySearch(keyword) {
  const resultsContainer = document.getElementById("search-results-grid");
  if (!resultsContainer) return;

  
  if (keyword === "") {
    resultsContainer.innerHTML = defaultOverlayContent;
    return;
  }

  
  resultsContainer.innerHTML = "";

  const activeCatalog = typeof productsData !== "undefined" ? productsData : [];
  
  const matches = activeCatalog.filter(product => {
    return (
      product.name?.toLowerCase().includes(keyword) ||
      product.brand?.toLowerCase().includes(keyword) ||
      product.type?.toLowerCase().includes(keyword)
    );
  });

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div class="col-12 text-center py-5 text-muted w-100">
        <p>No products match "${keyword}"</p>
      </div>
    `;
    return;
  }

  
  matches.forEach(product => {
    const displayPrice = product.price ? `Rs. ${product.price}` : "Price Upon Request";
    const safeNumPrice = parseFloat(product.price.toString().replace(/,/g, '')) || 0;
    
    const isFavorited = typeof favoriteItems !== "undefined" && favoriteItems.some(fav => fav.id === product.id);
    const heartIconClass = isFavorited ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    const activeClass = isFavorited ? 'active' : '';

    const colCard = document.createElement("div");
    colCard.className = "col";
    colCard.innerHTML = `
      <div class="card h-100 product-card border-0 shadow-sm position-relative text-start" data-id="${product.id}">
        <button class="fav-btn btn position-absolute top-0 end-0 m-2 border-0 bg-transparent text-secondary fs-5 ${activeClass}" 
                data-id="${product.id}" 
                data-name="${escapeAttribute(product.name)}"
                data-price="${safeNumPrice}"
                data-image="${escapeAttribute(product.image || "")}">
          <i class="${isFavorited ? "bi bi-heart-fill text-danger" : "bi bi-heart"}"></i>
        </button>
        
        <img src="${product.image}" class="card-img-top p-3 product-image" alt="${escapeAttribute(product.name)}" style="object-fit: contain; height: 180px;">
        
        <div class="card-body d-flex flex-column p-3">
          <h6 class="card-title text-dark fw-semibold text-truncate mb-1" style="font-size: 0.92rem;" title="${escapeAttribute(product.name)}">${escapeAttribute(product.name)}</h6>
          <p class="price mb-2" style="font-size: 1.1rem; font-weight: 700; color: #2c3e50; margin-top: 2px;">${displayPrice}</p>
          <span class="text-uppercase tracking-wider text-muted mb-3" style="font-size: 0.72rem; letter-spacing: 0.5px;">${escapeAttribute(product.brand)}</span>
          
          <button class="btn btn-dark w-100 py-2 mt-auto text-uppercase fw-bold border-0 tracking-wider" 
                  style="font-size: 0.78rem; border-radius: 4px;"
                  onclick="event.stopPropagation(); if(typeof addToCart === 'function') { addToCart(${product.id}, '${product.name.replace(/'/g, "\\'")}', ${safeNumPrice}) }">
            Add To Cart
          </button>
        </div>
      </div>
    `;

    const favoriteButton = colCard.querySelector(".fav-btn");
    if (favoriteButton && typeof toggleFavorite === "function") {
      favoriteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleFavorite({
          id: product.id,
          name: product.name,
          price: safeNumPrice,
          image: product.image || ""
        }, favoriteButton);
      });
    }

    resultsContainer.appendChild(colCard);
  });
}