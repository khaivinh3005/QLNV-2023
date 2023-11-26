/**
 check fullName: new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$");
 check email: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
 check pass: new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/);
 check time: time >= 80 && time <= 200
 * 
 */
function Validation() {
  this.getELE = function (id) {
    return document.getElementById(id);
  };

  //Check empty
  this.checkEmpty = function (element, id, content) {
    let isValid = false;
    const elementDOM = this.getELE(id);
    if (element) {
      elementDOM.innerHTML = '';
      elementDOM.style.display = 'none';
      isValid = true;
    } else {
      elementDOM.innerHTML = content;
      elementDOM.style.display = 'block';
      isValid = false;
    }

    return isValid;
  };

  this.checkDuplication = function (danhSachNhanVien, element, id, content) {
    const elementDOM = this.getELE(id);
    if (danhSachNhanVien) {
      const index = danhSachNhanVien.findIndex(
        (nhanVien) => nhanVien.taiKhoan === element
      );
      if (index !== -1) {
        elementDOM.innerHTML = content;
        elementDOM.style.display = 'block';
        return false;
      } else {
        elementDOM.innerHTML = '';
        elementDOM.style.display = 'none';
        return true;
      }
    } else {
      return true;
    }
  };

  this.checkFullName = function (element, id, content) {
    const elementDOM = this.getELE(id);
    // Check họ và tên
    var pattern = new RegExp('^[w-.]+@([w-]+.)+[w-]{2,4}$');

    if (pattern.test(element)) {
      elementDOM.innerHTML = '';
      return true;
    } else {
      elementDOM.style.display = 'block';
      elementDOM.innerHTML = content;
      return false;
    }
  };
}
