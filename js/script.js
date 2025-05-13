// Wait for DOM to fully load before executing scripts
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle with null check
  const menuBtn = document.getElementById("menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      const menu = document.getElementById("mobile-menu");
      if (menu) menu.classList.toggle("hidden");
    });
  }

  // Toggle award details with null check
  const toggleButtons = document.querySelectorAll('.toggle-details');
  if (toggleButtons.length > 0) {
    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        if (details) {
          details.classList.toggle('hidden');
          button.innerHTML = details.classList.contains('hidden') ? 
            'Show Details <i class="fas fa-chevron-down ml-1"></i>' : 
            'Hide Details <i class="fas fa-chevron-up ml-1"></i>';
        }
      });
    });
  }

  // Interactive bullets with null check
  const experienceItems = document.querySelectorAll('#experience li');
  if (experienceItems.length > 0) {
    experienceItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(5px)';
      });
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
      });
    });
  }

  // Typing Effect with null check and cleanup
  const typingElement = document.getElementById("typing-text");
  if (typingElement) {
    const text = "Data Scientist | Machine Learning Engineer | AI Enthusiast";
    let index = 0;
    const speed = 100;
    
    // Clear any existing content
    typingElement.innerHTML = '';
    
    function typeWriter() {
      if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  }

  // Initialize AOS if available
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
});