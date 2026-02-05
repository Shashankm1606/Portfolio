// ==================== PROJECTS DATA ====================
const projectsData = [
    {
        id: 1,
        title: "Task Management Dashboard",
        description: "A responsive task manager with drag-and-drop functionality, local storage persistence, and dark mode support.",
        tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
        features: [
            "Create, edit, and delete tasks",
            "Drag-and-drop prioritization",
            "Filter by status (all/active/completed)",
            "Dark mode toggle"
        ],
        github: "https://github.com/yourusername/task-dashboard",
        demo: "https://yourusername.github.io/task-dashboard",
        image: "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzcwMTcyNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        id: 2,
        title: "Weather Forecast App",
        description: "Real-time weather application that fetches data from OpenWeatherMap API with 5-day forecast and geolocation support.",
        tech: ["HTML", "CSS", "JavaScript", "REST API", "Geolocation API"],
        features: [
            "Current weather by city search",
            "5-day weather forecast",
            "Auto-detect location",
            "Responsive mobile design"
        ],
        github: "https://github.com/yourusername/weather-app",
        demo: "https://yourusername.github.io/weather-app",
        image: "https://images.unsplash.com/photo-1616002430110-ab30442021fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBzaG93Y2FzZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAyNjYyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        id: 3,
        title: "Restaurant Landing Page",
        description: "Modern, fully responsive restaurant website with animated menu sections, reservation form validation, and image gallery.",
        tech: ["HTML", "CSS", "JavaScript", "Form Validation"],
        features: [
            "Smooth scroll navigation",
            "Interactive menu with filtering",
            "Contact form with validation",
            "Mobile-first responsive design"
        ],
        github: "https://github.com/yourusername/restaurant-site",
        demo: "https://yourusername.github.io/restaurant-site",
        image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwMjIyNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        id: 4,
        title: "Calculator App",
        description: "Scientific calculator with history tracking, keyboard support, and clean UI inspired by modern design principles.",
        tech: ["HTML", "CSS", "JavaScript"],
        features: [
            "Basic and scientific operations",
            "Calculation history",
            "Keyboard shortcuts",
            "Clean, minimal interface"
        ],
        github: "https://github.com/yourusername/calculator",
        demo: "https://yourusername.github.io/calculator",
        image: "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzcwMTcyNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
];

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dark mode
    initDarkMode();
    
    // Initialize scroll effects
    initScrollEffects();
    
    // Load projects
    loadProjects();
    
    // Initialize form
    initContactForm();
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Add scroll animations
    initScrollAnimations();
});

// ==================== DARK MODE ====================
function initDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        updateDarkModeIcon(true);
    }
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateDarkModeIcon(isDark);
}

function updateDarkModeIcon(isDark) {
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    if (isDark) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
}

// ==================== NAVIGATION ====================
function initScrollEffects() {
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        const mobileNav = document.getElementById('mobileNav');
        if (!mobileNav.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    }
}

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    mobileNav.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

// ==================== PROJECTS ====================
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projectsData.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            
            <div class="project-section">
                <h4>Tech Stack</h4>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="project-section">
                <h4>Key Features</h4>
                <ul class="project-features">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="project-links">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link project-link-github">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                </a>
                <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link project-link-demo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// ==================== CONTACT FORM ====================
function initContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', handleFormSubmit);
    
    // Add real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        input.addEventListener('input', function() {
            // Clear error when user starts typing
            const errorElement = document.getElementById(`${this.name}Error`);
            if (errorElement) {
                errorElement.textContent = '';
                this.classList.remove('error');
            }
        });
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };
    
    // Clear previous errors
    clearFormErrors();
    
    // Validate all fields
    let isValid = true;
    isValid = validateField(form.name) && isValid;
    isValid = validateField(form.email) && isValid;
    isValid = validateField(form.message) && isValid;
    
    if (isValid) {
        // In a real implementation, this would send data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.remove('hidden');
        
        // Reset form
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    }
}

function validateField(field) {
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    const errorElement = document.getElementById(`${fieldName}Error`);
    
    let errorMessage = '';
    
    switch(fieldName) {
        case 'name':
            if (!fieldValue) {
                errorMessage = 'Name is required';
            }
            break;
            
        case 'email':
            if (!fieldValue) {
                errorMessage = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue)) {
                errorMessage = 'Please enter a valid email address';
            }
            break;
            
        case 'message':
            if (!fieldValue) {
                errorMessage = 'Message is required';
            } else if (fieldValue.length < 10) {
                errorMessage = 'Message must be at least 10 characters long';
            }
            break;
    }
    
    if (errorMessage) {
        errorElement.textContent = errorMessage;
        field.classList.add('error');
        return false;
    } else {
        errorElement.textContent = '';
        field.classList.remove('error');
        return true;
    }
}

function clearFormErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
    
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.classList.remove('error');
    });
}

// ==================== UTILITIES ====================
function downloadResume() {
    // In a real implementation, this would download an actual PDF file
    alert('Resume download functionality - Link this to your actual resume PDF file');
    // Example of how to trigger a download:
    // window.location.href = 'path/to/your/resume.pdf';
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll('.skill-card, .project-card, .experience-card, .education-card, .about-grid, .contact-grid');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// ==================== SMOOTH SCROLL POLYFILL ====================
// For older browsers that don't support smooth scroll
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = function(target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;
        
        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
    };
    
    // Override scrollToSection for older browsers
    const originalScrollToSection = window.scrollToSection;
    window.scrollToSection = function(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            smoothScrollPolyfill(element);
            const mobileNav = document.getElementById('mobileNav');
            if (!mobileNav.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        }
    };
}
