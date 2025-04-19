document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const toggleButton = document.createElement('button');
  
  toggleButton.textContent = '☰';
  toggleButton.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background-color: #822659; /* Matching luxury theme */
      color: #F0F0F0; 
      border: none;
      padding: 10px;
      cursor: pointer;
      z-index: 1000;
  `;
  
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener('click', () => {
      nav.classList.toggle('visible');
      nav.style.display = nav.classList.contains('visible') ? 'block' : 'none';
  });

  window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
          nav.style.display = 'flex';
          nav.classList.remove('visible');
      } else {
          nav.style.display = 'none';
      }
  });
});
