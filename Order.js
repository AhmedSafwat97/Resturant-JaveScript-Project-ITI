function displayOrder() {
  var CrudContainer = document.getElementById("Order-Table");

  var OrderData = localStorage.getItem("OrderCart");

  var displayData = JSON.parse(OrderData);

  console.log(displayData);
  var  TotalPrice = 0 
  displayData.forEach((item) => {
    var OrderData = document.createElement("div");
    OrderData.className = "Row";
    total = item.Price * item.Quantity;
    TotalPrice += total
    OrderData.innerHTML = `
                  <div class="theimg">
                  <img class="Order-img" src=${item.ImageLink} />
                  </div>
                  <div>${item.Title}</div>
                  <div>${item.Quantity}</div>
                  <div>${total}</div>
                  <div>
                  <svg class="delete-btn" onclick="RemoveOrder(${item.id})" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFF" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"/> </g> </svg>
  
                  </div>                  
      `;

    CrudContainer.appendChild(OrderData);
    CrudContainer.appendChild(OrderData);

  });


  var totalPriceDiv = document.createElement("div");
  totalPriceDiv.className = "Total"
  totalPriceDiv.innerHTML = `Total Price: ${TotalPrice}`;
  CrudContainer.appendChild(totalPriceDiv);

}

displayOrder();

function RemoveOrder(OrderId) {
  var getdata = localStorage.getItem("OrderCart");
  var Data = JSON.parse(getdata);
  var dataAfterREmoving = Data.filter((item) => item.id != OrderId);
  console.log(Data);
  localStorage.setItem("OrderCart", JSON.stringify(dataAfterREmoving));
  location.reload();
}
