const products = [
  {
    id: 1,
    name: "Keyboard",
    category: "Accessories",
    stock: 12,
    minimumStock: 5,
    price: 250,
  },
  {
    id: 2,
    name: "Mouse",
    category: "Accessories",
    stock: 3,
    minimumStock: 8,
    price: 100,
  },
  {
    id: 3,
    name: "Monitor",
    category: "Displays",
    stock: 0,
    minimumStock: 4,
    price: 900,
  },
  {
    id: 4,
    name: "USB-C Hub",
    category: "Accessories",
    stock: 7,
    minimumStock: 7,
    price: 180,
  },
  {
    id: 5,
    name: "Laptop Stand",
    category: "Office",
    stock: 2,
    minimumStock: 5,
    price: 150,
  },
  {
    id: 6,
    name: "Webcam",
    category: "Cameras",
    stock: 9,
    minimumStock: 3,
    price: 320,
  },
];

const state = {
  search: "",
  category: "all",
  status: "all",
  sortByStock: false,
};

function getStockStatus(product) {
  const { stock, minimumStock } = product;
  if (stock === 0) return "out-of-stock";
  if (stock <= minimumStock) return "low-stock";
  return "in-stock";
}

function getProductInventoryValue(product) {
  const { stock, price } = product;
  return stock * price;
}

function getTotalInventoryValue(productList) {
  return productList.reduce(
    (acc, curr) => acc + getProductInventoryValue(curr),
    0,
  );
}

function getLowStockCount(productList) {
  return productList.filter(
    (product) => getStockStatus(product) === "low-stock",
  ).length;
}

function getOutOfStockCount(productList) {
  return productList.filter(
    (product) => getStockStatus(product) === "out-of-stock",
  ).length;
}

function getGreatestShortageProduct(productList) {
  const outOfStockOrLow = productList.filter(
    (product) =>
      getStockStatus(product) === "low-stock" ||
      getStockStatus(product) === "out-of-stock",
  );
  let greatest = 0;
  let greatestProduct = null;
  for (const product of outOfStockOrLow) {
    const { minimumStock, stock } = product;
    const diff = minimumStock - stock;
    if (diff > greatest) {
      greatest = diff;
      greatestProduct = product;
    }
  }
  return greatestProduct;
}

function getProductsByName(productList) {
  const { search } = state;

  if (search.trim() === "") return productList;

  return productList.filter((product) =>
    product.name.toLowerCase().includes(search.trim().toLowerCase()),
  );
}

function getProductsByCategory(productList) {
  const { category } = state;
  if (category === "all") return productList;
  return productList.filter((product) => product.category === category);
}

function getProductsByStatus(productList) {
  const { status } = state;
  if (status === "all") return productList;
  return productList.filter((product) => getStockStatus(product) === status);
}

function getVisibleProducts(productList) {
  const filteredProducts = getProductsByStatus(
    getProductsByCategory(getProductsByName(productList)),
  );
  if (state.sortByStock) {
    return [...filteredProducts].sort((a, b) => a.stock - b.stock);
  }

  return filteredProducts;
}

function renderSummary() {
  // later
}

function renderProducts() {
  // later
}
