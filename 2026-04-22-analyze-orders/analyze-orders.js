function analyzeOrders(orders) {
  const totalOrders = orders.length;

  let paidOrders = 0,
    totalRevenue = 0,
    averagePaidAmount = 0,
    pendingOrders = 0,
    cancelledOrders = 0;
  const customerTotals = {};
  let topCustomer = null,
    largestPaidOrder = null;

  for (const order of orders) {
    if (order.status === "paid") {
      paidOrders++;
      totalRevenue += order.amount;
      customerTotals[order.customer] =
        (customerTotals[order.customer] || 0) + order.amount;
      if (largestPaidOrder === null || order.amount > largestPaidOrder.amount) {
        largestPaidOrder = order;
      }
    } else if (order.status === "pending") {
      pendingOrders++;
    } else {
      cancelledOrders++;
    }
  }
  averagePaidAmount = paidOrders > 0 ? totalRevenue / paidOrders : 0;
  const sortedEntries = Object.entries(customerTotals).sort(
    (a, b) => b[1] - a[1],
  );
  topCustomer = sortedEntries.length === 0 ? null : sortedEntries[0][0];

  return {
    totalOrders,
    paidOrders,
    pendingOrders,
    cancelledOrders,
    totalRevenue,
    averagePaidAmount,
    customerTotals,
    topCustomer,
    largestPaidOrder,
  };
}

const orders = [
  { id: 1, customer: "Dana", amount: 120, status: "paid" },
  { id: 2, customer: "Noam", amount: 80, status: "pending" },
  { id: 3, customer: "Dana", amount: 50, status: "paid" },
  { id: 4, customer: "Gil", amount: 200, status: "cancelled" },
  { id: 5, customer: "Noam", amount: 40, status: "paid" },
];

console.log(analyzeOrders(orders));
