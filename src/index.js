import './style.css';
import data from './assets/data/coffees.json';

/*const showOrderOverview = overview => {
  console.log(overview);

  const $orderState = document.querySelector(`.emptystate`);
  $orderState.classList.add(`orderPlaced`);


  overview.forEach(order => {
    console.log(order);

    /*const $orders = document.querySelector(`.orders`);

    const $orderlist = document.createElement(`li`);
    $orderlist.classList.add(`order`);
    $orders.appendChild($orderlist);

    const $orderName = document.createElement(`span`);
    $orderName.classList.add(`order__name`);
    $orderlist.appendChild($orderName);
    $orderName.textContent = order.name;*/
/*});
};

const makeOrderOverview = overview => {

  for (let a = 0;a < data.coffees.length;a ++) {
    //console.log(data.coffees[a].id);

    for (let i = 0;i < overview.length;i ++) {
      //console.log(overview[i].id);
      if (data.coffees[a].id === overview[i].id) {
        //console.log(data.coffees[a].name);
        overview[i].name = data.coffees[a].name;
        overview[i].price = data.coffees[a].prices.medium;
      }
    }
  }

  showOrderOverview(overview);

};


/*const handleOrderRemove = e => {
  const target = e.currentTarget;
  console.log(target);

  const $order = document.querySelector(`.order`);
  $order.classList.add(`removeClick`);
  target.classList.add(`removeClick`);

};*/

/*const showOrders = coffeeClickIdNumber => {

  const $orders = document.querySelector(`.orders`);

  const $orderlist = document.createElement(`li`);
  $orderlist.classList.add(`order-inactive`);
  $orders.appendChild($orderlist);
  $orderlist.dataset.id = coffeeClickIdNumber;

  const $placedOrders = document.querySelectorAll(`.order-inactive`);
  const placedOrderIds = [];
  $placedOrders.forEach(placedOrder => {
    countOrders(placedOrder, placedOrderIds);
  });

  /*const $orderName = document.createElement(`span`);
  $orderName.classList.add(`order__name`);
  $orderlist.appendChild($orderName);
  $orderName.textContent = coffeeName;

  const $orderPrice = document.createElement(`span`);
  $orderPrice.classList.add(`order__price`);
  $orderlist.appendChild($orderPrice);

  const euro = `\u20ac`;
  $orderPrice.textContent = `${euro} ${coffeePrice}`;

  const $orderRemove = document.createElement(`button`);
  $orderRemove.classList.add(`remove`);
  $orderlist.appendChild($orderRemove);
  $orderRemove.textContent = `x`;

  $orderRemove.addEventListener(`click`, handleOrderRemove);

   if (overview[v].id === ))
    if (overview[v].count === 1) {
      document.querySelector(`.orders`).innerHTML += `<li class="order" data-id="${overview[v].id}">
                    <span class="order__name">
                      <span class="order__amount">${overview[v].count}x</span>${overview[v].name}
                    </span>
                    <span class="order__price">&euro;${overview[v].price}</span>
                    <button class="remove">
                      x
                    </button>
                  </li>`;
    } else if (overview[v].count >= 2) {
      document.querySelector(`.order__amount`).textContent = `${overview[v].count}x`;
    }

};*/

const showOverview = overview => {
  //console.log(overview);

  for (let a = 0;a < data.coffees.length;a ++) {
    //console.log(data.coffees[a].id);

    for (let i = 0;i < overview.length;i ++) {
      //console.log(overview[i].id);
      if (data.coffees[a].id === overview[i].id) {
        //console.log(data.coffees[a].name);
        overview[i].name = data.coffees[a].name;
        overview[i].price = data.coffees[a].prices.medium;
      }
    }
  }

  console.log(overview);


  overview.forEach(order => {

    const $madeOrders = document.querySelectorAll(`.order`);

    console.log(order);
    const madeOrdersArray = [];

    $madeOrders.forEach(madeOrder => {
      //console.log(madeOrder.dataset.id);

      madeOrdersArray.push(parseInt(madeOrder.dataset.id));

    });

    console.log(madeOrdersArray);
    //const uniqueMadeOrders = madeOrdersArray.unique();
    //console.log(uniqueMadeOrders);



    document.querySelector(`.orders`).innerHTML += `<li class="order" data-id="${order.id}">
      <span class="order__name">
        <span class="order__amount">${order.count}x</span>${order.name}
      </span>
      <span class="order__price">&euro;${order.price}</span>
      <button class="remove">
        x
      </button>
      </li>`;





  });




  /*
    if (order.count < 2) {

      //maak html structuur bij order aan
      const $orderState = document.querySelector(`.emptystate`);
      $orderState.classList.add(`orderPlaced`);

      const $order = document.createElement(`li`);
      $order.classList.add(`order`);
      $orderoverview.appendChild($order);
      $order.dataset.click = 'alreadyClickedOnce';

      const $orderCount = document.createElement(`span`);
      $orderCount.classList.add(`order__count`);
      $order.appendChild($orderCount);
      $orderCount.textContent = order.count;

      const $orderName = document.createElement(`span`);
      $orderName.classList.add(`order__name`);
      $order.appendChild($orderName);
      $orderName.textContent = order.name;

      const $orderPrice = document.createElement(`span`);
      $orderPrice.classList.add(`order__price`);
      $order.appendChild($orderPrice);
      $orderPrice.textContent = order.price;

      const $orderRemove = document.createElement(`button`);
      $orderRemove.classList.add(`remove`);
      $order.appendChild($orderRemove);
      $orderRemove.textContent = `x`;

    } else {
      const $orders = document.querySelectorAll(`.order`);
      $orders.forEach($order => {
        console.log(parseInt($order.dataset.order));
        if (parseInt($order.dataset.order) === order.id) {
          const $orderCount = document.querySelector(`.order__count`);
          $orderCount.textContent = order.count;
        }
      });



    }*/


};

