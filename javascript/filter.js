// ფილტრის ფუნქცია
function filterArticles() {
  const searchInput = document.querySelector('.search-input'); 
  const articles = document.querySelectorAll('.card');  
    
  searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase(); 
  
    // ლუპით ვამოწმებთ თითოეულ ქარდს
    articles.forEach(article => {
      const title = article.querySelector('.card-title').textContent.toLowerCase();
        
      if (title.includes(query)) {
        article.style.display = '';  // ქარდის გამოტანა
      } else {
        article.style.display = 'none';  
      }
    });
  });
}
  
filterArticles();
  