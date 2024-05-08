// ------1------
document.querySelector('#t1').addEventListener('click', function() {
    this.style.backgroundColor = 'green';});

// ------2------
var container = document.getElementById('container1');
var themeIcon = document.getElementById('toggle-theme-icon');

themeIcon.addEventListener('click', function() {
  var isDark = container.style.backgroundColor === 'black';

  container.style.backgroundColor = isDark ? 'white' : 'black';
  container.style.color = isDark ? 'black' : 'white';
  themeIcon.className = isDark ? 'far fa-moon' : 'far fa-sun';});

// --------3-----------
document.querySelectorAll('.icon').forEach(function(icon) {
  icon.addEventListener('click', function() {
    var targetId = this.dataset.target;
    var targetGroup = document.getElementById(targetId);
    targetGroup.style.display = targetGroup.style.display === 'none' ? 'block' : 'none';
  });
});

// ---------4---------
const stars = document.querySelectorAll('.fa-star');
const ratingText = document.getElementById('rating-text');
const messages = {
  1: 'Sorry',
  2: 'Not Bad',
  3: 'Thanks',
  4: 'Very Good',
  5: 'Great'
};

stars.forEach(star => {
  star.addEventListener('click', function() {
    updateRating(this.dataset.rate);
  });
});

function updateRating(rate) {
  stars.forEach(star => {
    star.classList.remove('orange');
    if(star.dataset.rate <= rate) {
      star.classList.add('orange');
    }
  });
  
  ratingText.textContent = messages[rate];
}