let soLanThu = 0;
let daDangNhap = false;
let taiKhoanQuanTri = "admin";
let matKhauQuanTri = "12345";

do {
  let taiKhoanNhap = prompt("Tên đăng nhập:");
  let matKhauNhap = prompt("Mật khẩu:");

  if (taiKhoanNhap === taiKhoanQuanTri && matKhauNhap === matKhauQuanTri) {
    alert("Đăng nhập thành công!");
    daDangNhap = true;
  } else {
    soLanThu = soLanThu + 1;
    if (taiKhoanNhap !== taiKhoanQuanTri) {
      alert(`Sai tài khoản! Còn ${3 - soLanThu} lần thử.`);
    } else {
      alert(`Sai mật khẩu! Còn ${3 - soLanThu} lần thử.`);
    }
  }
} while (soLanThu < 3 && daDangNhap === false);

if (daDangNhap === false) {
  alert("Tài khoản đã bị khóa!");
} else {
  let thuVien = ["Toán", "Văn", "Anh"];
  let luaChon = 0;
  do {
    let bangChon = `--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---
1. Nhập thêm lô sách mới
2. Hiển thị danh sách sách
3. Tìm kiếm sách
4. Cập nhật tên sách
5. Đảo ngược thứ tự kệ sách
6. Nhập kho từ nguồn khác
7. Thoát chương trình
Vui lòng chọn (1-7):`;

    luaChon = Number(prompt(bangChon));

    if (luaChon === 1) {
      let duLieuNhap = prompt("Nhập danh sách tên sách (cách nhau bởi dấu phẩy):");
      if (duLieuNhap) {
        let soSachThem = 0;
        let chuoiTam = "";

        for (let i = 0; i <= duLieuNhap.length; i++) {
          let kyTu = "";
          if (i < duLieuNhap.length) {
            kyTu = duLieuNhap[i];
          }

          if (i === duLieuNhap.length || kyTu === ",") {
            let batDau = -1;
            let ketThuc = -1;

            for (let j = 0; j < chuoiTam.length; j++) {
              if (chuoiTam[j] !== " ") {
                batDau = j;
                break;
              }
            }

            for (let j = chuoiTam.length - 1; j >= 0; j--) {
              if (chuoiTam[j] !== " ") {
                ketThuc = j;
                break;
              }
            }

            let tenSach = "";
            if (batDau !== -1 && ketThuc !== -1 && ketThuc >= batDau) {
              for (let j = batDau; j <= ketThuc; j++) {
                tenSach = tenSach + chuoiTam[j];
              }
            }

            if (tenSach !== "") {
              thuVien[thuVien.length] = tenSach;
              soSachThem = soSachThem + 1;
            }
            chuoiTam = "";
          } else {
            chuoiTam = chuoiTam + kyTu;
          }
        }

        alert(`Đã thêm thành công ${soSachThem} cuốn sách mới.`);
      }
    } else if (luaChon === 2) {
      console.clear();
      console.log("--- DANH SÁCH SÁCH HIỆN CÓ ---");
      if (thuVien.length === 0) {
        console.log("Thư viện hiện đang trống.");
      } else {
        let soThuTu = 1;
        for (let i = 0; i < thuVien.length; i++) {
          console.log(soThuTu + ". " + thuVien[i]);
          soThuTu = soThuTu + 1;
        }
      }
      alert("Danh sách đã được in ra console (F12).");
    } else if (luaChon === 3) {
      let tenCanTim = prompt("Nhập tên cuốn sách cần tìm:");
      let viTriTimThay = -1;

      for (let i = 0; i < thuVien.length; i++) {
        if (thuVien[i] === tenCanTim) {
          viTriTimThay = i;
          break;
        }
      }

      if (viTriTimThay !== -1) {
        alert(
          `Sách "${tenCanTim}" được tìm thấy tại vị trí số ${viTriTimThay} trong mảng.`,
        );
      } else {
        alert(`Không tìm thấy sách "${tenCanTim}" trong kho.`);
      }
    } else if (luaChon === 4) {
      let tenCu = prompt("Nhập tên sách cần sửa:");
      let viTriCanSua = -1;

      for (let i = 0; i < thuVien.length; i++) {
        if (thuVien[i] === tenCu) {
          viTriCanSua = i;
          break;
        }
      }

      if (viTriCanSua !== -1) {
        let tenMoi = prompt(`Tìm thấy sách "${tenCu}". Nhập tên mới:`);
        if (tenMoi) {
          thuVien[viTriCanSua] = tenMoi;
          alert("Cập nhật thành công!");
        }
      } else {
        alert("Sách không tồn tại để sửa.");
      }
    } else if (luaChon === 5) {
      let doDai = thuVien.length;
      for (let i = 0; i < doDai / 2; i++) {
        let tam = thuVien[i];
        thuVien[i] = thuVien[doDai - 1 - i];
        thuVien[doDai - 1 - i] = tam;
      }

      console.clear();
      console.log("--- KỆ SÁCH SAU KHI ĐẢO NGƯỢC ---");
      for (let i = 0; i < thuVien.length; i++) {
        console.log("Vị trí index [" + i + "]: " + thuVien[i]);
      }
      alert("Thứ tự trên kệ đã thay đổi. Kiểm tra console.");
    } else if (luaChon === 6) {
      let khoNgoai = ["Sách Kỹ Năng", "Truyện Tranh"];
      for (let i = 0; i < khoNgoai.length; i++) {
        thuVien[thuVien.length] = khoNgoai[i];
      }
      alert("Đã gộp kho sách từ chi nhánh khác thành công.");
    } else if (luaChon === 7) {
      alert("Hẹn gặp lại!");
    } else {
      alert("Lựa chọn không hợp lệ!");
    }
  } while (luaChon !== 7);
}
