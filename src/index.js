import './style.css';
import {devineLog} from './js/utility/helpers';
import data from './assets/data/coffees.json';

devineLog('Hey, ik ben een JS file');
const arr = [1, 2, 3];

const ES6Stuff = () => devineLog('Ik kan ES6 stuff aan', ...arr);
ES6Stuff();

const showOrderOverview = overview => {
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
  });
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

const countOrders = (order, placedOrderIds) => {

  const placedOrderId = parseInt(order.dataset.id);
  placedOrderIds.push(placedOrderId);
  //console.log(placedOrderIds);

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



    makeOrderOverview(placedOrderOverview);
  }


};

/*const handleOrderRemove = e => {
  const target = e.currentTarget;
  console.log(target);

  const $order = document.querySelector(`.order`);
  $order.classList.add(`removeClick`);
  target.classList.add(`removeClick`);

};*/

const showOrders = coffeeClickIdNumber => {

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

  $orderRemove.addEventListener(`click`, handleOrderRemove);*/

};

const handleOrderClick = e => {

  //console.log(e.currentTarget.dataset.id);

  const coffeeClickId = e.currentTarget.dataset.id;
  const coffeeClickAmount = e.currentTarget.dataset.amount;

  const coffeeClickIdNumber = parseInt(coffeeClickId);
  const coffeeClickAmountNumber = parseInt(coffeeClickAmount);

  console.log(coffeeClickAmountNumber);

  const placedOrderIds = [];
  placedOrderIds.push(coffeeClickIdNumber);
  console.log(placedOrderIds);

  data.coffees.forEach(coffeeObject => {
    if (coffeeObject.id === coffeeClickIdNumber) {
      showOrders(coffeeClickIdNumber);
    }

  });


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
  $priceButton.dataset.amount = 0;

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

  initEventListeners();
};

init();
