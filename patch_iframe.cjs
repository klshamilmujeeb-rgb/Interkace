const fs = require('fs');

function patch(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /window\.parent\.postMessage\(\{\s*type:\s*'PROJECT_CLICK',\s*slug:\s*clickedSlideStr,\s*label:\s*'Project'\s*\}\s*,\s*'\*'\);/,
    `
         let rect = null;
         let imageUrl = '';
         try {
           if (e.target) {
             const bcr = e.target.getBoundingClientRect();
             rect = { top: bcr.top, left: bcr.left, width: bcr.width, height: bcr.height };
             
             let el = e.target;
             while(el && el !== document.body) {
                let style = window.getComputedStyle(el);
                if (style.backgroundImage && style.backgroundImage !== 'none') {
                   imageUrl = style.backgroundImage.slice(4, -1).replace(/"/g, "");
                   break;
                }
                if (el.tagName === 'IMG') {
                   imageUrl = el.src;
                   break;
                }
                el = el.parentElement;
             }
           }
         } catch(err) {}
         window.parent.postMessage({ type: 'PROJECT_CLICK', slug: clickedSlideStr, label: 'Project', rect, imageUrl }, '*');
    `
  );
  fs.writeFileSync(file, content);
}

patch('public/assets/all-works-carousel/index.html');
patch('public/assets/all-works-mobile-carousel/index.html');
