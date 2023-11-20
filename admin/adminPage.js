// qui ước chung  key lưu danh sách sản phẩm "listProducts"
// nxs là menufacturer
// dấu + phía trước các biến là chuyển đổi từ string sang number
var listMeNuFacTuRer = [
  {
    id: 1,
    name: "SAMSUNG",
  },
  {
    id: 2,
    name: "IPHONE",
  },
  {
    id: 3,
    name: "XIAOMI",
  },
  {
    id: 4,
    name: "OPPO",
  },
];
var listCategory = [
  {
    id: 1,
    name: "Điện thoại",
  },
  {
    id: 2,
    name: "Tablet",
  },
  {
    id: 3,
    name: "Laptop",
  },
];
var listProducts = [
  // {
  //   id: 1,
  //   name: "iphone13",
  //   price: "35.000.000",
  //   info: "info",
  //   detail: "detail",
  //   star: 5,
  //   image:
  //     "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg",
  //   nxs: "1",
  //   category: "1",
  // },
  // {
  //   id: 2,
  //   name: "iphone11",
  //   price: "10.990.000",
  //   info: "info",
  //   detail: "detail",
  //   star: 5,
  //   image:
  //     "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
  //   nxs: "2",
  //   category: "1",
  // },
  // {
  //   id: 3,
  //   name: "Sam Sung Galaxy Z Ford 5",
  //   price: "39.990.000",
  //   info: "info",
  //   detail: "detail",
  //   star: 5,
  //   image:
  //     "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/b/4/b48cd136-7366-4d01-8d58-8ee3d5dc93b7_1.jpg",
  //   nxs: "3",
  //   category: "1",
  // },
  // {
  //   id: 4,
  //   name: "iphone13",
  //   price: "35.000.000",
  //   info: "info",
  //   detail: "detail",
  //   star: 5,
  //   image:
  //     "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg",
  //   nxs: "2",
  //   category: "2",
  // },
  // {
  //   id: 5,
  //   name: "iphone11",
  //   price: "10.990.000",
  //   info: "info",
  //   detail: "detail",
  //   star: 5,
  //   image:
  //     "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
  //   nxs: "2",
  //   category: "3",
  // },
  // {
  //   id: 6,
  //   name: "Sam Sung Galaxy Z Ford 5",
  //   price: "39.990.000",
  //   info: "info",
  //   detail: "detail",
  //   star: 5,
  //   image:
  //     "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/b/4/b48cd136-7366-4d01-8d58-8ee3d5dc93b7_1.jpg",
  //   nxs: "1",
  //   category: "1",
  // },
  // {
  //   id: 7,
  //   name: "iphone13",
  //   price: "35.000.000",
  //   info: "info",
  //   detail: "detail",
  //   star: 5,
  //   image:
  //     "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg",
  //   nxs: "2",
  //   category: "2",
  // },
  // {
  //   id: 8,
  //   name: "iphone11",
  //   price: "10.990.000",
  //   info: "info",
  //   detail: "detail",
  //   star: 5,
  //   image:
  //     "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
  //   nxs: "2",
  //   category: "1",
  // },
  // {
  //   id: 9,
  //   name: "Sam Sung Galaxy Z Ford 5",
  //   price: "39.990.000",
  //   info: "info",
  //   detail: "detail",
  //   star: 5,
  //   image:
  //     "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/b/4/b48cd136-7366-4d01-8d58-8ee3d5dc93b7_1.jpg",
  //   nxs: "4",
  //   category: "1",
  // },
]; //biến lưu danh sách sản phẩm

