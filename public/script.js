function showTab(tabName) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const tabs = ['overview', 'prototype', 'business', 'odd', 'presentation', 'power-questions', 'flags', 'evaluation'];
    const currentTab = document.querySelector('.tab-content.active').id;
    const currentIndex = tabs.indexOf(currentTab);
    
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        const targetTab = tabs[currentIndex - 1];
        showTab(targetTab);
        document.querySelector(`[onclick="showTab('${targetTab}')"]`).classList.add('active');
    }
    
    if (e.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
        const targetTab = tabs[currentIndex + 1];
        showTab(targetTab);
        document.querySelector(`[onclick="showTab('${targetTab}')"]`).classList.add('active');
    }
});