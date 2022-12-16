function ProductDetail({ $target, initialState }) {
  const $product = document.createElement("div");
  $product.className = "ProductDetail";

  $target.appendChild($product);

  this.state = initialState;

  this.render = () => {
    const { product } = this.state;
    const detail = `<img
            src="${product.imageUrl}"
          />
          <div class="ProductDetail__info">
            <h2>${product.name}</h2>
            <div class="ProductDetail__price">${product.price}원~</div>
            <select>
              <option>선택하세요.</option>
              ${product.productOptions
                .map(
                  (opt) =>
                    `<option value="${opt.id}" ${
                      opt.stock === 0 ? "disabled" : ""
                    }>${opt.stock === 0 ? "(품절)" : ""} ${opt.name} ${
                      opt.price > 0 ? `(+ ${opt.price}원 )` : ""
                    }</option>`
                )
                .join()}
            </select>
            <div class="ProductDetail__selectedOptions">
            </div>
          </div>`;
    $product.innerHTML = detail;
  };

  this.render();
}

export default ProductDetail;
