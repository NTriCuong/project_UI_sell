$(function () {
  $("#banner__top__head").load("./bannerTopHead.html");
  $("#menu").load("./menu.html");
  $("#banner2").load("./banner2.html");
  setTimeout(() => {
    showListProducts();
  }, 300);
  setTimeout(() => {
    menuRight();
  }, 1000);
});

var listProducts = [];
var listCategory = [];
var listMeNuFacTuRer = [];
function showListProducts() {
  // const listProductsLocal = JSON.parse(localStorage.getItem("listProducts"));
  const listCategoryLocal = JSON.parse(localStorage.getItem("listCategory"));
  const listMeNuFacTuRerLocal = JSON.parse(
    localStorage.getItem("listMeNuFacTuRer")
  );

  // listProducts = listProductsLocal ? listProductsLocal : [];
  listCategory = listCategoryLocal ? listCategoryLocal : [];
  listMeNuFacTuRer = listMeNuFacTuRerLocal ? listMeNuFacTuRerLocal : [];

  // empty xóa tất cả những dì bên trong element được chọn
  $("#home__listproducts").empty();

  $.ajax({
    type: "GET",
    url: "https://64e3777abac46e480e78d968.mockapi.io/products",
    success: function (res, status) {
      if (status === "success") {
        listProducts = res;

        listProducts.forEach((products) => {
          $("#home__listproducts").append(`
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div class="product-box">
                      <!-- Ảnh -->
                      <div class="row">
                        <div
                          class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center"
                        >
                          <img
                            src="${products.image}"
                            alt=""
                            style="width: 190px; height: 190px"
                          />
                        </div>
                      </div>
                      <!-- Tên sản phẩm -->
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <h5 style="font-weight: bold">${products.name}</h5>
                        </div>
                      </div>
                      <!-- Hãng sản xuất -->
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <h5>Hãng sản xuất: ${
                            listMeNuFacTuRer.filter(
                              (meFuFacTuRer) =>
                                +meFuFacTuRer.id === +products.nxs
                            )[0]?.name
                          }</h5>
                        </div>
                      </div>
                      <!-- Đánh giá -->
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <ul
                            class="rating"
                            style="
                              list-style: none;
                              display: flex;
                              font-size: 20px;
                              padding-inline-start: 0px;
                            "
                          >
                            <li>
                            ${ratingStar(products.star)}
      
                      </li>
                          </ul>
                        </div>
                      </div>
                      <!-- Thêm vào giỏ hàng -->
                      <div class="row align-items-center justify-content-between">
                        <div class="col-sm-4 col-md-4 col-lg-4">
                          <h6 style="margin-bottom: 0" class="text-danger fw-bold">${
                            products.price
                          }</h6>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-end">
                          <button
                            type="button"
                            class="btn btn-default"
                            style="border: 0px"
                          >
                            <img
                              style="width: 25px; height: 25px"
                              src="https://cdn2.cellphones.com.vn/50x,webp,q70/media/wysiwyg/add-to-cart.png"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
          `);
        });
      }
    },
  });
}

function ratingStar(star) {
  list = "";
  for (let i = 0; i < star; i++) {
    list += `<span class="fa fa-star checked"></span>`;
  }
  return list;
}

function menuRight() {
  var check = JSON.parse(localStorage.getItem("checkSignIn"));

  if (check) {
    $("#menuRight").empty();
    $("#menuRight").append(
      `<li class="nav-item"><button onclick="Logout()" class="button__logout">Logout</button></li>`
    );
  } else {
    $("#menuRight").empty();
    $("#menuRight").append(`<li class="nav-item"><a
    class="nav-link"href="../logout-login/index.html"
    >Sign In/Sign Up</a
  ></li>`);
  }
}
function Logout() {
  var check = false;
  localStorage.setItem("checkSignIn", check);
  window.location.href = "../home/index.html";
  menuRight();
}
