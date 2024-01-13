function displayReservation() {
    var CrudContainer = document.getElementById("Crud-Table");
  
    var tableData = localStorage.getItem("BookingTable");
  
    var displayData = JSON.parse(tableData);
  
    console.log(displayData);
  
    displayData.forEach((item) => {
      const TableData = document.createElement("div");
      TableData.className = "Row";
  
      TableData.innerHTML = `
      <div>${item.id}</div>
                  <div>${item.Name}</div>
                  <div>${item.Date}</div>
                  <div>${item.Time}</div>
                  <div>${item.Person}</div>
      
      `;
  
      CrudContainer.appendChild(TableData);
    });
  }
  
  displayReservation();


