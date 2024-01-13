var Menu = [
  {
    id: 1,
    Title: "Chicken Alfredo",
    Description:
      "Creamy Alfredo sauce with grilled chicken over fettuccine pasta",
    Price: 12.99,
    ImageLink:
      "https://cdn.pixabay.com/photo/2023/10/10/08/40/alfredo-8305773_1280.jpg",
  },
  {
    id: 2,
    Title: "Margherita Pizza",
    Description: "Classic pizza with fresh mozzarella, tomatoes, and basil",
    Price: 10.99,
    ImageLink:
      "https://cdn.pixabay.com/photo/2018/06/30/19/47/pizza-3508244_1280.jpg",
  },
  {
    id: 3,
    Title: "Vegetarian Sushi Roll",
    Description: "Assorted vegetables rolled in seasoned rice and seaweed",
    Price: 8.99,
    ImageLink:
      "https://cdn.pixabay.com/photo/2016/03/05/22/23/asian-1239268_1280.jpg",
  },
  {
    id: 4,
    Title: "Beef Burger",
    Description: "Grilled beef patty with lettuce, tomato, and secret sauce",
    Price: 9.99,
    ImageLink:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
  },
  {
    id: 5,
    Title: "Caesar Salad",
    Description:
      "Fresh romaine lettuce with croutons, Parmesan cheese, and Caesar dressing",
    Price: 7.99,
    ImageLink:
      "https://cdn.pixabay.com/photo/2014/01/17/08/31/caesar-246802_1280.jpg",
  },
  {
    id: 6,
    Title: "Spaghetti Bolognese",
    Description:
      "Spaghetti pasta with rich tomato meat sauce and Parmesan cheese",
    Price: 11.99,
    ImageLink:
      "https://cdn.pixabay.com/photo/2016/08/19/09/24/spaghetti-1604836_1280.jpg",
  },
  {
    id: 7,
    Title: "Grilled Salmon",
    Description:
      "Fresh salmon fillet grilled to perfection, served with steamed vegetables",
    Price: 15.99,
    ImageLink:
      "https://cdn.pixabay.com/photo/2018/12/21/22/04/salmon-3888828_1280.jpg",
  },
  {
    id: 8,
    Title: "Pad Thai",
    Description:
      "Traditional Thai stir-fried noodles with shrimp, peanuts, egg, and bean sprouts",
    Price: 10.99,
    ImageLink:
      "https://cdn.pixabay.com/photo/2014/01/17/09/20/pad-thai-246830_1280.jpg",
  },
];

var Cart = [];

function displayMenu() {
  const menuContainer = document.getElementById("MenuList");

  Menu.forEach((item) => {
    const menuCard = document.createElement("div");
    menuCard.className = "MenuCard flex";

    menuCard.innerHTML = `
            <div class="image">
                <img src="${item.ImageLink}" alt="${item.Title}">
            </div>
            <div class="Card-content">
                <div class="title-container">
                    <h5 class="title">${item.Title}</h5>
                    <p style="color: #C2A779;">${item.Price}$</p>
                </div>
                <div class="desc-container">
                    <p style="font-size: 12px; width: 80%;" class="desc">
                        ${item.Description}
                    </p>
                    <div style="display: flex;">
                        <div style="flex-grow: 1;"></div>
                        <button onclick="addToCart(${item.id})" class="add-To-Cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FFF" class="bi bi-cart-plus" viewBox="0 0 16 16"> <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/> <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;

    menuContainer.appendChild(menuCard);
  });
}

// Call the function to display the menu
displayMenu();

function addToCart(OrderId) {
  // to get the item that i select
  var selectedOrder = Menu.find((O) => O.id == OrderId);

  console.log(selectedOrder);

  // to check if the item is already in the cart or not
  var cartItem = Cart.find((e) => e.id == OrderId);

  if (!cartItem) {
    Cart.push({ ...selectedOrder, Quantity: 1 });
  } else {
    cartItem.Quantity += 1;
  }

  localStorage.setItem("OrderCart", JSON.stringify(Cart));
}

var TablesBooking = [];

function BookTable() {
  var Name = document.getElementById("Name");
  var Phone = document.getElementById("Phone");
  var Date = document.getElementById("Date");
  var StartTime = document.getElementById("Start");
  var Person = document.getElementById("Person");
  var Message = document.getElementById("Message");
  var ReservMessage = document.getElementById("T-Message");

  var NewId = TablesBooking.length + 1;

  var tableobject = {
    id: NewId,
    Name: Name.value,
    Phone: Phone.value,
    Date: Date.value,
    StartTime: StartTime.value,
    Person: Person.value,
    Message: Message.value,
  };

  if (
    (Name.value != "",
    Phone.value != "",
    Date.value != "",
    StartTime.value != "",
    Person.value != "")
  ) {
    var checkreservation = TablesBooking.find(function (T) {
      return T.Date === Date.value && T.StartTime === StartTime.value;
    });

    if (!checkreservation) {
      TablesBooking.push(tableobject);
      console.log(TablesBooking);
      localStorage.setItem("BookingTable", JSON.stringify(TablesBooking));
      ReservMessage.innerHTML = "You have Booked A table successfully";
      setTimeout(function () {
        ReservMessage.innerHTML = "You have Booked A table successfully";
      }, 2000);
    } else {
      console.log("You have Already booked a table at this time");
      setTimeout(function () {
        ReservMessage.innerHTML =
          "You have Already booked a table at this time";
      }, 2000);
    }
  }

  Name.value = "";
  Phone.value = "";
  Date.value = "";
  StartTime.value = "";
  Person.value = "";
  Message.value = "";
}


