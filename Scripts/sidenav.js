


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


const PRIMARY_WIDTH = "500px"; 
const SECONDARY_WIDTH = "500px";


function openSecondaryNav(categoryName) {
  const secondaryNav = document.getElementById("mySecondaryNav");
  const secondaryLinksContainer = document.getElementById("secondaryLinks");
  
  
  document.getElementById("secondaryTitle").innerText = categoryName;
  
  
  secondaryLinksContainer.innerHTML = "";
  
  
  const linksToDisplay = categoryData[categoryName];
  
  if (linksToDisplay) {
  linksToDisplay.forEach(link => {
    const aTag = document.createElement("a");
    
    
    if (categoryName === "Women" || categoryName === "Men") {
      aTag.href = `products.html?gender=${categoryName}&type=${encodeURIComponent(link.text)}`;
    } 
    
    else if (categoryName === "Brands") {
      aTag.href = `products.html?brand=${encodeURIComponent(link.text)}`;
    } 
    
    else {
      aTag.href = link.url;
    }
    
    aTag.innerText = link.text;
    secondaryLinksContainer.appendChild(aTag);
  });
}

  
  if (window.innerWidth <= 768) {
    secondaryNav.style.left = "0";
    secondaryNav.style.width = "100%"; 
  } else {
    secondaryNav.style.left = PRIMARY_WIDTH;
    secondaryNav.style.width = SECONDARY_WIDTH;
  }
}


function closeSecondaryNav() {
  const secondaryNav = document.getElementById("mySecondaryNav");
  secondaryNav.style.width = "0";  
}


function closeAllNavs() {
  closeSecondaryNav();
  if (typeof closeNav === "function") {
    closeNav(); 
  }
  document.body.style.backgroundColor = "";
}

  