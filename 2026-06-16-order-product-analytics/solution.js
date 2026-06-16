const orders = [
  {
    id: 1,
    customer: "Alice",
    status: "completed",
    items: [
      { name: "Keyboard", price: 250, quantity: 1 },
      { name: "Mouse", price: 100, quantity: 2 },
    ],
  },
  {
    id: 2,
    customer: "Bob",
    status: "pending",
    items: [
      { name: "Keyboard", price: 250, quantity: 2 },
      { name: "Monitor", price: 900, quantity: 1 },
    ],
  },
  {
    id: 3,
    customer: "Alice",
    status: "completed",
    items: [
      { name: "Mouse", price: 100, quantity: 3 },
      { name: "Monitor", price: 900, quantity: 1 },
    ],
  },
  {
    id: 4,
    customer: "Daniel",
    status: "completed",
    items: [
      { name: "Keyboard", price: 250, quantity: 2 },
      { name: "Mouse", price: 100, quantity: 1 },
    ],
  },
];

function calculateOrderTotal(order) {
  return order.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
}

function getCompletedOrders(orderList) {
  return orderList.filter((order) => order.status === "completed");
}

function calculateCompletedRevenue(orderList) {
  return getCompletedOrders(orderList).reduce(
    (total, order) => total + calculateOrderTotal(order),
    0,
  );
}

// Task 1
// Return the average value of a completed order.
// Return 0 when there are no completed orders.
function getAverageCompletedOrderValue(orderList) {
  const completedOrders = getCompletedOrders(orderList);
  if (completedOrders.length === 0) return 0;
  let total = 0;
  for (const order of completedOrders) {
    total += calculateOrderTotal(order);
  }
  return total / completedOrders.length;
}

// Task 2
// Find the product with the highest total quantity sold.
//
// Rules:
// - Count items from completed orders only.
// - Combine quantities when the same product appears in different orders.
// - Return: { name: "Mouse", quantity: 6 }
// - Return null when no products were sold.
function getBestSellingProduct(orderList) {
  const completedOrders = getCompletedOrders(orderList);
  const products = {};
  for (const order of completedOrders) {
    for (const item of order.items) {
      products[item.name] = (products[item.name] ?? 0) + item.quantity;
    }
  }
  const topProduct = Object.entries(products).sort((a, b) => b[1] - a[1])[0];

  return topProduct ? { name: topProduct[0], quantity: topProduct[1] } : null;
}

console.log(getAverageCompletedOrderValue(orders));
// Expected: 716.6666666666666

console.log(getBestSellingProduct(orders));
// Expected: { name: "Mouse", quantity: 6 }

console.log(getAverageCompletedOrderValue([]));
// Expected: 0

console.log(getBestSellingProduct([]));
// Expected: null
