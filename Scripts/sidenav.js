// Assumed primary nav width when fully open
const PRIMARY_WIDTH = "250px"; 
const SECONDARY_WIDTH = "250px";

// Your existing open function (updated to use the constant width)
function openNav() {
  document.getElementById("mySidenav").style.width = PRIMARY_WIDTH;
}

// Your existing close function (updated to close both)
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  closeSecondaryNav(); // Closes inner nav if parent closes
}

// NEW: Open the secondary sidenav right next to the primary one
function openSecondaryNav(categoryName) {
  const secondaryNav = document.getElementById("mySecondaryNav");
  
  // Update the title dynamically based on what was clicked
  document.getElementById("secondaryTitle").innerText = categoryName;
  
  // 1. Position the inner nav right at the edge of the open primary nav
  secondaryNav.style.left = PRIMARY_WIDTH;
  
  // 2. Open its width
  secondaryNav.style.width = SECONDARY_WIDTH;
}

// NEW: Close only the secondary sidenav
function closeSecondaryNav() {
  const secondaryNav = document.getElementById("mySecondaryNav");
  secondaryNav.style.width = "0";
}
