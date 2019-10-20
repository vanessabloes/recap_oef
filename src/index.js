import './style.css';
import {devineLog} from './js/utility/helpers';
import data from './assets/data/coffees.json';

devineLog('Hey, ik ben een JS file');
const arr = [1, 2, 3];

const ES6Stuff = () => devineLog('Ik kan ES6 stuff aan', ...arr);
ES6Stuff();

const handleOrderRemove = e => {
  const target = e.currentTarget;
  console.log(target);

  const $order = document.querySelector(`.order`);
  $order.classList.add(`removeClick`);
  target.classList.add(`removeClick`);

};

const showOrders = (coffeeName, coffeePrice) => {
  console.log(coffeeName);
  console.log(coffeePrice);

  const $orders = document.querySelector(`.orders`);

  const $orderlist = document.createElement(`li`);
  $orderlist.classList.add(`order`);
  $orders.appendChild($orderlist);

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

  //console.log(coffeeClickId);
  //console.log(typeof (coffeeClickId));
  const coffeeClickIdNumber = parseInt(coffeeClickId);

  const coffeeArray = data.coffees;
  //console.log(coffeeArray);

  //let count = 0;

  coffeeArray.forEach(coffeeObject => {
    if (coffeeObject.id === coffeeClickIdNumber) {
      //console.log(coffeeObject.name);
      const orderName = coffeeObject.name;
      //console.log(coffeeObject.prices.medium);
      const orderPrice = coffeeObject.prices.medium;
      //console.log(coffeeClickIdNumber);
      //console.log(typeof (coffeeClickIdNumber));
      //count ++;
      //console.log(count);
      showOrders(orderName, orderPrice);
    }

  });

  /*const clickCounter = {};

  clickCounter[coffeeClickIdNumber] = `test`;

  console.log(clickCounter);*/

};

const handleOrderClick = e => {
  //console.log(e.currentTarget.dataset.id);
  const coffeeClickId = e.currentTarget.dataset.id;

  const clickIds = [];
  clickIds.push(coffeeClickId);
  console.log(clickIds);

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
