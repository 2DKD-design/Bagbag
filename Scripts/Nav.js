
      function openNav() {
        document.getElementById("mySidenav").style.width = "500px";
        document.body.style.backgroundColor = "";
      }

      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.body.style.backgroundColor = "";
      } 

      const Nav = document.querySelector('.navbar');

      
      Nav.addEventListener('mouseenter', () => {
        Nav.classList.remove('navbar-dark');
        Nav.classList.add('navbar-light');
      });

      
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

      
        window.addEventListener('touchstart', function onFirstTouch() {
          
          document.documentElement.style.setProperty('--hover-bg', 'transparent');
          document.documentElement.style.setProperty('--hover-color', 'inherit');
          
          
          window.removeEventListener('touchstart', onFirstTouch(), false);
        }, false);