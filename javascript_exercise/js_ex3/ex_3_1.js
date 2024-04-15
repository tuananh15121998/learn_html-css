// <!-- Dùng vòng lặp tính tổng các phần tử trong mảng -->

// <!-- Vòng lặp for -->
function sumArray(mang) {
  let sum = 0;
  for (let i = 0; i < mang.lenth; i++) {
    sum += mang[i];
  }
  return sum;
}

let mang = [1, 5, 9, 10];
console.log(sumArray(mang));

// <!-- Vòng lặp while -->

function sumArray_While(mang) {
  let sum = 0;
  let i = 0;
  while (i < mang.length) {
    sum += mang[i];
    i++;
  }
  return sum;
}
// <!-- Vòng lặp foreach -->
