export const getOrders = () => {
  console.log('API Call')
  return fetch("http://localhost:3001/api/v1/orders")
    .then((response) => response.json())
    // .then(data => console.log(data, '<--DATA'));
};

export default getOrders;
