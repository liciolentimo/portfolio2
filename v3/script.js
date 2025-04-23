 // Mobile Menu Toggle
 const mobileMenuBtn = document.getElementById('mobileMenuBtn');
 const nav = document.getElementById('nav');
 
 mobileMenuBtn.addEventListener('click', () => {
     nav.classList.toggle('active');
     mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
         '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
 });
 
 // Close mobile menu when clicking a link
 const navLinks = document.querySelectorAll('nav ul li a');
 navLinks.forEach(link => {
     link.addEventListener('click', () => {
         nav.classList.remove('active');
         mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
     });
 });
 
 // Header scroll effect
 const header = document.getElementById('header');
 window.addEventListener('scroll', () => {
     if (window.scrollY > 100) {
         header.classList.add('scrolled');
     } else {
         header.classList.remove('scrolled');
     }
 });
 
 // Back to top button
 const backToTop = document.getElementById('backToTop');
 window.addEventListener('scroll', () => {
     if (window.scrollY > 300) {
         backToTop.classList.add('active');
     } else {
         backToTop.classList.remove('active');
     }
 });
 
 // Projects filter
 const filterBtns = document.querySelectorAll('.filter-btn');
 const projectCards = document.querySelectorAll('.project-card');
 
 filterBtns.forEach(btn => {
     btn.addEventListener('click', () => {
         // Remove active class from all buttons
         filterBtns.forEach(btn => btn.classList.remove('active'));
         // Add active class to clicked button
         btn.classList.add('active');
         
         const filter = btn.getAttribute('data-filter');
         
         projectCards.forEach(card => {
             if (filter === 'all') {
                 card.style.display = 'block';
             } else {
                 const categories = card.getAttribute('data-category').split(' ');
                 if (categories.includes(filter)) {
                     card.style.display = 'block';
                 } else {
                     card.style.display = 'none';
                 }
             }
         });
     });
 });
 
 // Form submission
 const form = document.getElementById('form');
 form.addEventListener('submit', (e) => {
     e.preventDefault();
     alert('Thank you for your message! I will get back to you soon.');
     form.reset();
 });
 
 // Animate skill bars on scroll
 const skillBars = document.querySelectorAll('.skill-progress');
 
 function animateSkillBars() {
     skillBars.forEach(bar => {
         const width = bar.style.width;
         bar.style.width = '0';
         setTimeout(() => {
             bar.style.width = width;
         }, 100);
     });
 }
 
 // Intersection Observer for animations
 const observerOptions = {
     threshold: 0.1
 };
 
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             if (entry.target.classList.contains('about-text')) {
                 animateSkillBars();
             }
             entry.target.classList.add('animated');
         }
     });
 }, observerOptions);
 
 // Observe elements
 const elementsToAnimate = document.querySelectorAll('.about-text, .service-card, .project-card');
 elementsToAnimate.forEach(element => {
     observer.observe(element);
 });