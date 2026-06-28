

// 1. Pehle hum define karenge ki kis category me kya links dikhane hain
const categoryData = {
  "Women": [
    { text: "Shoulder Bags", url: "#" },
    { text: "Frame Bags", url: "#" },
    { text: "Crossbody Bags", url: "#" },
    { text: "Handbags", url: "#" },
    { text: "Satchels", url: "#" },
    { text: "Pouch", url: "#" },
    { text: "Wallets", url: "#" },
    { text: "Tote Bags", url: "#" },
    { text: "Pochette", url: "#" },
    { text: "Pochette", url: "#" },
  ],
  "Men": [
    { text: "Backpacks", url: "#" },
    { text: "Crossbody Bags", url: "#" },
    { text: "Messenger Bags", url: "#" },
    { text: "Sling Bags", url: "#" },
    { text: "Briefcase", url: "#" },
    { text: "Laptop Bags", url: "#" },
    { text: "Duffel Bags", url: "#" },
    { text: "Document case", url: "#" },
    { text: "pouch/wallets", url: "#" },
  ],
  "Brands": [
    { text: "Montblanc", url: "#" },
    { text: "Adidas", url: "#" },
    { text: "Coach", url: "#" },
    { text: "YvesSaintLaurent", url: "#" },
    { text: "Michael Kors", url: "#" },
    { text: "Aodour", url: "#" },
    { text: "Jafferjees", url: "#" },
    { text: "Ralph Lauren", url: "#" },
    { text: "AK Galleria", url: "#" },
    { text: "Hub", url: "#" },
  ],
  "Services": [
    { text: "Track Your Order", url: "track-order.html" },
    { text: "Easy Returns", url: "returns.html" },
    { text: "Catalog", url: "catalog.xlsx", download: true }
  ],
  "Contact us": [
    { text: "Customer Care", url: "customerCare.html" },
    { text: "Store Locator", url: "stores.html" },
    { text: "FAQ", url: "faq.html" }
  ]
};

// Variable definitions (jo aapne use kiye hain)
const PRIMARY_WIDTH = "500px"; 
const SECONDARY_WIDTH = "500px";

// 2. Updated Function jo dynamic links add karega aur responsively position karega
function openSecondaryNav(categoryName) {
  const secondaryNav = document.getElementById("mySecondaryNav");
  const secondaryLinksContainer = document.getElementById("secondaryLinks");
  
  // Title update karein
  document.getElementById("secondaryTitle").innerText = categoryName;
  
  // Pehle purane links ko clear kar dete hain
  secondaryLinksContainer.innerHTML = "";
  
  // categoryData me se us specific category ke links nikalte hain
  const linksToDisplay = categoryData[categoryName];
  
  if (linksToDisplay) {
  linksToDisplay.forEach(link => {
    const aTag = document.createElement("a");
    
    // If filtering under Women or Men, attach gender and type filters to URL query string
    if (categoryName === "Women" || categoryName === "Men") {
      aTag.href = `products.html?gender=${categoryName}&type=${encodeURIComponent(link.text)}`;
    } 
    // If filtering under Brands, attach brand filter to URL query string
    else if (categoryName === "Brands") {
      aTag.href = `products.html?brand=${encodeURIComponent(link.text)}`;
    } 
    // Fallback for other items
    else {
      aTag.href = link.url;
    }
    
    aTag.innerText = link.text;
    secondaryLinksContainer.appendChild(aTag);
  });
}

  // RESPONSIVE CHECK: Agar screen width 768px ya usse kam h toh left 0 hoga, nahi to deskop behavior
  if (window.innerWidth <= 768) {
    secondaryNav.style.left = "0";
    secondaryNav.style.width = "100%"; // Take full screen on mobile
  } else {
    secondaryNav.style.left = PRIMARY_WIDTH;
    secondaryNav.style.width = SECONDARY_WIDTH;
  }
}

// Close only secondary nav (acts as "Back" on mobile)
function closeSecondaryNav() {
  const secondaryNav = document.getElementById("mySecondaryNav");
  secondaryNav.style.width = "0";  
}

// Complete close helper for the direct "X" close buttons
function closeAllNavs() {
  closeSecondaryNav();
  if (typeof closeNav === "function") {
    closeNav(); // Assuming closeNav() closes your primary #mySidenav
  }
  document.body.style.backgroundColor = "";
}

  