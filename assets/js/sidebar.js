document.addEventListener("DOMContentLoaded", function() {
    const chapters = document.querySelectorAll('.sidebar ul li strong');
    const expandAllButton = document.getElementById('expand-all');
    const collapseAllButton = document.getElementById('collapse-all');
  
    chapters.forEach(chapter => {
      chapter.addEventListener('click', function() {
        const subSectionList = this.nextElementSibling;
        if (subSectionList) {
          subSectionList.style.display = subSectionList.style.display === 'none' ? 'block' : 'none';
        }
      });
    });
  
    expandAllButton.addEventListener('click', function() {
      const subSections = document.querySelectorAll('.sub-section-list');
      subSections.forEach(subSection => {
        subSection.style.display = 'block';
      });
    });
  
    collapseAllButton.addEventListener('click', function() {
      const subSections = document.querySelectorAll('.sub-section-list');
      subSections.forEach(subSection => {
        subSection.style.display = 'none';
      });
    });
  });
  