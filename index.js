
let images = document.querySelectorAll("img[data-src]");

// Створюємо спостерігача
let observer = new IntersectionObserver(function(entries, obs) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src; 
      entry.target.onload = function() {
        entry.target.classList.add("loaded"); 
      };
      obs.unobserve(entry.target); 
    }
  });
});


images.forEach(function(img) {
  observer.observe(img);
});


document.getElementById("loadImagesBtn").onclick = function() {
  images.forEach(function(img) {
    img.src = img.dataset.src;
    img.onload = function() {
      img.classList.add("loaded");
    };
    observer.unobserve(img);
  });
};
