
        // Instead of messy IDs, this cleanly targets each card as an isolated block.
        // You can copy-paste as many product cards as you want without updating JS.
        document.querySelectorAll('.product-card').forEach(card => {
            const inputs = card.querySelectorAll('.variant-input');
            const mainViews = card.querySelectorAll('.main-view');

            inputs.forEach((input, index) => {
                input.addEventListener('change', () => {
                    // Hide whatever main image is currently shown in this card
                    mainViews.forEach(img => img.classList.remove('visible'));
                    
                    // Show the main variant image that matches the clicked swatch order
                    if (mainViews[index]) {
                        mainViews[index].classList.add('visible');
                    }
                });
            });
        });