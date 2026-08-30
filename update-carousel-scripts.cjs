const fs = require('fs');

const interceptor = `<script id="project-click-interceptor">
  (function() {
    let startX = 0, startY = 0;
    document.addEventListener('pointerdown', function(e) {
      startX = e.clientX;
      startY = e.clientY;
    }, true);

    document.addEventListener('click', function(e) {
      let a = e.target.closest('a');
      if (a && a.href && a.href.includes('framer.com')) return;
      if (e.target.closest('[aria-label^="Show card"]') || e.target.closest('[aria-label="Carousel pagination"]')) return;

      let dx = Math.abs(e.clientX - startX);
      let dy = Math.abs(e.clientY - startY);
      if (dx > 15 || dy > 15) return;

      let clickedSlideStr = "";
      
      if (a && a.getAttribute('aria-label')) {
         let label = a.getAttribute('aria-label');
         if (label.toLowerCase().includes('slide')) {
             clickedSlideStr = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
         } else {
             clickedSlideStr = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
         }
      }

      if (!clickedSlideStr) {
        let img = e.target.closest('img');
        if (img && img.src && img.src.includes('slide-')) {
           let m = img.src.match(/slide-(\d+)/);
           if (m) clickedSlideStr = "slide-" + m[1];
        }
      }
      
      if (!clickedSlideStr) {
         try {
           let style = window.getComputedStyle(e.target);
           if (style.backgroundImage && style.backgroundImage.includes('slide-')) {
              let m = style.backgroundImage.match(/slide-(\d+)/);
              if (m) clickedSlideStr = "slide-" + m[1];
           }
         } catch(err) {}
      }
      
      // Fallback: If they clicked a div with a framer class, assume they clicked the active slide or slide-1
      if (!clickedSlideStr && e.target.closest('div[class^="framer-"]')) {
         // Not empty space, maybe just go to a default slide
         clickedSlideStr = "work-landing";
      }

      if (clickedSlideStr) {
         e.preventDefault();
         e.stopPropagation();
         window.parent.postMessage({ type: 'PROJECT_CLICK', slug: clickedSlideStr, label: 'Project' }, '*');
      }
    }, true);
  })();
</script></body></html>`;

function updateFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove old interceptor
    let startIdx = content.indexOf('<script id="project-click-interceptor">');
    if (startIdx !== -1) {
        content = content.substring(0, startIdx);
    } else {
        content = content.replace('</body></html>', '');
    }
    
    content = content + interceptor;
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + filePath);
}

updateFile('public/assets/all-works-mobile-carousel/index.html');
updateFile('public/assets/all-works-carousel/index.html');
