document.addEventListener('DOMContentLoaded', function () {
    const tabsContainer = document.getElementById('tabs1');
    const tabs = tabsContainer.querySelectorAll('.tab');
    const tabContents = tabsContainer.querySelectorAll('.tab__content');
  
    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) {
          t.classList.remove('tab_active');
        });
        tabContents.forEach(function (content) {
          content.classList.remove('tab__content_active');
        });
  
        tab.classList.add('tab_active');
        tabContents[index].classList.add('tab__content_active');
      });
    });
  });
  