$(function () {
  var dataAccound = JSON.parse(localStorage.getItem("checkSignIn"));
  if (dataAccound == false) {
    alert("bạn chưa đăng nhập");
    window.location.href = "../logout-login/index.html";
  }
  $("#menu__admin").load("./menu.html");
  $("#danhmuc").load("./danhmuc.html");
  $("#manufactures").load("./manufacturers.html");
  $("#categorys").load("./categorys.html");
  $("#search").load("./search.html");
  handleShowProduct();
  // localStorage.setItem("listProducts", JSON.stringify(listProducts));
  // localStorage.setItem("listCategory", JSON.stringify(listCategory));
  // localStorage.setItem("listMeNuFacTuRer", JSON.stringify(listMeNuFacTuRer));
});

function handleShowManufacturer() {
  $("#content").load("menufacturer-admin.html");
}

function handleShowCategory() {
  $("#content").load("category-admin.html");
}

function handleShowProduct() {
  $("#content").load("product-admin.html");
  setTimeout(() => {
    showListProducts();
  }, 300);
}
// hàm show danh sách sản phẩm
function showListProducts() {
  // const listProductsLocal = JSON.parse(localStorage.getItem("listProducts"));
  const listCategoryLocal = JSON.parse(localStorage.getItem("listCategory"));
  const listMeNuFacTuRerLocal = JSON.parse(
    localStorage.getItem("listMeNuFacTuRer")
  );
  // listProducts = listProductsLocal ? listProductsLocal : [];
  listCategory = listCategoryLocal ? listCategoryLocal : [];
  listMeNuFacTuRer = listMeNuFacTuRerLocal ? listMeNuFacTuRerLocal : [];
  manufacturersAdmin(); //gọi hàm hiện lên danh sách lựa chọn của category và menufacturer
  categoryAdmin();
  $("#tbProductAdmin").empty();
  $.ajax({
    type: "GET",
    url: "https://64e3777abac46e480e78d968.mockapi.io/products",
    // data:
    success: function (res, status) {
      // thường viết tắt request : req ,response:res ,element: ele
      if (status === "success") {
        listProducts = res;

        listProducts.forEach((products) => {
          $("#tbProductAdmin").append(`
          <tr style="vertical-align: middle">
                    <td>${products.id}</td>
                    <td>${products.name}</td>
                    <td>${products.price}</td>
                    <td>${products.info}</td>
                    <td>${products.detail}</td>
                    <td>${products.star}</td>
                    <td>
                      <img
                        style="width: 50px; height: 50px"
                        src="${products.image}"
                      />
                    </td>
                    <td>${
                      listMeNuFacTuRer.filter(
                        (meFuFacTuRer) => +meFuFacTuRer.id === +products.nxs
                      )[0]?.name
                    }</td>
                    <td>${
                      listCategory.filter(
                        (category) => +category.id === +products.category
                      )[0]?.name
                    }</td>
                    <td>
                      <button
                        onclick="handleEditProduct(${products.id})"
                        type="button"
                        class="btn btn-warning"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button type="button" onclick="deleteProduct(${
                        products.id
                      })" class="btn btn-danger">Delete</button>
                    </td>
                  </tr>`);
        });
      }
    },
  });
 
}

function handleShowAccount() {
  $("#content").load("account-admin.html");
}

function handleCreateProduct() {
  $("#ModalCreateProduct").modal("show");
}
function manufacturersAdmin() {
  $("#ManufacturerUpdate").empty(); // trước khi thêm 1 cái dì đó vào id phải clear
  $("#ManufacturerCreateProducts").empty();
  listMeNuFacTuRer = JSON.parse(localStorage.getItem("listMeNuFacTuRer"));
  listMeNuFacTuRer.forEach((menufacture) => {
    //create
    $("#ManufacturerCreateProducts").append(`
    <option value="${menufacture.id}">${menufacture.name}</option>
    `);
    //update
    $("#ManufacturerUpdate").append(`
    <option value="${menufacture.id}">${menufacture.name}</option>
    `);
  });
}

