// (OOP)
function ThongTinNhanVien(
  taiKhoan,
  hoTen,
  email,
  mk,
  date,
  luong,
  chucvu,
  time
) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.mk = mk;
  this.date = date;
  this.luong = luong;
  this.chucVu = chucvu;
  this.time = time;
  this.xepLoai = '';
  this.tongLuong = 0;
  /**
   * Sếp : x3
   * Trưởng phòng : x2
   * Nhân viên: x1
   */

  this.tinhLuong = function () {
    this.tong = 0;
    if (this.chucVu === 'Sếp') {
      this.tong = (this.luong * this.time * 3).toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
      });
    } else if (this.chucVu === 'Trưởng phòng') {
      this.tong = (this.luong * this.time * 2).toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
      });
    } else {
      this.tong = (this.luong * this.time).toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
      });
    }
    return this.tong;
  };

  /**
   * Giỏi >= 160
   * Khá  100 <= time < 160
   * Trung bình  time < 100
   */
  this.tinhXepLoai = function () {
    this.ketQua = '';
    if (this.time < 100) {
      this.ketQua = 'Trung Bình';
    } else if (this.time >= 100 && this.time < 160) {
      this.ketQua = 'Khá';
    } else {
      this.ketQua = 'Giỏi';
    }

    return this.ketQua;
  };
}
