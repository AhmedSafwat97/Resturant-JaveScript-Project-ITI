
function displayOrder() {
    var CrudContainer = document.getElementById("Order-Table");
  
    var OrderData = localStorage.getItem("OrderCart");
  
    var displayData = JSON.parse(OrderData);
  
    console.log(displayData);
  
    displayData.forEach((item) => {
      const OrderData = document.createElement("div");
    OrderData.className = "Row";
  
    OrderData.innerHTML = `
        <div class="theimg">
            <img class="Order-img" src=${item.ImageLink} />
        </div>
      <div>${item.Title}</div>
                  <div>${item.Quantity}</div>
                  <div>${item.Price}</div>
                  
      
      `;
        

      
      CrudContainer.appendChild(OrderData);
    });
  }
  
  displayOrder();


  