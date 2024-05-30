let productsArray = [];
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    productsArray = data.products;
    console.log(productsArray);
    console.log(productsArray.length);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
