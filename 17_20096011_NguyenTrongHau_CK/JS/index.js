$(document).ready(function () {
  var i = 1;
  $("#btn2").click(function () {
    $("#myModal").modal();
  });
  // ======================== KIỂM TRA TÊN ===========================
  function kiemTraTen() {
    var i = 1;
    let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
    if ($("#Name").val() == "") {
      $("#tbName").html("Bắt buộc nhập");
      return false;
    }
    if (!mauKT.test($("#Name").val())) {
      $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
      return true;
    }
    $("#tbName").html("*");
    return true;
  }
  $("#Name").blur(kiemTraTen);
  // ======================== KIỂM SỐ CMND cũ ===========================

  function kiemTraSCMND() {
    let mauKT =  /^[0-9]{9}$/;
    if ($("#CMND").val() == "") {
      $("#tbCMND").html("Bắt buộc nhập");
      return false;
    }
    if (!mauKT.test($("#CMND").val())) {
      $("#tbCMND").html("Dùng số từ 1 đến 9");
      return true;
    }
    $("#tbCMND").html("*");
    return true;
  }
  $("#DC").blur(kiemTraSCMND);

  // ======================== KIỂM TRA ĐỊA CHỈ ===========================
  function kiemTraDiaChi() {
    let mauKT =  /^([A-Z]+.)+$/;
    if ($("#DC").val() == "") {
      $("#tbDc").html("Bắt buộc nhập");
      return false;
    }
    if (!mauKT.test($("#DC").val())) {
      $("#tbDc").html("Dùng chữ HOA");
      return true;
    }
    $("#tbDc").html("*");
    return true;
  }
  $("#DC").blur(kiemTraDiaChi);
  // ======================== KIỂM TRA EMAIL ===========================
 
  function kiemTraEmail() {
    var mauKT = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@iuh.edu.vn$/;
    if ($("#Email").val() == "") {
      $("#tbEmail").html("Bắt buộc nhập");
      return false;
    }
    if (!mauKT.test($("#Email").val())) {
      $("#tbEmail").html("Email theo dạng xxxxxx@iuh.edu.vn");
      return true;
    }
    $("#tbEmail").html("*");
    return true;
  }
  $("#Email").blur(kiemTraEmail);
  // ======================== KIỂM TRA SỐ ĐIỆN THOẠI ===========================
  function kiemTraSDT() {
    var mauKT = /^0[0-9]{2}-[0-9]{3}-[0-9]{4}$/;
    if ($("#SDT").val() == "") {
      $("#tbSDT").html("Bắt buộc nhập");
      return false;
    }
    if (!mauKT.test($("#SDT").val())) {
      $("#tbSDT").html("Theo dạng 0xx-xxx-xxxx trong đó x là số");
      return true;
    }
    $("#tbSDT").html("*");
    return true;
  }
  $("#SDT").blur(kiemTraSDT);

  // ====================================================
  $("#Save").click(function () {
    if (
      kiemTraTen() == true &&
      kiemTraSCMND() == true &&
      kiemTraSDT() == true &&
      kiemTraEmail() == true &&
      kiemTraDiaChi() == true
    ) {
      row = "<tr>";
      row += "<th>" + i++ + "</th>";
      row += "<th>" + $("#Name").val() + "</th>";
      row += "<th>" + $("#CMND").val() + "</th>";
      row += "<th>" + $("#DC").val() + "</th>";
      row += "<th>" + $("#Email").val() + "</th>";
      row += "<th>" + $("#SDT").val() + "</th>";
      row += "<th>" + $("#ADD").val() + "</th>";
      $("#danhSach").append(row);
      $("#myModal").modal("hide");
    }
  });
});
