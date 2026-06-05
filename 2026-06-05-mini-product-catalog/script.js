const productForm = document.querySelector("#product-form");
const nameInput = document.querySelector("#name-input");
const categoryInput = document.querySelector("#category-input");
const priceInput = document.querySelector("#price-input");
const stockInput = document.querySelector("#stock-input");

const filterAllButton = document.querySelector("#filter-all");
const filterInStockButton = document.querySelector("#filter-in-stock");
const filterOutStockButton = document.querySelector("#filter-out-stock");
const sortPriceButton = document.querySelector("#sort-price");

const counterText = document.querySelector("#counter-text");
const productList = document.querySelector("#product-list");

let products = [
  { id: 1, name: "Keyboard", category: "tech", price: 250, inStock: true },
  { id: 2, name: "Notebook", category: "office", price: 20, inStock: false },
  { id: 3, name: "Mouse", category: "tech", price: 120, inStock: true },
];

let currentFilter = "all";
let isSortedByPrice = false;
let nextProductId = 4;

function createProduct(name, category, price, inStock) {
  return {
    id: nextProductId,
    name,
    category,
    price,
    inStock,
  };
}

function getVisibleProducts() {
  let visibleProducts = [...products];
  if (currentFilter === "in-stock") {
    visibleProducts = visibleProducts.filter((product) => product.inStock);
  } else if (currentFilter === "out-stock") {
    visibleProducts = visibleProducts.filter((product) => !product.inStock);
  }

  if (isSortedByPrice) {
    visibleProducts.sort((p1, p2) => p1.price - p2.price);
  }
  return visibleProducts;
}

function renderProducts() {
  productList.textContent = "";

  const visibleProducts = getVisibleProducts();

  for (const product of visibleProducts) {
    const { name, category, price, inStock } = product;
    const li = document.createElement("li");

    li.textContent = `
    Name: ${name}
    Category: ${category}
    Price: ${price}$
    Stock status: ${inStock ? "In stock" : "Out of stock"}
    `;
    productList.append(li);
  }

  renderCounter(visibleProducts.length);
}

function renderCounter(visibleCount) {
  counterText.textContent = `Showing ${visibleCount} of ${products.length} products`;
}

function addProduct(name, category, price, inStock) {
  if (name.trim() === "" || category.trim() === "") return;

  if (!Number.isFinite(price) || price <= 0) return;

  const product = createProduct(name, category, price, inStock);

  products.push(product);
  nextProductId++;

  renderProducts();
}

productForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const category = categoryInput.value.trim();
  const price = Number(priceInput.value);
  const inStock = stockInput.checked;

  addProduct(name, category, price, inStock);

  productForm.reset();
});

filterAllButton.addEventListener("click", function () {
  currentFilter = "all";
  renderProducts();
});

filterInStockButton.addEventListener("click", function () {
  currentFilter = "in-stock";
  renderProducts();
});

filterOutStockButton.addEventListener("click", function () {
  currentFilter = "out-stock";
  renderProducts();
});

sortPriceButton.addEventListener("click", function () {
  isSortedByPrice = !isSortedByPrice;
  renderProducts();
});

renderProducts();
