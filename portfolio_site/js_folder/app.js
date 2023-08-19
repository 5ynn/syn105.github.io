function toggleClass() {
    const dropdown = document.getElementById('dropdown');
    const isOpen = dropdown.classList.contains('open');
    
    if (!isOpen) {
      dropdown.style.maxHeight = '0';
      dropdown.style.opacity = '0';
      dropdown.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out';
      setTimeout(() => {
        dropdown.style.maxHeight = '200px'; // Adjust the value to fit your content
        dropdown.style.opacity = '1';
      }, 10);
    } else {
      dropdown.style.maxHeight = '0';
      dropdown.style.opacity = '0';
    }
  
    dropdown.classList.toggle('open');
  }
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (event) => {
    const dropdown = document.getElementById('dropdown');
    const dropdownButton = document.getElementById('nav-button');
  
    if (!dropdown.contains(event.target) && !dropdownButton.contains(event.target)) {
      dropdown.style.maxHeight = '0';
      dropdown.style.opacity = '0';
      dropdown.classList.remove('open');
    }
  });
  
  