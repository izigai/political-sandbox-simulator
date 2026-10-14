const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

const files = ['index.html', 'styles.css', 'app.js'];
for (const f of files) {
  fs.copyFileSync(path.join(__dirname, f), path.join(dist, f));
}
console.log('Build complete: files copied to dist/');
