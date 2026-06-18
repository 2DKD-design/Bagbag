

// 1. Pehle hum define karenge ki kis category me kya links dikhane hain
const categoryData = {
  "Women": [
    { text: "Ethnic Wear", url: "#" },
    { text: "Western Wear", url: "#" },
    { text: "Footwear", url: "#" },
    { text: "Jewellery", url: "#" }
  ],
  "Men": [
    { text: "Shirts & T-shirts", url: "#" },
    { text: "Jeans & Trousers", url: "#" },
    { text: "Activewear", url: "#" },
    { text: "Shoes", url: "#" }
  ],
  "Brands": [
    { text: "Nike", url: "#" },
    { text: "Adidas", url: "#" },
    { text: "Zara", url: "#" },
    { text: "Puma", url: "#" }
  ],
  "Services": [
    { text: "Personal Styling", url: "#" },
    { text: "Fast Delivery", url: "#" },
    { text: "Easy Returns", url: "#" }
  ],
  "Contact us": [
    { text: "Customer Care", url: "#" },
    { text: "Store Locator", url: "#" },
    { text: "FAQ", url: "#" }
  ]
};

// Variable definitions (jo aapne use kiye hain)
const PRIMARY_WIDTH = "250px"; 
const SECONDARY_WIDTH = "250px";

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
