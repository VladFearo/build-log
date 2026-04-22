function mergeInventory(items) {
  const itemMap = new Map();
  for (const item of items) {
    if (itemMap.has(item.name)) {
      const existingItem = itemMap.get(item.name);
      existingItem.quantity += item.quantity;
    } else {
      itemMap.set(item.name, { ...item });
    }
  }
  return Array.from(itemMap.values()).map((item) => ({
    ...item,
    totalValue: item.quantity * item.price,
  }));
}

const items = [
  { name: "apple", category: "fruit", quantity: 3, price: 4 },
  { name: "banana", category: "fruit", quantity: 2, price: 3 },
  { name: "apple", category: "fruit", quantity: 1, price: 4 },
  { name: "carrot", category: "vegetable", quantity: 5, price: 2 },
  { name: "banana", category: "fruit", quantity: 4, price: 3 },
];
console.log(mergeInventory(items));
