
const productsData = [
  { id: 1, name: "Ultra Light Nylon Cross Body bottle bag", gender: "Unisex", type: "Bottle Bag / Crossbody", brand: "Aodour", price: "6,955", image: "Assets/Products/product-1.png" },
  { id: 2, name: "Men's retro leather large capacity backpack", gender: "Men", type: "Backpack", brand: "Aodour", price: "7,169", image: "Assets/Products/product-2.png" },
  { id: 3, name: "Men's compact textured everyday crossbody bag", gender: "Men", type: "Crossbody Bag", brand: "Aodour", price: "3,018", image: "Assets/Products/product-3.png" },
  { id: 4, name: "Men's oxford backpack with usb charger", gender: "Men", type: "Backpack", brand: "Aodour", price: "14,090", image: "Assets/Products/product-4.png" },
  { id: 5, name: "Urban tactical messenger crossbody bag", gender: "Men", type: "Messenger / Crossbody", brand: "Aodour", price: "5,673", image: "Assets/Products/product-5.png" },
  { id: 6, name: "Vintage PU leather travel backpack", gender: "Men", type: "Backpack", brand: "Aodour", price: "10,108", image: "Assets/Products/product-6.png" },
  { id: 7, name: "Onyx prism crossbody bag", gender: "Unisex", type: "Crossbody Bag", brand: "Aodour", price: "14,301", image: "Assets/Products/product-7.png" },
  { id: 8, name: "Men's slim dual-zip everyday crossbody bag", gender: "Men", type: "Crossbody Bag", brand: "Aodour", price: "1,672", image: "Assets/Products/product-8.png" },
  { id: 9, name: "PU leather business messenger bag", gender: "Men", type: "Messenger Bag", brand: "Aodour", price: "6,568", image: "Assets/Products/product-9.png" },
  { id: 10, name: "Trendy Oxford cloth men's outdoor messenger bag", gender: "Men", type: "Messenger Bag", brand: "Aodour", price: "6,573", image: "Assets/Products/product-10.png" },
  { id: 11, name: "Men's large capacity polyester travel chest bag", gender: "Men", type: "Chest Bag / Sling", brand: "Aodour", price: "4,322", image: "Assets/Products/product-11.png" },
  { id: 12, name: "Thin briefcase in sartorial leather", gender: "Men", type: "Briefcase", brand: "Montblanc", price: "622,050", image: "Assets/Products/product-12.png" },
  { id: 13, name: "Pouch in 4810 denim", gender: "Men", type: "Pouch", brand: "Montblanc", price: "178,640", image: "Assets/Products/product-13.png" },
  { id: 14, name: "Montblanc envelope clutch document holder", gender: "Men", type: "Document Holder / Clutch", brand: "Montblanc", price: "443,410", image: "Assets/Products/product-14.png" },
  { id: 15, name: "Laptop case in extreme leather", gender: "Men", type: "Laptop Case", brand: "Montblanc", price: "347,710", image: "Assets/Products/product-15.png" },
  { id: 16, name: "Montblanc Companion rectangular backpack", gender: "Men", type: "Backpack", brand: "Montblanc", price: "698,610", image: "Assets/Products/product-16.png" },
  { id: 17, name: "Medium on-body bag in extreme leather", gender: "Men", type: "Crossbody Bag", brand: "Montblanc", price: "443,410", image: "Assets/Products/product-17.png" },
  { id: 18, name: "Monteblanc envelope backpack", gender: "Men", type: "Backpack", brand: "Montblanc", price: "1,081,410", image: "Assets/Products/product-18.png" },
  { id: 19, name: "Vertical belt messenger bag in sartorial leather", gender: "Men", type: "Messenger Bag", brand: "Montblanc", price: "558,250", image: "Assets/Products/product-19.png" },
  { id: 20, name: "Chelsea Shoulder bag 36", gender: "Women", type: "Shoulder Bag", brand: "Coach", price: "151,525", image: "Assets/Products/product-20.png" },
  { id: 21, name: "Lana Shoulder bag 23", gender: "Women", type: "Shoulder Bag", brand: "Coach", price: "135,575", image: "Assets/Products/product-21.png" },
  { id: 22, name: "Large Kisslock frame bag in crystal signature jacquard", gender: "Women", type: "Frame Bag", brand: "Coach", price: "303,050", image: "Assets/Products/product-22.png" },
  { id: 23, name: "Chain tabby shoulder bag", gender: "Women", type: "Shoulder Bag", brand: "Coach", price: "189,805", image: "Assets/Products/product-23.png" },
  { id: 24, name: "Kisslock frame bag 16", gender: "Women", type: "Frame Bag", brand: "Coach", price: "126,005", image: "Assets/Products/product-24.png" },
  { id: 25, name: "Elora top handle crossbody bag", gender: "Women", type: "Crossbody Bag", brand: "Coach", price: "71,775", image: "Assets/Products/product-25.png" },
  { id: 26, name: "Juliet Shoulder bag 25 in signature canvas", gender: "Women", type: "Shoulder Bag", brand: "Coach", price: "119,625", image: "Assets/Products/product-26.png" },
  { id: 27, name: "Plaza Bag", gender: "Women", type: "Handbag", brand: "Coach", price: "55,825", image: "Assets/Products/product-27.png" },
  { id: 28, name: "Tabby shoulder bag 20 in crystal signaturer jacquard", gender: "Women", type: "Shoulder Bag", brand: "Coach", price: "157,905", image: "Assets/Products/product-28.png" },
  { id: 29, name: "Empire Carryall bag 34", gender: "Women", type: "Carryall / Satchel", brand: "Coach", price: "157,905", image: "Assets/Products/product-29.png" },
  { id: 30, name: "Essential Card holder wallet", gender: "Women", type: "Wallet / Card Holder", brand: "Coach", price: "43,065", image: "Assets/Products/product-30.png" },
  { id: 31, name: "Twin turnlock waverly bag", gender: "Women", type: "Handbag", brand: "Coach", price: "111,650", image: "Assets/Products/product-31.png" },
  { id: 32, name: "Kisslock pouch 24", gender: "Women", type: "Pouch", brand: "Coach", price: "94,105", image: "Assets/Products/product-32.png" },
  { id: 33, name: "Essential slim wallet in signature jacquard", gender: "Women", type: "Wallet", brand: "Coach", price: "62,205", image: "Assets/Products/product-33.png" },
  { id: 34, name: "Essential small zim around card case with pillow quilting", gender: "Women", type: "Card Case / Wallet", brand: "Coach", price: "39,875", image: "Assets/Products/product-34.png" },
  { id: 35, name: "Icarino in quilted Nappa", gender: "Women", type: "Handbag", brand: "Saint Laurent (YSL)", price: "889,600", image: "Assets/Products/product-35.png" },
  { id: 36, name: "Mombasa medium in suede", gender: "Women", type: "Hobo / Shoulder Bag", brand: "Saint Laurent (YSL)", price: "1,195,400", image: "Assets/Products/product-36.png" },
  { id: 37, name: "Icare medium in raffia", gender: "Women", type: "Tote Bag", brand: "Saint Laurent (YSL)", price: "1,195,400", image: "Assets/Products/product-37.png" },
  { id: 38, name: "Icare medium in quilted suede", gender: "Women", type: "Tote Bag", brand: "Saint Laurent (YSL)", price: "1,306,600", image: "Assets/Products/product-38.png" },
  { id: 39, name: "Jamie shoppin in raffia", gender: "Women", type: "Shoulder / Shopping Bag", brand: "Saint Laurent (YSL)", price: "1,084,200", image: "Assets/Products/product-39.png" },
  { id: 40, name: "Manon in raffia", gender: "Women", type: "Shoulder Bag", brand: "Saint Laurent (YSL)", price: "695,000", image: "Assets/Products/product-40.png" },
  { id: 41, name: "Le 5A 7 Small BEA In suede", gender: "Women", type: "Tote / Shoulder Bag", brand: "Saint Laurent (YSL)", price: "1,084,200", image: "Assets/Products/product-41.png" },
  { id: 42, name: "Jamie shopping in lambskin", gender: "Women", type: "Shoulder / Shopping Bag", brand: "Saint Laurent (YSL)", price: "1,195,400", image: "Assets/Products/product-42.png" },
  { id: 43, name: "Icare in smooth leather", gender: "Women", type: "Tote Bag", brand: "Saint Laurent (YSL)", price: "1,362,200", image: "Assets/Products/product-43.png" },
  { id: 44, name: "Cassandre pouch on chain in lambskin", gender: "Women", type: "Pouch on Chain / Wallet", brand: "Saint Laurent (YSL)", price: "542,100", image: "Assets/Products/product-44.png" },
  { id: 45, name: "Cassandre pouch on chain in pony hair leather", gender: "Women", type: "Pouch on Chain / Wallet", brand: "Saint Laurent (YSL)", price: "583,800", image: "Assets/Products/product-45.png" },
  { id: 46, name: "Le 5A 7 in crocodile-embossed patent leather", gender: "Women", type: "Shoulder Bag", brand: "Saint Laurent (YSL)", price: "722,800", image: "Assets/Products/product-46.png" },
  { id: 47, name: "Henly large leather in suede tote bag", gender: "Women", type: "Tote Bag", brand: "Michael Kors", price: "82,780", image: "Assets/Products/product-47.png" },
  { id: 48, name: "Jet Set travel medium pebbled leather totebag", gender: "Women", type: "Tote Bag", brand: "Michael Kors", price: "73,210", image: "Assets/Products/product-48.png" },
  { id: 49, name: "Laila medium pebbled leather tote bag", gender: "Women", type: "Tote Bag", brand: "Michael Kors", price: "82,844", image: "Assets/Products/product-49.png" },
  { id: 50, name: "Kyla Small Puffy Metallic Convertible Pochette (Gunmetal)", gender: "Women", type: "Pochette / Convertible Bag", brand: "Michael Kors", price: "43,924", image: "Assets/Products/product-50.png" },
  { id: 51, name: "Indie Medium Leather Pochette Shoulder Bag (Black)", gender: "Women", type: "Pochette / Shoulder Bag", brand: "Michael Kors", price: "100,914", image: "Assets/Products/product-51.png" },
  { id: 52, name: "Bryant Small pebbled Leather Convertible Pochette", gender: "Women", type: "Pochette / Convertible Bag", brand: "Michael Kors", price: "54,210", image: "Assets/Products/product-52.png" },
  { id: 53, name: "Carmine Medium Metallic Pebbled Leather Pochette", gender: "Women", type: "Pochette", brand: "Michael Kors", price: "62,200", image: "Assets/Products/product-53.png" },
  { id: 54, name: "Bryant Medium Logo Jacquard Denim Camera Crossbody Bag", gender: "Women", type: "Crossbody Bag", brand: "Michael Kors", price: "62,200", image: "Assets/Products/product-54.png" },
  { id: 55, name: "Laila Medium Leather Satchel Bag", gender: "Women", type: "Satchel Bag", brand: "Michael Kors", price: "99,524", image: "Assets/Products/product-55.png" },
  { id: 56, name: "Charlotte Large Saffiano Leather 3-in-1 Tote Bag", gender: "Women", type: "Tote Bag", brand: "Michael Kors", price: "82,844", image: "Assets/Products/product-56.png" },
  { id: 57, name: "Laila Medium Signature Logo Tote Bag", gender: "Women", type: "Tote Bag", brand: "Michael Kors", price: "71,724", image: "Assets/Products/product-57.png" },
  { id: 58, name: "Nolita Medium Nubuck Chain Pochette", gender: "Women", type: "Pochette", brand: "Michael Kors", price: "68,944", image: "Assets/Products/product-58.png" },
  { id: 59, name: "Jet Set Medium Pebbled Leather Convertible Crossbody Bag", gender: "Women", type: "Crossbody Bag", brand: "Michael Kors", price: "55,044", image: "Assets/Products/product-59.png" },
  { id: 60, name: "Trendy Oxford School Backpack for Teens and Students", gender: "Unisex", type: "Backpack", brand: "Aodour", price: "5,850", image: "Assets/Products/product-60.png" },
  { id: 61, name: "Men's Waterproof Trendy Nylon Commuting Backpack", gender: "Men", type: "Backpack", brand: "Aodour", price: "7,472", image: "Assets/Products/product-61.png" },
  { id: 62, name: "Large Capacity Oxford Cloth Men's Travel Backpack", gender: "Men", type: "Backpack", brand: "Aodour", price: "8,900", image: "Assets/Products/product-62.png" },
  { id: 63, name: "PU Leather Men's Retro Vertical Business Crossbody", gender: "Unisex", type: "Crossbody Bag", brand: "Jafferjees", price: "6,275", image: "Assets/Products/product-63.png" },
  { id: 64, name: "Regent Street Document Case", gender: "Unisex", type: "Document Case", brand: "Jafferjees", price: "14,200", image: "Assets/Products/product-64.png" },
  { id: 65, name: "Bowery Document Case", gender: "Unisex", type: "Document Case", brand: "Jafferjees", price: "15,500", image: "Assets/Products/product-65.png" },
  { id: 66, name: "IST Backpack", gender: "Unisex", type: "Backpack", brand: "Jafferjees", price: "12,800", image: "Assets/Products/product-66.png" },
  { id: 67, name: "Urban Elite Lightweight Crossbody Bag", gender: "Unisex", type: "Crossbody Bag", brand: "Aodour", price: "4,200", image: "Assets/Products/product-67.png" },
  { id: 68, name: "Men's Streamlined Multi-Pocket Gear Sling Crossbody Bag", gender: "Men", type: "Sling / Crossbody Bag", brand: "Aodour", price: "3,563", image: "Assets/Products/product-68.png" },
  { id: 69, name: "Men's Multi Compartment Backpack", gender: "Men", type: "Backpack", brand: "Aodour", price: "7,950", image: "Assets/Products/product-69.png" },
  { id: 70, name: "Expandable Tech Travel Backpack", gender: "Unisex", type: "Backpack", brand: "Aodour", price: "11,500", image: "Assets/Products/product-70.png" },
  { id: 71, name: "Broadway Document Case", gender: "Unisex", type: "Document case", brand: "Jafferjees", price: "27,000", image: "Assets/Products/product-71.png" },
  { id: 72, name: "Modern Urban Multi Compartment Laptop Backpack", gender: "Unisex", type: "Backpack", brand: "Aodour", price: "9,200", image: "Assets/Products/product-72.png" },
  { id: 73, name: "STOW - LIGHT BROWN", gender: "Men", type: "laptop bag", brand: "Hub", price: "38,990", image: "Assets/Products/product-73.png" },
  { id: 74, name: "DOMINION - BLACK", gender: "Men", type: "Briefcase", brand: "Hub", price: "34,000", image: "Assets/Products/product-74.png" },
  { id: 75, name: "ENVOY - BROWN", gender: "Men", type: "Briefcase", brand: "Hub", price: "43,990", image: "Assets/Products/product-75.png" },
  { id: 76, name: "TRIUMPH - TAN", gender: "Men", type: "Briefcase", brand: "Hub", price: "38,500", image: "Assets/Products/product-76.png" },
  { id: 77, name: "Pebbled Leather Duffel", gender: "Men", type: "Duffel", brand: "Ralph Lauren", price: "243,000", image: "Assets/Products/product-77.png" },
  { id: 78, name: "Cooper Burnished Calfskin Duffel", gender: "Men", type: "Duffel", brand: "Ralph Lauren", price: "1,161,850", image: "Assets/Products/product-78.png" },
  { id: 79, name: "Leather-Trim Indigo Denim Duffel", gender: "Men", type: "Duffel", brand: "Ralph Lauren", price: "200,100", image: "Assets/Products/product-79.png" },
  { id: 80, name: "Wimbledon Leather-Trim Canvas Tennis Bag", gender: "Men", type: "Duffel", brand: "Ralph Lauren", price: "179,100", image: "Assets/Products/product-80.png" },
  { id: 81, name: "Heritage Leather Backpack", gender: "Men", type: "Backpack", brand: "Ralph Lauren", price: "201,320", image: "Assets/Products/product-81.png" },
  { id: 82, name: "Indigo Denim Rucksack", gender: "Men", type: "Backpack", brand: "Ralph Lauren", price: "200,100", image: "Assets/Products/product-82.png" },
  { id: 83, name: "Pebbled Leather Backpack", gender: "Men", type: "Backpack", brand: "Ralph Lauren", price: "181,800", image: "Assets/Products/product-83.png" },
  { id: 84, name: "Flap-Top Canvas Backpack", gender: "Men", type: "Backpack", brand: "Ralph Lauren", price: "39,270", image: "Assets/Products/product-84.png" },
  { id: 85, name: "LARGE DUFFLE", gender: "Men", type: "Duffel", brand: "Adidas", price: "21,419", image: "Assets/Products/product-85.png" },
  { id: 86, name: "Prime 7 Backpack", gender: "Men", type: "Backpack", brand: "Adidas", price: "14,465", image: "Assets/Products/product-86.png" },
  { id: 87, name: "Utility 4 Sling bag", gender: "Men", type: "Sling / Crossbody Bag", brand: "Adidas", price: "8,067", image: "Assets/Products/product-87.png" },
  { id: 88, name: "Beacon Backpack", gender: "Men", type: "Backpack", brand: "Adidas", price: "20,863", image: "Assets/Products/product-88.png" },
  { id: 89, name: "Essentials 3 Slingbag", gender: "Men", type: "Sling / Crossbody Bag", brand: "Adidas", price: "13,352", image: "Assets/Products/product-89.png" },
  { id: 90, name: "Excel 7 backpack", gender: "Men", type: "Backpack", brand: "Adidas", price: "10,849", image: "Assets/Products/product-90.png" },
  { id: 91, name: "Mexico 26 Backpack", gender: "Men", type: "backpack", brand: "Adidas", price: "15,299", image: "Assets/Products/product-91.png" },
  { id: 92, name: "A tailor's son cairo backpack", gender: "Men", type: "Backpack", brand: "AK Galleria", price: "4,900", image: "Assets/Products/product-92.png" },
  { id: 93, name: "A tailor's son Denim Rucksack backpack", gender: "Men", type: "backpack", brand: "AK Galleria", price: "5,600", image: "Assets/Products/product-93.png" },
  { id: 94, name: "A tailor's son Mid Black Backpack", gender: "Men", type: "backpack", brand: "AK Galleria", price: "4,200", image: "Assets/Products/product-94.png" },
  { id: 95, name: "A tailor's son Black monogram cross bag", gender: "Men", type: "Crossbody Bag", brand: "AK Galleria", price: "2,200", image: "Assets/Products/product-95.png" },
  { id: 96, name: "A tailor's son GG stripe cross bag", gender: "Men", type: "Crossbody Bag", brand: "AK Galleria", price: "2,200", image: "Assets/Products/product-96.png" }
];






