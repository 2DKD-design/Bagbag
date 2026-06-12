document.addEventListener("DOMContentLoaded", () => {
      const slides = document.querySelectorAll(".hub-slide");
      let currentIndex = 0;
      const displayDuration = 5000; // Rotates every 5 seconds

      function advanceSlide() {
        // Clear active class from the current slide
        slides[currentIndex].classList.remove("active");

        // Move to next slide layout index position
        currentIndex = (currentIndex + 1) % slides.length;

        // Apply active class to the newly targeted slide index
        slides[currentIndex].classList.add("active");
      }

      // Initialize automated seamless loop cycle
      setInterval(advanceSlide, displayDuration);
    });


  const myCarousel = document.querySelector('#demo');
  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 4000,   // 4 seconds
    ride: 'carousel'  // auto start
  });

