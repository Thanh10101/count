// Lấy phần tử có class 'my-class'
var element = document.querySelector('.entry-content');

// Lấy nội dung văn bản của phần tử
var text = element.textContent || element.innerText;

// Tách văn bản thành các từ bằng cách sử dụng split với dấu cách
var words = text.trim().split(/\s+/);

// Đếm số từ
var wordCount = words.length;

// In ra kết quả
console.log("Số từ trong phần tử là: " + wordCount);