var element = document.querySelector('.entry-content');
var text = element.textContent || element.innerText;
var words = text.trim().split(/\s+/);

var wordCount = words.length;
console.log("Số từ trong phần tử là: " + wordCount);
