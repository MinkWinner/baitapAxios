var api = new ApiService();

function getData() {
  api
    .getData()
    .then(function (result) {
      result.data;
      renderData(result.data);
      console.log(result.data);
    })
    .catch(function (error) {
      console.log("Không tìm thấy dữ liệu");
    });
}

getData();

function renderData(danhsachSanpham) {
  var spTable = "";
  danhsachSanpham.map(function (sp) {
    spTable += `
        <tr>
            <td>${sp.id}</td>
            <td>${sp.tenSP}</td>
            <td>${sp.gia}</td>
            <td class="w-25"><img class="w-50" src="../img/${sp.hinhAnh}" alt="${sp.hinhAnh}"></td>
            <td>${sp.moTa}</td>
            <td>
            <button class="btn btn-danger">Xóa</button>
            <button class="btn btn-success">Sửa</button>
            </td>
        </tr>
      `;
  });
  document.getElementById("tblDanhSachSP").innerHTML = spTable;
}