function categoryAdmin() {
  $("#CategoryUpdate").empty();
  $("#CategoryCreateProducts").empty();
  listCategory = JSON.parse(localStorage.getItem("listCategory"));
  listCategory.forEach((Category) => {
    //create
    $("#CategoryCreateProducts").append(`
    <option value="${Category.id}">${Category.name}</option>
    `);
    //update
    $("#CategoryUpdate").append(`
    <option value="${Category.id}">${Category.name}</option>
    `);
  });
}

function handleSaveProduct() {
  const newProduct = {
    // id: Math.floor(Math.random() * 1000),
    name: $("#NameCreateProducts").val(),
    price: $("#PriceCreateProducts").val(),
    info: $("#InfoCreateProducts").val(),
    detail: $("#DetailCreateProducts").val(),
    star: $("#StarCreateProducts").val(),
    image: $("#ImageCreateProducts").val(),
    nxs: $("#ManufacturerCreateProducts").val(),
    category: $("#CategoryCreateProducts").val(),
  };

  // listProducts.push(newProduct);
  // localStorage.setItem("listProducts", JSON.stringify(listProducts));

  $.ajax({
    type: "POST",
    url: "https://64e3777abac46e480e78d968.mockapi.io/products",
    data: newProduct,
    success: function (res, status) {
      // thường viết tắt request : req ,response:res ,element: ele

      showListProducts();
      reset();
      $("#ModalCreateProduct").modal("hide");
    },
  });
}

// delete
function deleteProduct(id) {
  swal({
    title: "Bạn có chắc chắn muốn xóa",
    text: "Khi đã xóa, bạn sẽ không thể khôi phục",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      // const listProductsLocal = JSON.parse(
      //   localStorage.getItem("listProducts")
      // );
      // const dataDelete = listProducts.filter(
      //   (products) => +products.id !== +id
      // );
      // localStorage.setItem("listProducts", JSON.stringify(dataDelete)); //sau khi xóa sữa hoặc thêm sẻ set lại data cho key ở localstorage
      $.ajax({
        type: "DELETE",
        url: `https://64e3777abac46e480e78d968.mockapi.io/products/${id}`,
        success: function (res, status) {
          // thường viết tắt request : req ,response:res ,element: ele
          // setTimeout(() => {
          showListProducts();
          // }, 500); //in lại list sản phẩm
          swal("Sản phẩm của bạn đã được xóa!", {
            icon: "success",
          });
        },
      });
    } else {
      swal("Sản phẩm đã được giữ lại!");
    }
  });
}
// edit
var index; // biến lưu vị trí của vật phẩm cần edit
function handleEditProduct(id) {
  $("#ModalUpdateProduct").modal("show");
  const indexData = listProducts.findIndex((product) => +product.id === +id);
  index = indexData;

  // indexData là vị trí của sản phẩm cần edit
  $("#IdUpdate").val(listProducts[indexData].id);
  $("#NameUpdate").val(listProducts[indexData].name.toUpperCase());
  $("#PriceUpdate").val(listProducts[indexData].price);
  $("#InfoUpdate").val(listProducts[indexData].info);
  $("#DetailUpdate").val(listProducts[indexData].detail);
  $("#StarUpdate").val(listProducts[indexData].star);
  $("#ImageUpdate").val(listProducts[indexData].image);
  $("#ManufacturerUpdate").val(listProducts[indexData].nxs);
  $("#CategoryUpdate").val(listProducts[indexData].category);
}

