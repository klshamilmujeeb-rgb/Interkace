const fs = require('fs');

function patch(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /imageUrl = style\.backgroundImage\.slice\(4, -1\)\.replace\(\/"\/g, ""\);/,
    "imageUrl = style.backgroundImage.replace(/^url\\(['\"]?([^'\"]+)['\"]?\\)/, '$1');"
  );
  fs.writeFileSync(file, content);
}

patch('public/assets/all-works-carousel/index.html');
patch('public/assets/all-works-mobile-carousel/index.html');
