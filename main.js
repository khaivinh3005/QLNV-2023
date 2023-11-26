const danhSachNhanVien = new DanhSachNhanVien();
const validation = new Validation();
const getELE = (id) => {
  return document.getElementById(id);
};

console.log('danhSachNhanVien : ', danhSachNhanVien);

const setLocalStorage = (dsnv) => {
  localStorage.setItem('DSNV', JSON.stringify(dsnv));
};

const showUI = (danhSachNhanVien) => {
  let content = '';
  danhSachNhanVien.map((nv) => {
    content += `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.date}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.xepLoai}</td>
                <td class="d-flex"> <button onclick = "xoaNV('${nv.taiKhoan}')" class="btn btn-danger mx-1">Xoá</button>
                <button onclick = "xemNV('${nv.taiKhoan}')" class="btn btn-success mx-1">Xem</button></td>
            </tr>
        `;
  });
  getELE('tableDanhSach').innerHTML = content;
};

const themNhanVien = () => {
  const taiKhoan = getELE('tknv').value;
  const name = getELE('name').value;
  const email = getELE('email').value;
  const mk = getELE('password').value;
  const date = getELE('datepicker').value;
  const luong = getELE('luongCB').value;
  const chucVu = getELE('chucvu').value;
  const gioLam = getELE('gioLam').value;

  let isValid = false;

  // Check tk có giá trị và Check tk có trùng hay không
  isValid =
    validation.checkEmpty(
      taiKhoan,
      'tbTKNV',
      'Vui lòng nhập tài khoản nhân viên'
    ) &&
    validation.checkDuplication(
      danhSachNhanVien.dsnv,
      taiKhoan,
      'tbTKNV',
      'Đã tồn tại'
    );

  // Check Ten
  isValid &=
    validation.checkEmpty(name, 'tbTen', 'Vui lòng nhập tên') &&
    validation.checkFullName(name, 'tbTen', 'Vui lòng nhập đúng định dạng tên');

  if (isValid) {
    const nhanVien = new ThongTinNhanVien(
      taiKhoan,
      name,
      email,
      mk,
      date,
      luong,
      chucVu,
      gioLam
    );

    nhanVien.tongLuong = nhanVien.tinhLuong();
    nhanVien.xepLoai = nhanVien.tinhXepLoai();
    danhSachNhanVien.themNhanVien(nhanVien);

    //1 DanhSachNhanVien có 2 key là this.dsnv và this.themNhanVien nên phải trỏ tới dsnv để lấy danh sách
    showUI(danhSachNhanVien.dsnv);

    //2 Đẩy dsnv xuống localstorage
    setLocalStorage(danhSachNhanVien.dsnv);
  }
};

//3 Get local storage
const getLocalStorage = () => {
  if (localStorage.getItem('DSNV')) {
    // Lấy ở dưới local storage
    const listDSNV = JSON.parse(localStorage.getItem('DSNV'));

    // Cập nhật danh sáchh nhân viên
    danhSachNhanVien.dsnv = listDSNV;

    showUI(listDSNV);
  }
};

getLocalStorage();

const btnThemNhanVien = document.getElementById('btnThemNV');
btnThemNhanVien.addEventListener('click', themNhanVien);
