document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Create message element
            const message = document.createElement('div');
            message.textContent = 'Thanks for contacting us';
            message.style.cssText = `
                background-color: #0366d6;
                color: white;
                padding: 12px 16px;
                border-radius: 6px;
                margin-top: 16px;
                text-align: center;
                font-weight: 500;
                animation: slideIn 0.3s ease-out;
            `;
            
            // Add animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `;
            document.head.appendChild(style);
            
            // Insert message below the form
            form.appendChild(message);
            
            // Clear form fields
            form.reset();
            
            // Remove message after 3 seconds
            setTimeout(function() {
                message.style.animation = 'slideIn 0.3s ease-out reverse';
                setTimeout(function() {
                    message.remove();
                }, 300);
            }, 3000);
        });
    }
});
