
        
        
        document.querySelectorAll('.product-card').forEach(card => {
            const inputs = card.querySelectorAll('.variant-input');
            const mainViews = card.querySelectorAll('.main-view');

            inputs.forEach((input, index) => {
                input.addEventListener('change', () => {
                    
                    mainViews.forEach(img => img.classList.remove('visible'));
                    
                    
                    if (mainViews[index]) {
                        mainViews[index].classList.add('visible');
                    }
                });
            });
        });