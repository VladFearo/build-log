function summarizeInventory(items) {
  const totalItems = items.length;
  let inStockCount = 0;
  let outOfStockCount = 0;
  let totalValueInStock = 0;
  let mostExpensive = null;
  let totalPrice = 0;

  const categories = {};
  const inStockNames = [];

  for (const item of items) {
    totalPrice += item.price;
    categories[item.category] = (categories[item.category] || 0) + 1;

    if (mostExpensive === null || item.price > mostExpensive.price) {
      mostExpensive = item;
    }

    if (item.inStock) {
      inStockCount++;
      inStockNames.push(item.name);
      totalValueInStock += item.price;
    } else {
      outOfStockCount++;
    }
  }

  const averagePrice = totalItems === 0 ? 0 : totalPrice / totalItems;

  return {
    totalItems,
    inStockCount,
    outOfStockCount,
    totalValueInStock,
    averagePrice,
    mostExpensive,
    categories,
    inStockNames,
  };
}
