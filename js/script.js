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

  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const themeIcon = document.getElementById('theme-icon');
  const themeIconMobile = document.getElementById('theme-icon-mobile');

  function toggleTheme() {
    // Toggle dark mode class on html element
    document.documentElement.classList.toggle('dark');
    
    // Update icons
    const isDark = document.documentElement.classList.contains('dark');
    themeIcon.className = isDark ? 'fas fa-sun text-yellow-300' : 'fas fa-moon text-gray-700';
    themeIconMobile.className = isDark ? 'fas fa-sun text-yellow-300' : 'fas fa-moon text-gray-700';
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDark);
  }

  // Add event listeners to both buttons
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

  // Initialize theme
  if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
    themeIcon.className = 'fas fa-sun text-yellow-300';
    themeIconMobile.className = 'fas fa-sun text-yellow-300';
  }
  // Initialize AOS if available
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
});