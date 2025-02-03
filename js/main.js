// Import modular functionality
import { initializeNavigation } from './modules/navigation.js';
import { initializeAnimations } from './modules/animations.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeAnimations();
}); 