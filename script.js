/*==================================================
  Breva Health Website JavaScript
  
  Interactive functionality and animations for the
  Breva Health website. Features modern ES6+ syntax,
  performance-optimized animations, and accessibility
  considerations.
  
  Features:
  - Smooth scrolling navigation
  - Intersection Observer animations
  - Form validation and submission
  - Timeline web animations
  - Floating navigation system
  - Counter animations
  - Glassmorphism interactions
  
  All Rights Reserved © 2025 Breva Health
==================================================*/

document.addEventListener('DOMContentLoaded', function() {
    
    // Floating Navigation Toggle
    const floatingNavToggle = document.querySelector('.floating-nav-toggle');
    const floatingNavMenu = document.querySelector('.floating-nav-menu');
    
    if (floatingNavToggle) {
        floatingNavToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Navigation Items Click Handler
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close floating nav
                floatingNavToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');
            const isOpen = content.style.display === 'block';
            
            // Close all accordions
            accordionHeaders.forEach(h => {
                const c = h.nextElementSibling;
                const i = h.querySelector('.accordion-icon');
                c.style.display = 'none';
                i.textContent = '+';
                i.style.transform = 'rotate(0deg)';
            });
            
            // Open clicked accordion if it was closed
            if (!isOpen) {
                content.style.display = 'block';
                icon.textContent = '−';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
    
    // Enhanced timeline web animations
    function initializeTimelineWebAnimations() {
        const timelineNodes = document.querySelectorAll('.timeline-node');
        const connectionPaths = document.querySelectorAll('.connection-path');
        
        // Add hover effects for timeline nodes
        timelineNodes.forEach(node => {
            node.addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
                // Add subtle pulse effect
                const circle = this.querySelector('.node-circle');
                if (circle) {
                    circle.style.animation = 'pulse 1s ease-in-out';
                }
            });
            
            node.addEventListener('mouseleave', function() {
                this.style.zIndex = '2';
                const circle = this.querySelector('.node-circle');
                if (circle) {
                    circle.style.animation = '';
                }
            });
        });
        
        // Animate connection paths on scroll
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    connectionPaths.forEach((path, index) => {
                        setTimeout(() => {
                            path.style.animation = `drawPath 3s ease-in-out forwards`;
                        }, index * 500);
                    });
                }
            });
        }, { threshold: 0.3 });
        
        const timelineSection = document.querySelector('.timeline-section');
        if (timelineSection) {
            timelineObserver.observe(timelineSection);
        }
    }
    
    // Initialize timeline web animations
    initializeTimelineWebAnimations();
    
    // Modern Transitions System
    function initializeModernTransitions() {
        // Remove hero section animations and keep only necessary transitions
        const revealElements = document.querySelectorAll(`
            .features-grid .feature-item,
            .about-text,
            .timeline-node,
            .team-member,
            .blog-card,
            .founder-card,
            .contact-item,
            .email-form
        `);
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });
        
        revealElements.forEach(el => {
            el.classList.add('reveal-on-scroll');
            revealObserver.observe(el);
        });
        
        // Special observer for How It Works section
        const howItWorksObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const blocks = entry.target.querySelectorAll('.how-it-works-block');
                    blocks.forEach((block, index) => {
                        setTimeout(() => {
                            block.classList.add('animate-in');
                        }, index * 200);
                    });
                    howItWorksObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });
        
        const howItWorksSection = document.querySelector('.how-it-works-section');
        if (howItWorksSection) {
            howItWorksObserver.observe(howItWorksSection);
        }
        
        // Add stagger-container class to parent containers
        const staggerContainers = document.querySelectorAll(`
            .features-grid,
            .about-content,
            .founders-row,
            .team-grid,
            .blog-grid,
            .contact-items
        `);
        
        staggerContainers.forEach(container => {
            container.classList.add('stagger-container');
        });
        
        // Enhanced Magnetic Button Effects
        const buttons = document.querySelectorAll('.btn-primary');
        buttons.forEach(button => {
            // Ensure glow trail exists
            if (!button.querySelector('.glow-trail')) {
                const glowTrail = document.createElement('div');
                glowTrail.className = 'glow-trail';
                button.appendChild(glowTrail);
            }
            
            button.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                const glowTrail = this.querySelector('.glow-trail');
                if (glowTrail) {
                    glowTrail.style.setProperty('--x', x + '%');
                    glowTrail.style.setProperty('--y', y + '%');
                }
            });
            
            button.addEventListener('mouseleave', function() {
                const glowTrail = this.querySelector('.glow-trail');
                if (glowTrail) {
                    glowTrail.style.setProperty('--x', '50%');
                    glowTrail.style.setProperty('--y', '50%');
                }
            });
        });
        
        // Page Transition System
        function createPageTransitionOverlay() {
            const overlay = document.createElement('div');
            overlay.className = 'page-transition-overlay';
            document.body.appendChild(overlay);
            return overlay;
        }
        
        // Enhanced navigation with page transitions
        const navLinks = document.querySelectorAll('a[href^="#"], .nav-item');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href') || '#' + this.getAttribute('data-section');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        // Create smooth transition effect
                        const overlay = createPageTransitionOverlay();
                        overlay.classList.add('active');
                        
                        setTimeout(() => {
                            targetElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                            
                            setTimeout(() => {
                                overlay.classList.remove('active');
                                setTimeout(() => {
                                    overlay.remove();
                                }, 500);
                            }, 300);
                        }, 200);
                        
                        // Close floating nav if open
                        const floatingNavToggle = document.querySelector('.floating-nav-toggle');
                        if (floatingNavToggle) {
                            floatingNavToggle.setAttribute('aria-expanded', 'false');
                        }
                    }
                }
            });
        });
        
        // Enhanced parallax effects
        let ticking = false;
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const heroBackground = document.querySelector('.hero-bg-gradient');
            
            if (heroBackground) {
                const rate = scrolled * -0.3;
                heroBackground.style.transform = `translateY(${rate}px)`;
            }
            
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick, { passive: true });
        
        // Enhanced form animations
        const formInputs = document.querySelectorAll('.email-form input, .email-form textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }
    
    // Initialize modern transitions
    initializeModernTransitions();
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animations (excluding timeline items which have their own handler)
    document.querySelectorAll('.feature-item, .blog-card, .founder-card').forEach(el => {
        observer.observe(el);
    });
    
    // Counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-value');
        
        counters.forEach(counter => {
            const target = counter.innerText;
            const numericPart = target.replace(/[^\d]/g, '');
            const isNumber = numericPart !== '' && !isNaN(numericPart);
            
            if (isNumber) {
                const number = parseInt(numericPart);
                const suffix = target.replace(/[\d]/g, '');
                let current = 0;
                const increment = number / 30;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        current = number;
                        clearInterval(timer);
                    }
                    counter.innerText = Math.floor(current) + suffix;
                }, 50);
            }
            // For non-numeric values like "AI", just leave them as is
        });
    }
    
    // Trigger counter animation when stats section comes into view
    const statsSection = document.querySelector('.stats-row');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }
    
    // ==========================================
    // ENHANCED FORM SUBMISSION WITH EMAIL FUNCTIONALITY
    // Handles real email sending via Formspree with validation
    // ==========================================
    const emailForm = document.querySelector('.email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data and elements
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            const inputGroups = this.querySelectorAll('.input-group');
            const submitBtn = this.querySelector('.btn-submit');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnIcon = submitBtn.querySelector('.btn-icon');
            const btnSuccess = submitBtn.querySelector('.btn-success');
            
            // Validation object
            const validation = {
                firstName: {
                    value: data.firstName?.trim() || '',
                    isValid: function() { return this.value.length >= 2; },
                    errorMessage: 'First name must be at least 2 characters'
                },
                lastName: {
                    value: data.lastName?.trim() || '',
                    isValid: function() { return this.value.length >= 2; },
                    errorMessage: 'Last name must be at least 2 characters'
                },
                email: {
                    value: data.email?.trim() || '',
                    isValid: function() { 
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        return emailRegex.test(this.value);
                    },
                    errorMessage: 'Please enter a valid email address'
                }
            };
            
            // Reset all validation states
            inputGroups.forEach(group => {
                group.classList.remove('error', 'success');
                const errorMsg = group.querySelector('.error-message');
                if (errorMsg) errorMsg.remove();
            });
            
            // Validate all fields
            let isFormValid = true;
            Object.keys(validation).forEach(fieldName => {
                const field = validation[fieldName];
                const input = this.querySelector(`input[name="${fieldName}"]`);
                const inputGroup = input?.closest('.input-group');
                
                if (!field.isValid()) {
                    isFormValid = false;
                    if (inputGroup) {
                        inputGroup.classList.add('error');
                        
                        // Add error message
                        const errorDiv = document.createElement('div');
                        errorDiv.className = 'error-message';
                        errorDiv.textContent = field.errorMessage;
                        inputGroup.appendChild(errorDiv);
                    }
                }
            });
            
            // If validation fails, show errors and return
            if (!isFormValid) {
                // Shake the form container
                const formContainer = this.querySelector('.form-container');
                formContainer.classList.add('shake-error');
                
                setTimeout(() => {
                    formContainer.classList.remove('shake-error');
                    // Remove error messages after 5 seconds
                    inputGroups.forEach(group => {
                        if (group.classList.contains('error')) {
                            setTimeout(() => {
                                group.classList.remove('error');
                                const errorMsg = group.querySelector('.error-message');
                                if (errorMsg) errorMsg.remove();
                            }, 5000);
                        }
                    });
                }, 500);
                
                return;
            }
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            btnText.textContent = 'Sending...';
            btnIcon.style.opacity = '0.5';
            
            try {
                // Submit to Formspree
                const response = await fetch(this.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success! Show success state
                    await handleFormSuccess(inputGroups, submitBtn, btnText, btnIcon, btnSuccess);
                    
                    // Reset form after success
                    setTimeout(() => {
                        this.reset();
                        resetForm(inputGroups, submitBtn, btnText, btnIcon, btnSuccess);
                    }, 3000);
                    
                } else {
                    // Handle server errors
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to send email');
                }
                
            } catch (error) {
                console.error('Form submission error:', error);
                await handleFormError(submitBtn, btnText, btnIcon, error.message);
                
                // Reset button after error
                setTimeout(() => {
                    resetFormButton(submitBtn, btnText, btnIcon);
                }, 4000);
            }
        });
        
        // ==========================================
        // FLOATING LABEL ANIMATIONS
        // ==========================================
        const inputs = emailForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            const inputGroup = input.closest('.input-group');
            const label = inputGroup?.querySelector('.floating-label');
            
            if (label) {
                // Handle focus for floating labels
                input.addEventListener('focus', () => {
                    label.style.transform = 'translateY(-2px) scale(1.05)';
                    label.style.background = 'linear-gradient(135deg, var(--primary), var(--blue))';
                });
                
                // Handle blur
                input.addEventListener('blur', () => {
                    if (!input.value.trim()) {
                        label.style.transform = 'translateY(0) scale(1)';
                        label.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(99, 102, 241, 0.9))';
                    }
                });
                
                // Real-time validation on input
                input.addEventListener('input', () => {
                    const inputGroup = input.closest('.input-group');
                    inputGroup.classList.remove('error', 'success');
                    
                    const errorMsg = inputGroup.querySelector('.error-message');
                    if (errorMsg) errorMsg.remove();
                    
                    // Show success state for valid inputs
                    if (input.value.trim() && isFieldValid(input)) {
                        inputGroup.classList.add('success');
                    }
                });
                
                // Check if input has value on page load
                if (input.value.trim()) {
                    label.style.transform = 'translateY(-2px) scale(1.05)';
                    label.style.background = 'linear-gradient(135deg, var(--primary), var(--blue))';
                }
            }
        });
    }
    
    // ==========================================
    // FORM HELPER FUNCTIONS
    // ==========================================
    
    async function handleFormSuccess(inputGroups, submitBtn, btnText, btnIcon, btnSuccess) {
        // Show success state for all valid fields
        inputGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            if (input && input.value.trim()) {
                group.classList.remove('error');
                group.classList.add('success');
            }
        });
        
        // Animate button to success state
        submitBtn.classList.remove('loading');
        submitBtn.classList.add('success');
        btnText.textContent = 'Thank You!';
        btnIcon.style.opacity = '0';
        btnSuccess.style.opacity = '1';
        btnSuccess.style.transform = 'scale(1)';
        
        // Show success message
        showNotification('Thank you for joining our mailing list! We\'ll keep you updated on Breva\'s progress.', 'success');
    }
    
    async function handleFormError(submitBtn, btnText, btnIcon, errorMessage) {
        submitBtn.classList.remove('loading');
        submitBtn.classList.add('error');
        btnText.textContent = 'Try Again';
        btnIcon.style.opacity = '1';
        
        // Show error notification
        showNotification(`Error: ${errorMessage}. Please try again.`, 'error');
    }
    
    function resetForm(inputGroups, submitBtn, btnText, btnIcon, btnSuccess) {
        // Reset input groups
        inputGroups.forEach(group => {
            group.classList.remove('success', 'error');
            const label = group.querySelector('.floating-label');
            if (label) {
                label.style.transform = 'translateY(0) scale(1)';
                label.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(99, 102, 241, 0.9))';
            }
        });
        
        // Reset button
        resetFormButton(submitBtn, btnText, btnIcon, btnSuccess);
    }
    
    function resetFormButton(submitBtn, btnText, btnIcon, btnSuccess) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading', 'success', 'error');
        btnText.textContent = 'Send';
        btnIcon.style.opacity = '1';
        if (btnSuccess) {
            btnSuccess.style.opacity = '0';
            btnSuccess.style.transform = 'scale(0.5)';
        }
    }
    
    function isFieldValid(input) {
        const name = input.name;
        const value = input.value.trim();
        
        switch (name) {
            case 'firstName':
            case 'lastName':
                return value.length >= 2;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            default:
                return true; // Optional fields
        }
    }
    
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.form-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `form-notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <div class="notification-icon">
                    ${type === 'success' ? '✓' : type === 'error' ? '⚠' : 'ℹ'}
                </div>
                <span class="notification-text">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Auto remove after 7 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }
        }, 7000);
    }
    
    // Add glow trail effect to buttons
    const glowButtons = document.querySelectorAll('.btn-primary');
    glowButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            const glowTrail = this.querySelector('.glow-trail');
            if (glowTrail) {
                glowTrail.style.setProperty('--x', x + '%');
                glowTrail.style.setProperty('--y', y + '%');
            }
        });
    });
    
    // Active navigation highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navItems = document.querySelectorAll('.nav-item');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === current) {
                item.classList.add('active');
            }
        });
    }
    
    // Throttled scroll handler
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveNav, 10);
    });
    
    // Header scroll effect
    const header = document.querySelector('.site-nav');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });
    
    // Close floating nav when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.floating-nav')) {
            floatingNavToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Initialize tooltips and accessibility features
    function initializeAccessibility() {
        // Add keyboard navigation support
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                floatingNavToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Focus management for floating nav
        floatingNavToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Add focus indicators
        const focusableElements = document.querySelectorAll('button, a, input, textarea');
        focusableElements.forEach(el => {
            el.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--primary)';
                this.style.outlineOffset = '2px';
            });
            
            el.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });
    }
    
    initializeAccessibility();
    
    // Initialize page
    console.log('Breva Health website loaded successfully! 💜');
}); 