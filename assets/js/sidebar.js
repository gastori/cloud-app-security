document.addEventListener("DOMContentLoaded", function() {
    const chapters = document.querySelectorAll('.sidebar ul li strong');
    const expandAllButton = document.getElementById('expand-all');
    const collapseAllButton = document.getElementById('collapse-all');
  
    // Restore the state from localStorage
    chapters.forEach(chapter => {
      const subSectionList = chapter.nextElementSibling;
      const chapterId = chapter.textContent.trim(); // Use the chapter text as the key
      const isExpanded = localStorage.getItem(chapterId);
  
      if (isExpanded === 'true') {
        subSectionList.style.display = 'block';
      } else {
        subSectionList.style.display = 'none';
      }
    });
  
    // Toggle individual chapters and store state
    chapters.forEach(chapter => {
      chapter.addEventListener('click', function() {
        const subSectionList = this.nextElementSibling;
        const chapterId = this.textContent.trim();
  
        if (subSectionList) {
          const isCurrentlyExpanded = subSectionList.style.display === 'block';
          subSectionList.style.display = isCurrentlyExpanded ? 'none' : 'block';
  
          // Save the new state in localStorage
          localStorage.setItem(chapterId, !isCurrentlyExpanded);
        }
      });
    });
  
    // Expand all and store state
    expandAllButton.addEventListener('click', function() {
      const subSections = document.querySelectorAll('.sub-section-list');
      subSections.forEach(subSection => {
        subSection.style.display = 'block';
        const chapterId = subSection.previousElementSibling.textContent.trim();
        localStorage.setItem(chapterId, 'true');
      });
    });
  
    // Collapse all and store state
    collapseAllButton.addEventListener('click', function() {
      const subSections = document.querySelectorAll('.sub-section-list');
      subSections.forEach(subSection => {
        subSection.style.display = 'none';
        const chapterId = subSection.previousElementSibling.textContent.trim();
        localStorage.setItem(chapterId, 'false');
      });
    });
  });
  
  