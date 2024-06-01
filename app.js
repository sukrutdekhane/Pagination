let index;
function setIndex() {
  const array = document.querySelectorAll("a");
  index = array[0].textContent;
  console.log(array);
}

async function generateTable() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const productsArray = await response.json();
    let table = "<table class='center-table'>";
    table += `<tr class='table-head'>
      <th>Id</th>
      <th>Title</th>
      <th>Description</th>
      <th>Category</th>
      <th>Price</th>
    </tr>`;

    for (i = 0; i < 5; i++) {
      table += `<tr class='table-row'><td>${productsArray.products[i].id}</td><td>${productsArray.products[i].title}</td><td>${productsArray.products[i].description}</td><td>${productsArray.products[i].category}</td><td>${productsArray.products[i].price}</td></tr>`;
    }
    table += "</table>";
    const tableContainer = document.getElementById("container");
    tableContainer.innerHTML = table;
  } catch (error) {
    console.error(error);
  }
}

generateTable();
