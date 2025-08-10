export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  console.log("Dummy comment in add order")
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}