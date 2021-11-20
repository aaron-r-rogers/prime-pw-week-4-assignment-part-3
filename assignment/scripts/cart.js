console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = ['banana', 'orange', 'grapes', 'pineapple'];
const maxItems = 5

function addItem(item, basket) {
    basket.push(item);
    return true;
}

function listItems(basket) {
    for (items of basket) {
        console.log(items);
    }
    return 'listed'
}

/*
function listItems(basket) {
    for (let i = 0; i < basket.length; i++) {
        console.log(basket[i]);
    }
    return true
}
*/

function empty(basket) {
    basket.splice(0, basket.length)
    return 'emptied'
}

function isFull(basket){
    if (basket.length >= 5) {
        return true;
    } else return false;
}

console.log('startTest');
console.log('added item', addItem('apples', basket));
console.log(listItems(basket));
console.log(basket);
//console.log(empty(basket));
//console.log(basket);
console.log('basket is full', isFull(basket))
console.log('stopTest');