const countClicks = (placedOrderIds, coffeeClickId) => {

  data.coffees.forEach(coffeeObject => {
    if (coffeeObject.id === coffeeClickId) {
      const $orders = document.querySelector(`.orders`);

      const $orderlist = document.createElement(`li`);
      $orderlist.classList.add(`order-inactive`);
      $orders.appendChild($orderlist);
      $orderlist.dataset.orderId = coffeeClickId;
      $orderlist.dataset.click = `clicked`;

      const $placedOrders = document.querySelectorAll(`.order-inactive`);

      $placedOrders.forEach(placedOrder => {
        placedOrderIds.push(parseInt(placedOrder.dataset.orderId));
      });

      //console.log(placedOrderIds);
    }
  });

  const placedOrderOverview = [];
  const copy = placedOrderIds.slice(0);

  for (let i = 0;i < placedOrderIds.length;i ++) {
    //console.log(placedOrderIds[i]);
    let counter = 0;

    for (let k = 0;k < copy.length;k ++) {

      if (placedOrderIds[i] === copy[k]) {
        //console.log(`match`);
        counter ++;
        delete copy[k];
      } else {
        //console.log(`no match`);
      }
    }

    if (counter > 0) {
      const coffee = {};
      coffee.id = placedOrderIds[i];
      coffee.count = counter;
      placedOrderOverview.push(coffee);
    }
  }

  const clickedOrders = [];
  showOverview(placedOrderOverview, clickedOrders);

};

const handleOrderClick = e => {

  //console.log(e.currentTarget.dataset.id);

  const coffeeClickId = parseInt(e.currentTarget.dataset.id);

  const placedOrderIds = [];
  countClicks(placedOrderIds, coffeeClickId);

  const $orderState = document.querySelector(`.emptystate`);
  $orderState.classList.add(`orderPlaced`);



};

const initEventListeners = () => {
  const $orders = document.querySelectorAll(`.price__button`);
  $orders.forEach(order =>
    order.addEventListener(`click`, handleOrderClick)
  );

};

//HTML-structuur aanmaken

const makeHTML = ($pricelist, coffeeName, coffeePrice, coffeeId) => {
  const $list = document.createElement(`li`);
  $list.classList.add(`price`);
  $pricelist.appendChild($list);

  const $priceButton = document.createElement(`a`);
  $list.appendChild($priceButton);
  $priceButton.classList.add(`price__button`);
  $priceButton.dataset.id = coffeeId;

  const $wrapper = document.createElement(`span`);
  $wrapper.classList.add(`price__button__wrapper`);
  $priceButton.appendChild($wrapper);

  const $wrapperName = document.createElement(`span`);
  $wrapperName.classList.add(`price__button__name`);
  $wrapper.appendChild($wrapperName, $wrapperAmount, $wrapperPlus);

  const $wrapperAmount = document.createElement(`span`);
  $wrapperAmount.classList.add(`price__button__amount`);
  $wrapper.appendChild($wrapperAmount);

  const $wrapperPlus = document.createElement(`span`);
  $wrapperPlus.classList.add(`price__button__plus`);
  $wrapper.appendChild($wrapperPlus);

  //HTML structuur invullen
  const euro = `\u20ac`;

  $wrapperName.textContent = coffeeName;
  $wrapperAmount.textContent = `${euro} ${coffeePrice}`;
  $wrapperPlus.textContent = `+`;
};

//Alle koffies in een array binnenhalen: console.log(data.coffees);
//Van de vier eerste koffies de HTML opbouwen

const init = () => {
  const $pricelist = document.querySelector(`.prices__list`);

  data.coffees.forEach(coffee => {
    if (coffee.plantbased === true) {
      const coffeeId = coffee.id;
      const coffeeName = coffee.name;
      const coffeePrice = coffee.prices.medium;
      makeHTML($pricelist, coffeeName, coffeePrice, coffeeId);
    }
  });

  //document.querySelector(`.orders`).classList.add(`visually-hidden`);

  initEventListeners();





};

init();
