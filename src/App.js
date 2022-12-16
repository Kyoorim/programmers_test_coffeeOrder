import ListPage from "./components/ListPage.js";
import DetailPage from "./components/DetailPage.js";
import CartPage from "./components/CartPage.js";
import { init } from "../router.js";

function App({ $app }) {
  this.route = () => {
    const { pathname } = location;

    $app.innerHTML = "";

    if (pathname === "/") {
      new ListPage({ $app }).render();
    } else if (pathname.indexOf("/products/") === 0) {
      // 상세페이지
      const [, , productid] = pathname.split("/");
      new DetailPage({
        $app,
        productid,
      }).render();
    } else if (pathname === "/cart") {
      // 장바구니
      new CartPage({ $app }).render();
    }
  };
  init(this.route);

  this.route();
}

export default App;
