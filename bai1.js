// 1.1
function tinhTheTichHinhCau(banKinh) {
  if (typeof (banKinh) != "number") {
    return "Bán kính phải là một số."; // check ban kinh la 1 so
  }
  if (banKinh <= 0) {
    return "Bán kính phải là một số dương."; // check ban kinh phai la so duong
  }

  var theTich = (4 / 3) * Math.PI * Math.pow(banKinh, 3); // cong thuc tinh the tich
  return theTich.toFixed(2);// lam tron 2 so
}

console.log(tinhTheTichHinhCau(2));

// 1.2
function tinhTongSoNguyenTrongDoan(a, b) {
  if (a-b == 1 || b-a==1) {
    return "Không tồn tại số nằm giữa 2 số đầu vào"; // check điều kiện
  }
  var start = Math.min(a, b) + 1; //tim so nho thu 2 trong 2 so
  var end = Math.max(a, b) - 1; // tim so lon thu 2 trong 2 so
  var sum = 0; // tao tong ban dau

  for (var i = start; i <= end; i++) {
    sum += i; // vong lap cong tong cac so
  }

  return sum;
}

console.log(tinhTongSoNguyenTrongDoan(3, 8));

// 1.3
function tinhTongUocSo(soNguyenDuong) {
  if (soNguyenDuong <= 0) {
    return "Số phải là một số nguyên dương.";
  }

  var sum = 0;

  for (var i = 1; i <= soNguyenDuong; i++) {
    if (soNguyenDuong % i === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(tinhTongUocSo(12));

// 1.4
function kiemTraSoNguyenTo(soNguyenDuong) {
  if (soNguyenDuong <= 1) { // so nguyen to tu 2,3,5,...
    return false;
  }

  for (var i = 2; i <= Math.sqrt(soNguyenDuong); i++) {
    if (soNguyenDuong % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(kiemTraSoNguyenTo(15));

// 1.5
function tinhTongSoNguyenToNhoHonHoacBang(n) {
  if (n <= 0) {
    return "Số phải là một số nguyên dương.";
  }
  var sum = 0;

  for (var i = 2; i <= n; i++) {
    if (kiemTraSoNguyenTo(i)) {
      sum += i;
    }
  }

  return sum;
}

console.log(tinhTongSoNguyenToNhoHonHoacBang(10));
