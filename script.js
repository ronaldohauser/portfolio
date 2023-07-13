const navItems = document.querySelectorAll('nav ul li');

navItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    const underline = item.querySelector('.underline');
    underline.style.transform = 'scaleX(1)';
  });

  item.addEventListener('mouseout', () => {
    const underline = item.querySelector('.underline');
    underline.style.transform = 'scaleX(0)';
  });
});