document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelectorAll(".filter-checkbox").forEach(input => {
    input.addEventListener("change", renderFilteredProducts);
  });

  
  applyUrlQueryFilters();

  
  renderFilteredProducts();

  
  const sortDropdown = document.getElementById("product-sort");
  if (sortDropdown) {
    sortDropdown.addEventListener("change", renderFilteredProducts);
  }
});

function renderFilteredProducts() {
  const grid = document.getElementById("products-grid");
  const fallbackMsg = document.getElementById("no-products-msg");
  const counterLabel = document.getElementById("product-count");
  const currentSortValue = document.getElementById("product-sort")?.value || "default";
  
  
  const activeFilters = {
    gender: Array.from(document.querySelectorAll('.filter-checkbox[data-filter-type="gender"]:checked')).map(el => el.value),
    type: Array.from(document.querySelectorAll('.filter-checkbox[data-filter-type="type"]:checked')).map(el => el.value),
    brand: Array.from(document.querySelectorAll('.filter-checkbox[data-filter-type="brand"]:checked')).map(el => el.value)
  };

  
  
  
  const isMenChecked = activeFilters.gender.includes("Men");
  const isWomenChecked = activeFilters.gender.includes("Women");

  const allTypeCheckboxes = document.querySelectorAll('.filter-checkbox[data-filter-type="type"]');
  const allBrandCheckboxes = document.querySelectorAll('.filter-checkbox[data-filter-type="brand"]');

  if ((isMenChecked && !isWomenChecked) || (!isMenChecked && isWomenChecked)) {
    const activeTargetGender = isMenChecked ? "men" : "women";

    
    allTypeCheckboxes.forEach(cb => {
      const parentRow = cb.closest('.form-check');
      if (!parentRow) return;

      const hasMatchingProduct = productsData.some(p => {
        const matchesGender = p.gender.toLowerCase() === activeTargetGender || p.gender === "Unisex";
        const matchesType = p.type.toLowerCase().includes(cb.value.toLowerCase()) || cb.value.toLowerCase().includes(p.type.toLowerCase());
        return matchesGender && matchesType;
      });

      if (!hasMatchingProduct) {
        parentRow.classList.add("d-none");
        if (cb.checked) {
          cb.checked = false;
          const index = activeFilters.type.indexOf(cb.value);
          if (index > -1) activeFilters.type.splice(index, 1);
        }
      } else {
        parentRow.classList.remove("d-none");
      }
    });

    
    allBrandCheckboxes.forEach(cb => {
      const parentRow = cb.closest('.form-check');
      if (!parentRow) return;

      const hasMatchingProduct = productsData.some(p => {
        const matchesGender = p.gender.toLowerCase() === activeTargetGender || p.gender === "Unisex";
        return matchesGender && p.brand === cb.value;
      });

      if (!hasMatchingProduct) {
        parentRow.classList.add("d-none");
        if (cb.checked) {
          cb.checked = false;
          const index = activeFilters.brand.indexOf(cb.value);
          if (index > -1) activeFilters.brand.splice(index, 1);
        }
      } else {
        parentRow.classList.remove("d-none");
      }
    });

  } else {
    
    allTypeCheckboxes.forEach(cb => cb.closest('.form-check')?.classList.remove("d-none"));
    allBrandCheckboxes.forEach(cb => cb.closest('.form-check')?.classList.remove("d-none"));
  }

  
  
  
  let processedList = productsData.filter(product => {
    
    const isMatchedGender = activeFilters.gender.length === 0 || 
                             activeFilters.gender.includes(product.gender) || 
                             product.gender === "Unisex";
                             
    
    const isMatchedType = activeFilters.type.length === 0 || 
                           activeFilters.type.some(filterType => {
                             const targetType = product.type.toLowerCase();
                             const inputType = filterType.toLowerCase();
                             return targetType.includes(inputType) || inputType.includes(targetType);
                           });
                           
    
    const isMatchedBrand = activeFilters.brand.length === 0 || activeFilters.brand.includes(product.brand);
    
    return isMatchedGender && isMatchedType && isMatchedBrand;
  });

  
  const cleanNumberValue = (priceString) => {
    if (!priceString) return 0;
    return parseFloat(priceString.toString().replace(/,/g, '')) || 0;
  };

  
  if (currentSortValue === "price-asc") {
    processedList.sort((itemA, itemB) => cleanNumberValue(itemA.price) - cleanNumberValue(itemB.price));
  } else if (currentSortValue === "price-desc") {
    processedList.sort((itemA, itemB) => cleanNumberValue(itemB.price) - cleanNumberValue(itemA.price));
  } else if (currentSortValue === "name-asc") {
    processedList.sort((itemA, itemB) => itemA.name.localeCompare(itemB.name));
  }

  
  if (counterLabel) counterLabel.innerText = processedList.length;

  
  grid.innerHTML = "";
  if (processedList.length === 0) {
    if (fallbackMsg) fallbackMsg.classList.remove("d-none");
    return;
  }
  if (fallbackMsg) fallbackMsg.classList.add("d-none");

  
  processedList.forEach(product => {
    const displayPrice = product.price ? `Rs. ${product.price}` : "Price Upon Request";
    
    
    const safeNumPrice = parseFloat(product.price.toString().replace(/,/g, '')) || 0;

    const colCard = document.createElement("div");
    colCard.className = "col";
    colCard.innerHTML = `
      <div class="card h-100 product-card border-0 shadow-sm position-relative" data-id="${product.id}">
        <button class="fav-btn btn position-absolute top-0 end-0 m-2 border-0 bg-transparent text-secondary fs-5" 
                data-id="${product.id}" 
                onclick="event.stopPropagation(); toggleFavorite({ id: ${product.id}, name: '${product.name.replace(/'/g, "\\'")}', price: ${safeNumPrice}, image: '${product.image}' }, this)">
          <i class="fa-regular fa-heart"></i>
        </button>
        
        <img src="${product.image}" class="card-img-top p-3 product-image" alt="${product.name}" style="object-fit: contain; height: 250px;">
        
        <div class="card-body d-flex flex-column p-3">
          <h6 class="card-title text-dark fw-semibold text-truncate mb-1" style="font-size: 0.92rem;" title="${product.name}">${product.name}</h6>
          <p class="price mb-2 text-dark" style="font-size: 1.1rem; font-weight: 700; margin-top: 2px;">${displayPrice}</p>
          <span class="text-uppercase tracking-wider text-muted mb-3" style="font-size: 0.72rem; letter-spacing: 0.5px;">${product.brand}</span>
          
          <button class="btn btn-dark w-100 py-2 mt-auto text-uppercase fw-bold border-0 tracking-wider" 
                  style="font-size: 0.78rem; border-radius: 4px; transition: background-color 0.2s;"
                  onclick="event.stopPropagation(); addToCart(${product.id}, '${product.name.replace(/'/g, "\\'")}', ${safeNumPrice})">
            Add To Cart
          </button>
        </div>
      </div>
    `;
    grid.appendChild(colCard);
  });

  
  if (typeof syncProductCardButtons === "function") {
    syncProductCardButtons();
  }
}


