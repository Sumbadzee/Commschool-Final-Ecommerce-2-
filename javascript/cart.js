document.addEventListener('DOMContentLoaded', () => {
    const cartItems = []; // მასივი აითემების კარტში შესანახად
    const cartSidebar = document.getElementById('sidebar');
    const cartContainer = document.createElement('div'); 
    cartContainer.id = "cartItemsContainer";
    cartSidebar.appendChild(cartContainer);

    // ჯამური ფასის კონტეინერი
    const totalPriceContainer = document.createElement('div'); 
    totalPriceContainer.id = "totalPriceContainer";
    cartSidebar.appendChild(totalPriceContainer);

    // სრული ფასის დათვლის ფუნქცია
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace(/[₾\$]/g, '')); 
            return total + price;
        }, 0); 
    };

    const updateCart = () => {
        cartContainer.innerHTML = ''; // Clear the cart display
        if (cartItems.length === 0) {
            cartContainer.innerHTML = '<p>Your cart is empty.</p>';
            totalPriceContainer.innerHTML = ''; 
        } else {
            cartItems.forEach((item, index) => {
                const cartItemHTML = `
                    <div class="cart-item">
                        <p>${item.name} - ${item.price}</p>
                        <button class="remove-from-cart" data-index="${index}">Remove</button>
                    </div>
                `;
                cartContainer.innerHTML += cartItemHTML;
            });

            totalPriceContainer.innerHTML = `<p>Total Price: ${calculateTotalPrice()}₾</p>`;
        }
    };

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productDetails = event.target.closest('article');
            const name = productDetails.querySelector('.product-description').textContent.trim();
            const price = productDetails.querySelector('.product-price').textContent.trim();

            cartItems.push({ name, price });

            updateCart();
        });
    });

    // წაშლის ფუნქციონალი
    cartContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const index = event.target.getAttribute('data-index');
            cartItems.splice(index, 1); 
            updateCart(); 
        }
    });

    updateCart();
});
