document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');

    cardContainer.innerHTML += `
        <article>
            <figure class="product-image-container">
                <img src="product-img/cheeseburger.png" alt="cheeseburger" class="product-image">
            </figure>
            <div class="product-details">
                <p class="product-description">
                    Cheeseburger
                </p>
            </div>
            <footer class="product-footer">
                <p class="product-price">10.99₾</p>
                <button class="buutton add-to-cart">Add to Cart</button>
            </footer>
        </article>
    `;

    cardContainer.innerHTML += `
        <article>
            <figure class="product-image-container">
                <img src="product-img/beconator.png" alt="Product 1" class="product-image">
            </figure>
            <div class="product-details">
                <p class="product-description">
                    Beconator Burger
                </p>
            </div>
            <footer class="product-footer">
                <p class="product-price">13.99₾</p>
                <button class="buutton add-to-cart">Add to Cart</button>
            </footer>
        </article>
    `;

    cardContainer.innerHTML += `
    <article>
        <figure class="product-image-container">
            <img src="product-img/steak-burger.png" alt="Product 1" class="product-image">
        </figure>
        <div class="product-details">
            <p class="product-description">
                Steak Burger
            </p>
        </div>
        <footer class="product-footer">
            <p class="product-price">14.99₾</p>
            <button class="buutton add-to-cart">Add to Cart</button>
        </footer>
    </article>
`;

cardContainer.innerHTML += `
    <article>
        <figure class="product-image-container">
            <img src="product-img/pizza-margherita1.png" alt="Product 1" class="product-image">
        </figure>
        <div class="product-details">
            <p class="product-description">
                Pizza Margherita
            </p>
        </div>
        <footer class="product-footer">
            <p class="product-price">21.99₾</p>
            <button class="buutton add-to-cart">Add to Cart</button>
        </footer>
    </article>
`;


cardContainer.innerHTML += `
<article>
    <figure class="product-image-container">
        <img src="product-img/pizza-pepperoni1.png" alt="Product 1" class="product-image">
    </figure>
    <div class="product-details">
        <p class="product-description">
            Pizza Pepperoni
        </p>
    </div>
    <footer class="product-footer">
        <p class="product-price">21.99₾</p>
        <button class="buutton add-to-cart">Add to Cart</button>
    </footer>
</article>
`;

cardContainer.innerHTML += `
<article>
    <figure class="product-image-container">
        <img src="product-img/greek-pizza1.png" alt="Product 1" class="product-image">
    </figure>
    <div class="product-details">
        <p class="product-description">
            Greek Pizza
        </p>
    </div>
    <footer class="product-footer">
        <p class="product-price">20.99₾</p>
        <button class="buutton add-to-cart">Add to Cart</button>
    </footer>
</article>
`;

cardContainer.innerHTML += `
    <article>
        <figure class="product-image-container">
            <img src="product-img/pepsi1.png" alt="Product 1" class="product-image">
        </figure>
        <div class="product-details">
            <p class="product-description">
                Pepsi
            </p>
        </div>
        <footer class="product-footer">
            <p class="product-price">2.49₾</p>
            <button class="buutton add-to-cart">Add to Cart</button>
        </footer>
    </article>
`;


cardContainer.innerHTML += `
<article>
    <figure class="product-image-container">
        <img src="product-img/sprite.webp" alt="Product 1" class="product-image">
    </figure>
    <div class="product-details">
        <p class="product-description">
            Sprite
        </p>
    </div>
    <footer class="product-footer">
        <p class="product-price">2.49₾</p>
        <button class="buutton add-to-cart">Add to Cart</button>
    </footer>
</article>
`;

cardContainer.innerHTML += `
<article>
    <figure class="product-image-container">
        <img src="product-img/coca-cola1.png" alt="Product 1" class="product-image">
    </figure>
    <div class="product-details">
        <p class="product-description">
            Coca-Cola
        </p>
    </div>
    <footer class="product-footer">
        <p class="product-price">2.99₾</p>
        <button class="buutton add-to-cart">Add to Cart</button>
    </footer>
</article>
`;
});
