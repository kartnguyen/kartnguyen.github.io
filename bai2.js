// 2.1
function vietHoaChuCaiDauTien(chuoi) {
  var words = chuoi.split(" "); // lay cac chu sau khoang trang

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
  }

  return words.join(" ");
}

console.log(vietHoaChuCaiDauTien("HELLO world"));

// 2.2
function chuyenSangSpinalCase(chuoi) {
  return chuoi.toLowerCase().replace(/\s+/g, "-"); // chuyen doi khaong trang thanh ky tu - (ko tinh den so luong khoang trang giua cac chu)
}

console.log(chuyenSangSpinalCase("HELLO world"));

// 2.3
function kiemTraChuoiDoiXung(chuoi) {
  var formattedString = chuoi.replace(/\s+/g, "").toLowerCase(); // xoa bo khang trang
  var reversedString = formattedString.split("").reverse().join(""); // dao nguoc ky tu

  return formattedString === reversedString;
}

console.log(kiemTraChuoiDoiXung("Race car")); // Kết quả: true
console.log(kiemTraChuoiDoiXung("hello world")); // Kết quả: false

// 2.4
function kiemTraChuoiChuaKyTu(chuoi1, chuoi2) {
  var formattedChuoi1 = chuoi1.toLowerCase().replace(/\s+/g, "");
  var formattedChuoi2 = chuoi2.toLowerCase().replace(/\s+/g, "");

  for (var i = 0; i < formattedChuoi2.length; i++) {
    if (!formattedChuoi1.includes(formattedChuoi2[i])) {
      return false;
    }
  }

  return true;
}

console.log(kiemTraChuoiChuaKyTu("HELLO world", "how")); // Kết quả: true
console.log(kiemTraChuoiChuaKyTu("HELLO world", "hey")); // Kết quả: false
console.log(kiemTraChuoiChuaKyTu("HELLO world", "ww")); // Kết quả: false