function applyUrlQueryFilters() {
  const params = new URLSearchParams(window.location.search);
  const genderParam = params.get('gender');
  const typeParam = params.get('type');
  const brandParam = params.get('brand');

  if (genderParam) {
    const cb = Array.from(document.querySelectorAll('.filter-checkbox[data-filter-type="gender"]'))
                    .find(c => c.value.toLowerCase() === genderParam.toLowerCase());
    if (cb) cb.checked = true;
  }

  if (typeParam) {
    
    let checkValue = typeParam;
    if (typeParam === "Shoulder Bags") checkValue = "Shoulder";
    if (typeParam === "Crossbody Bags") checkValue = "Crossbody";
    if (typeParam === "Backpacks") checkValue = "Backpack";
    if (typeParam === "Handbags") checkValue = "Handbag";
    if (typeParam === "Messenger Bags") checkValue = "Messenger";
    if (typeParam === "Laptop Bags") checkValue = "Laptop";
    if (typeParam === "Duffel Bags") checkValue = "Duffel";
    if (typeParam === "Sling Bags") checkValue = "Sling";

    const cb = Array.from(document.querySelectorAll('.filter-checkbox[data-filter-type="type"]'))
                    .find(c => checkValue.toLowerCase().includes(c.value.toLowerCase()) || c.value.toLowerCase().includes(checkValue.toLowerCase()));
    if (cb) cb.checked = true;
  }

  if (brandParam) {
    const cb = Array.from(document.querySelectorAll('.filter-checkbox[data-filter-type="brand"]'))
                    .find(c => c.value.toLowerCase() === brandParam.toLowerCase());
    if (cb) cb.checked = true;
  }
}