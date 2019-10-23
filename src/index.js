import './style.css';
import {devineLog} from './js/utility/helpers';
import data from './assets/data/coffees.json';

devineLog('Hey, ik ben een JS file');
const arr = [1, 2, 3];

const ES6Stuff = () => devineLog('Ik kan ES6 stuff aan', ...arr);
ES6Stuff();

const countOrders = (order, placedOrderIds) => {

  const placedOrderId = parseInt(order.dataset.id);
  placedOrderIds.push(placedOrderId);
  console.log(placedOrderIds);

  const placedOrderOverview = [];
  const placedOrderCounter = {};

  //const distinctIds = [...new Set(placedOrderIds)];
  //console.log(distinctIds);
  let counter1 = 0;
  let counter2 = 0;
  //let counter3 = 0;
  //let counter4 = 0;
  //let counter5 = 0;

  for (let i = 0;i < placedOrderIds.length;i ++) {
    console.log(placedOrderIds[i]);


    if (placedOrderIds[i] === 1) {
      counter1 += 1;
      placedOrderCounter.id = 1;
      placedOrderCounter.count = counter1;
    }

    else if (placedOrderIds[i] === 2) {
      counter2 += 1;
      placedOrderCounter.id = 2;
      placedOrderCounter.count = counter2;
    }



    placedOrderOverview.push(placedOrderCounter);
  }






  console.log(placedOrderOverview);

};

const handleOrderRemove = e => {
  const target = e.currentTarget;
  console.log(target);

  const $order = document.querySelector(`.order`);
  $order.classList.add(`removeClick`);
  target.classList.add(`removeClick`);

};

const showOrders = (coffeeName, coffeePrice, coffeeClickIdNumber) => {

  const $orders = document.querySelector(`.orders`);

  const $orderlist = document.createElement(`li`);
  $orderlist.classList.add(`order`);
  $orders.appendChild($orderlist);
  $orderlist.dataset.id = coffeeClickIdNumber;

  const $placedOrders = document.querySelectorAll(`.order`);
  const placedOrderIds = [];
  $placedOrders.forEach(placedOrder => {
    countOrders(placedOrder, placedOrderIds);
  });

  const $orderName = document.createElement(`span`);
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

};


const loadOrders = coffeeClickId => {
  const $orderState = document.querySelector(`.emptystate`);
  $orderState.classList.add(`orderPlaced`);

  const coffeeClickIdNumber = parseInt(coffeeClickId);

  const coffeeArray = data.coffees;

  coffeeArray.forEach(coffeeObject => {
    if (coffeeObject.id === coffeeClickIdNumber) {
      const orderName = coffeeObject.name;
      const orderPrice = coffeeObject.prices.medium;
      showOrders(orderName, orderPrice, coffeeClickIdNumber);
    }

  });


};

const handleOrderClick = e => {
  //console.log(e.currentTarget.dataset.id);
  const coffeeClickId = e.currentTarget.dataset.id;

  loadOrders(coffeeClickId);

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

  initEventListeners();
};

init();
