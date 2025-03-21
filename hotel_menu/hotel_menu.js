const contactElement = document.querySelector('#contactus');
const aboutElement =document.querySelector('#about');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
  
  entry.target.classList.add('visible');
} else {
  
  entry.target.classList.remove('visible');
}
});
});


observer.observe(contactElement);
observer.observe(aboutElement);
