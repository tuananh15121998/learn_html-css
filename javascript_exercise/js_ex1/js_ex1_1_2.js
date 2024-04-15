// 1. Dùng hàm isInteger để kiểm tra số nguyên dương. Tuy nhiên hàm này
// không thể nhận biết được số đó là số nguyên dương hay nguyên âm
function laSoNguyenDuong(value) {
  return Number.isInteger(value) && value > 0;
}

console.log(laSoNguyenDuong(1)); // true
console.log(laSoNguyenDuong(1.2)); // false
console.log(laSoNguyenDuong(3)); // true
console.log(laSoNguyenDuong(0)); // false

let laSoNguyenDuong = (value) => {
  return value > 0 && value % 1 == 0;
};
console.log(laSoNguyenDuong(1)); // true
console.log(laSoNguyenDuong(1.2)); // false
console.log(laSoNguyenDuong(3)); // true
console.log(laSoNguyenDuong(0)); // false

// Tuy nhiên nếu truyền vào một chuỗi vẫn dễ bị sai

//  Tương tự với kiểm tra một số có phải là số nguyên âm hay không
