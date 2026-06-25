/* Set the width of the side navigation to 250px */
      function openNav() {
        document.getElementById("mySidenav").style.width = "500px";
        document.body.style.backgroundColor = "";
      }

      /* Set the width of the side navigation to 0 */
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.body.style.backgroundColor = "";
      } 

      const Nav = document.querySelector('.navbar');

      // Triggers when the mouse moves over the element
      Nav.addEventListener('mouseenter', () => {
        Nav.classList.remove('navbar-dark');
        Nav.classList.add('navbar-light');
      });

      // Triggers when the mouse leaves the element
      Nav.addEventListener('mouseleave', () => {
        Nav.classList.remove('navbar-light');
        Nav.classList.add('navbar-dark');
      });

      document.onscroll = function() {myFunction()};

      function myFunction() {
        let Nav = document.querySelector('.navbar')
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          Nav.classList.remove('bg-transparent');
          Nav.classList.remove('navbar-dark');
          Nav.classList.add('bg-light');
          Nav.classList.add('navbar-light');

        }  else {
          Nav.classList.add('bg-transparent');
          Nav.classList.add('navbar-dark');
          Nav.classList.remove('bg-light');
          Nav.classList.remove('navbar-light');
        }
      }

      // Detect if the user interacts via a touch screen
        window.addEventListener('touchstart', function onFirstTouch() {
          // If a touch is detected, turn off the hover colors by matching them to the default dark styles
          document.documentElement.style.setProperty('--hover-bg', 'transparent');
          document.documentElement.style.setProperty('--hover-color', 'inherit');
          
          // Remove the listener immediately since we only need to detect it once
          window.removeEventListener('touchstart', onFirstTouch(), false);
        }, false);