// nút update
function handleUpdateProduct() {
  const dataProductEdit = {
    // id: listProducts[index].id,
    name: $("#NameUpdate").val(),
    price: $("#PriceUpdate").val(),
    info: $("#InfoUpdate").val(),
    detail: $("#DetailUpdate").val(),
    star: $("#StarUpdate").val(),
    image: $("#ImageUpdate").val(),
    nxs: $("#ManufacturerUpdate").val(),
    category: $("#CategoryUpdate").val(),
  };
  // listProducts[index] = dataProductEdit;
  // localStorage.setItem("listProducts", JSON.stringify(listProducts));
  $.ajax({
    type: "PUT",
    url: `https://64e3777abac46e480e78d968.mockapi.io/products/${listProducts[index].id}`,
    data: dataProductEdit,
    success: function (res, status) {
      // thường viết tắt request : req ,response:res ,element: ele
      $("#ModalUpdateProduct").modal("hide");

      showListProducts();
    },
  });
}
//reset
function reset() {
  $("#NameUpdate").val(""),
    $("#PriceUpdate").val(""),
    $("#InfoUpdate").val(""),
    $("#DetailUpdate").val(""),
    $("#StarUpdate").val(""),
    $("#ImageUpdate").val(""),
    $("#ManufacturerUpdate").val(""),
    $("#CategoryUpdate").val(""),
    $("#NameCreateProducts").val(""),
    $("#PriceCreateProducts").val(""),
    $("#InfoCreateProducts").val(""),
    $("#DetailCreateProducts").val(""),
    $("#StarCreateProducts").val(""),
    $("#ImageCreateProducts").val(""),
    $("#ManufacturerCreateProducts").val(""),
    $("#CategoryCreateProducts").val("");
}
// các hàm filter lọc sản phẩm
var dataFilter; //dataFilter biến lưu dữ liệu sau khi lọc
function filterProductSamSung() {
  dataFilter = listProducts.filter((data) => +data.nxs === 1);
  showListProductsFiltered();
}

function filterProductApple() {
  dataFilter = listProducts.filter((data) => +data.nxs === 2);
  showListProductsFiltered();
}
function filterProductXiaomi() {
  dataFilter = listProducts.filter((data) => +data.nxs === 3);
  showListProductsFiltered();
}
function filterProductOppo() {
  dataFilter = listProducts.filter((data) => +data.nxs === 4);
  showListProductsFiltered();
}
//show sản phẩm đã được lọc
function showListProductsFiltered() {
  const listProductsLocal = JSON.parse(localStorage.getItem("listProducts"));
  const listCategoryLocal = JSON.parse(localStorage.getItem("listCategory"));
  const listMeNuFacTuRerLocal = JSON.parse(
    localStorage.getItem("listMeNuFacTuRer")
  );

  listProducts = listProductsLocal ? listProductsLocal : [];
  listCategory = listCategoryLocal ? listCategoryLocal : [];
  listMeNuFacTuRer = listMeNuFacTuRerLocal ? listMeNuFacTuRerLocal : [];

  $("#tbProductAdmin").empty();
  dataFilter.forEach((products) => {
    $("#tbProductAdmin").append(`
    <tr style="vertical-align: middle">
              <td>${products.id}</td>
              <td>${products.name}</td>
              <td>${products.price}</td>
              <td>${products.info}</td>
              <td>${products.detail}</td>
              <td>${products.star}</td>
              <td>
                <img
                  style="width: 50px; height: 50px"
                  src="${products.image}"
                />
              </td>
              <td>${
                listMeNuFacTuRer.filter(
                  (meFuFacTuRer) => meFuFacTuRer.id === +products.nxs
                )[0].name
              }</td>
              <td>${
                listCategory.filter(
                  (category) => category.id === +products.category
                )[0].name
              }</td>
              <td>
                <button
                  onclick="handleEditProduct(${products.id})"
                  type="button"
                  class="btn btn-warning"
                >
                  Edit
                </button>
              </td>
              <td>
                <button type="button" onclick="deleteProduct(${
                  products.id
                })" class="btn btn-danger">Delete</button>
              </td>
            </tr>`);
  });
}

function test(event) {
  console.log(event);
  dataFilter = listProducts.filter((data) => +data.category === +event.value);
  showListProductsFiltered();
}

function Logout() {
  var check = false;
  localStorage.setItem("checkSignIn", JSON.parse(check));
  window.location.href = "../home/index.html";
}

