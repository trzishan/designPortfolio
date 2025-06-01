var fs = require('fs');
var files = fs.readdirSync('images/');
console.log(files);

fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/contents/images')
  .then(res => res.json())
  .then(files => {
    const feed = document.getElementById('feed');
    files.forEach(file => {
      if (file.type === 'file' && /\.(jpg|png|jpeg|webp|gif)$/i.test(file.name)) {
        feed.insertAdjacentHTML('beforeend', `
          <div class="post" loading="lazy">
            <img src="${file.download_url}" alt="${file.name}">
          </div>
        `);
      }
    });
  });
