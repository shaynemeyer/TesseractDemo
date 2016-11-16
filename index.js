var Tesseract = require('tesseract.js')
var image = require('path').resolve('./health-insurance-card-blog-idcard-dental-vision.jpg');

Tesseract.recognize(image)
  .then(data => {
    console.log(data.text);
  })
  .catch(err => {
    console.log('catch\n', err);
  })
  .finally(e => {
    console.log('finally\n');
    process.exit();
  });



