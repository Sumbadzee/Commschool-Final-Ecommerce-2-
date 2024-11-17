const container = document.getElementById('container');

function createArticle(title, text, footerText, imgSrc, btn) {
  //დავამატე არტიკლი
  const article = document.createElement('article');
  article.classList.add('card'); 

  //შევქმენი ფოტოსთვის კონტეინერი
  const figure = document.createElement('figure');
  figure.classList.add('card-img');  
      
  // დავამატე ფოტო
  const img = document.createElement('img');
  img.src = imgSrc;  
  img.alt = "Image description";  
  img.classList.add('card-img-top');  
  figure.appendChild(img);
      
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-primary');  
  button.textContent = 'Add To Cart';

  const section = document.createElement('section');
  section.classList.add('card-body'); 
      
  const h5 = document.createElement('h5');
  h5.classList.add('card-title');  
  h5.textContent = title;  
      
  // ტექსტის დამატება ქარდზე
  const p = document.createElement('p');
  p.classList.add('card-text'); 
  p.textContent = text;  
      
  section.appendChild(h5);
  section.appendChild(p);
  section.appendChild(button);  
      
  // შევქმენი footer
  const footer = document.createElement('footer');
  footer.classList.add('card-footer'); 
      
  // Add footer text
  const small = document.createElement('small');
  small.classList.add('text-body-secondary'); 
  small.textContent = footerText;  
  footer.appendChild(small);

  article.appendChild(figure);
  article.appendChild(section);
  article.appendChild(footer);

  return article;
}

// დავამატე 9 არტიკლი
function addArticles() {
  const articleData = [
    {
      title: "Cheeseburger",
      text: "Fresh daily burger bun and beef, cheddar cheese, bacon, ketchup, mayo",
      footerText: "10.99₾",
      imgSrc: "product-img/cheeseburger.png"
    },
    {
      title: "Steak Burger",
      text: "Fresh daily burger bun and beef, cheddar cheese, bacon, ketchup, mayo",
      footerText: "14.99₾",
      imgSrc: "product-img/steak-burger.png"
    },
    {
      title: "Beconator",
      text: "Fresh daily burger bun and beef, cheddar cheese, bacon, ketchup, mayo",
      footerText: "13.99₾",
      imgSrc: "product-img/beconator.png"
    },
    {
      title: "Margherita Pizza",
      text: "Signature pizza dough, mozzarella cheese, special pizza sauce, oregano.",
      footerText: "21.99₾",
      imgSrc: "product-img/pizza-margherita1.png"
    },
    {
      title: "Pizza Pepperoni",
      text: "Signature pizza dough, mozzarella cheese, pepperoni, special pizza sauce, oregano.",
      footerText: "21.99₾",
      imgSrc: "product-img/pizza-pepperoni1.png"
    },
    {
      title: "Greek Pizza",
      text: "Signature pizza dough, mozzarella cheese, pepperoni, special pizza sauce, oregano.",
      footerText: "20.99₾",
      imgSrc: "product-img/greek-pizza1.png"
    },
    {
      title: "Coca-Cola",
      text: "Coca-cola, iced soda drink",
      footerText: "2.99₾",
      imgSrc: "product-img/coca-cola1.png"
    },
    {
      title: "Sprite",
      text: "Sprite, iced soda drink",
      footerText: "2.49₾",
      imgSrc: "product-img/sprite.webp"
    },
    {
      title: "Pepsi",
      text: "Pepsi, iced soda drink",
      footerText: "2.49₾",
      imgSrc: "product-img/pepsi1.png"
    }
  ];

  articleData.forEach(data => {
    const newArticle = createArticle(data.title, data.text, data.footerText, data.imgSrc);
    container.appendChild(newArticle);  
  });
}

// Call the function to add articles when the page loads
addArticles();


document.addEventListener('DOMContentLoaded', () => {
  const cartButton = document.getElementById('cartButton');
  const closeSidebarButton = document.getElementById('closeSidebarButton');
  const sidebar = document.getElementById('sidebar');
  // const button = document.querySelector('btn-primary');

  cartButton.addEventListener('click', () => {
      sidebar.classList.add('active');
  });

  closeSidebarButton.addEventListener('click', () => {
      sidebar.classList.remove('active');
  });
});
