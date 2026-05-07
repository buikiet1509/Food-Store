    function toggleMenu() {
      const dropdownButton = document.getElementById('dropdownButton');
      dropdownButton.classList.toggle('open');
    }

    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }