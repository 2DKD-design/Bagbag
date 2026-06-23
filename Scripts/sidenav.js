

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
    { text: "Fast Delivery", url: "#" },
    { text: "Easy Returns", url: "#" },
    { text: "Catalog", url: "#" }
  ],
  "Contact us": [
    { text: "Customer Care", url: "#" },
    { text: "Store Locator", url: "#" },
    { text: "FAQ", url: "#" }
  ]
};

// Variable definitions (jo aapne use kiye hain)
const PRIMARY_WIDTH = "500px"; 
const SECONDARY_WIDTH = "500px";

// 2. Updated Function jo dynamic links add karega
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
    // Loop chalakar har link ko HTML me generate karenge
    linksToDisplay.forEach(link => {
      const aTag = document.createElement("a");
      aTag.href = link.url;
      aTag.innerText = link.text;
      secondaryLinksContainer.appendChild(aTag);
    });
  }

  // 1. Position the inner nav right at the edge of the open primary nav
  secondaryNav.style.left = PRIMARY_WIDTH;
  
  // 2. Open its width
  secondaryNav.style.width = SECONDARY_WIDTH;
}

// Close function (as it is)
function closeSecondaryNav() {
  const secondaryNav = document.getElementById("mySecondaryNav");
  secondaryNav.style.width = "0";  
}
