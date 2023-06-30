// 3.1
function loaiBoGiaTriSai(mang) {
  return mang.filter(function (item) {
    return (
      item !== false &&
      item !== null &&
      item !== undefined &&
      !Number.isNaN(item) &&
      item !== 0 &&
      item !== ""
    );
  });
}

console.log(loaiBoGiaTriSai([false, null, undefined, NaN, 0, ""])); // Kết quả: []
console.log(loaiBoGiaTriSai([1, 2, false, 3, null, undefined, NaN, 0, ""])); // Kết quả: [1, 2, 3]

//   3.2
function locPhanTuCoDoDaiLonNhat(mang) {
  var doDaiLonNhat = Math.max(...mang.map((item) => item.length));

  return mang.filter((item) => item.length === doDaiLonNhat);
}

console.log(locPhanTuCoDoDaiLonNhat(["aba", "aa", "ad", "c", "vcd"])); // Kết quả: ["aba", "vcd"]

// 3.3

function soSanhMang(mang1, mang2) {
  var mangKetQua = [];

  mang1.forEach(function (item) {
    if (!mang2.includes(item)) {
      mangKetQua.push(item);
    }
  });

  mang2.forEach(function (item) {
    if (!mang1.includes(item)) {
      mangKetQua.push(item);
    }
  });

  return mangKetQua;
}

console.log(soSanhMang([1, 2, 3], [1, 3, 4, 5, 5])); // Kết quả: [2, 4, 5, 5]

//   3.4
function taoMangZigZag(m, n) {
  var mang2Chieu = [];

  var soBatDau = 1;
  for (var i = 1; i <= m; i++) {
    var hang = [];
    for (var j = 1; j <= n; j++) {
      if (i % 2 === 0) {
        hang.unshift(soBatDau);
      } else {
        hang.push(soBatDau);
      }
      soBatDau++;
    }
    mang2Chieu.push(hang);
  }

  return mang2Chieu;
}

console.log(taoMangZigZag(3, 4));
// Kết quả: [[1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12]]
