const orders = [
  {
    id: 1,
    customer: "Maya",
    status: "pending",
    items: [
      { name: "Keyboard", price: 180, quantity: 1 },
      { name: "Mouse", price: 60, quantity: 2 },
    ],
  },
  {
    id: 2,
    customer: "Ron",
    status: "pending",
    items: [{ name: "Monitor", price: 900, quantity: 1 }],
  },
  {
    id: 3,
    customer: "Maya",
    status: "pending",
    items: [{ name: "Headphones", price: 250, quantity: 2 }],
  },
  {
    id: 4,
    customer: "Dana",
    status: "pending",
    items: [
      { name: "Webcam", price: 120, quantity: 1 },
      { name: "Microphone", price: 80, quantity: 1 },
    ],
  },
  {
    id: 5,
    customer: "Ron",
    status: "pending",
    items: [
      { name: "Chair", price: 300, quantity: 1 },
      { name: "Desk Lamp", price: 150, quantity: 1 },
    ],
  },
];

function calculateOrderTotal(order) {
  let total = 0;
  const { items } = order;
  for (const item of items) {
    const { price, quantity } = item;
    total += price * quantity;
  }
  return total;
}

function getCompletedOrders(orderList) {
  return orderList.filter((order) => order.status === "completed");
}

function calculateCompletedRevenue(orderList) {
  const completedOrders = getCompletedOrders(orderList);
  return completedOrders.reduce(
    (total, order) => total + calculateOrderTotal(order),
    0,
  );
}

function getCustomerRevenue(orderList) {
  const completedOrders = getCompletedOrders(orderList);
  const customerRevenue = [];

  for (const order of completedOrders) {
    const orederTotal = calculateOrderTotal(order);
    const orderIdx = customerRevenue.findIndex(
      (o) => order.customer === o.customer,
    );
    if (orderIdx !== -1) {
      customerRevenue[orderIdx].revenue += orederTotal;
      continue;
    }
    customerRevenue.push({
      customer: order.customer,
      revenue: orederTotal,
    });
  }

  return customerRevenue.sort((c1, c2) => c2.revenue - c1.revenue);
}

function getTopCustomer(orderList) {
  const revenue = getCustomerRevenue(orderList);
  return revenue.length > 0 ? revenue[0] : null;
}

console.log(calculateOrderTotal(orders[0]));
// 300

console.log(getCompletedOrders(orders).length);
// 4

console.log(calculateCompletedRevenue(orders));
// 1450

console.log(getCustomerRevenue(orders));
/*
[
  { customer: "Maya", revenue: 800 },
  { customer: "Ron", revenue: 450 },
  { customer: "Dana", revenue: 200 },
]
*/

console.log(getTopCustomer(orders));
// { customer: "Maya", revenue: 800 }
