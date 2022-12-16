// import request from "../api.js";

const details = [
  {
    id: 1,
    name: "커피 컵",
    price: 10000,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png",
    productOptions: [
      {
        id: 1,
        name: "100개 묶음",
        price: 0,
        stock: 5,
        created_at: "2021-08-23T22:52:17.634Z",
        updated_at: "2021-08-23T22:52:17.638Z",
      },
      {
        id: 2,
        name: "200개 묶음",
        price: 8000,
        stock: 5,
        created_at: "2021-08-23T22:52:34.248Z",
        updated_at: "2021-08-23T22:52:34.252Z",
      },
      {
        id: 24,
        name: "10개 묶음",
        price: 0,
        stock: 555,
        created_at: "2021-08-23T23:03:04.873Z",
        updated_at: "2021-08-23T23:03:04.879Z",
      },
    ],
  },
  {
    id: 2,
    name: "커피컵 종이홀더",
    price: 1000,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/coffee_cup_paper_sleeve.png",
    productOptions: [
      {
        id: 3,
        name: "100개 묶음",
        price: 0,
        stock: 50,
        created_at: "2021-08-23T22:52:55.546Z",
        updated_at: "2021-08-23T22:52:55.549Z",
      },
      {
        id: 4,
        name: "1000개 묶음",
        price: 8000,
        stock: 65,
        created_at: "2021-08-23T22:53:13.276Z",
        updated_at: "2021-08-23T23:00:19.536Z",
      },
    ],
  },
];

function DetailPage({ $app, productid }) {
  // this.state = { productid };
  // const $page = document.createElement("div");
  // $page.className = "ProductDetailPage";
  // $page.innerHTML = "<h1>상품 정보</h1>";
  // this.render = () => {
  //   $app.appendChild($page);
  //   console.log("--");
  // };

  const fetch = async () => {
    // 데이터 가져오는 코드
    console.log(productid);
    const productDetails = /*await request(`/${productid}`);*/ details;
    return productDetails;
  };

  this.render = async () => {
    const details = await fetch();
    const $page = document.createElement("div");
    $page.className = "ProductDetailPage";
    $page.innerHTML += "<h1>상품 정보</h1>";

    var $details =
      '<div class="ProductDetail">' + `<img src=${details[0].imageUrl}/>`;

    var $select = "<select>";

    details.forEach((detail) => {
      detail.productOptions.forEach((option) => {
        $select +=
          `<option value=${option.id} >` +
          option.name +
          option.price +
          "</option>";
      });
    });
    $select += "</select>";
    // 렌더링 하는 코드
    details.forEach((detail) => {
      $details +=
        '<div class="ProductDetail__info">' +
        "<h2>" +
        detail.name +
        "</h2>" +
        '<div class="ProductDetail__price">' +
        detail.price +
        "</div>" +
        // selected options 구현하기
        $select +
        "</div>";
    });

    $details += "</div>";
    $page.innerHTML += $details;

    $app.appendChild($page);
  };
}

export default DetailPage;
