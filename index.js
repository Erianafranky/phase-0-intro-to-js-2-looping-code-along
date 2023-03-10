// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
  //console.log(`I'm ${age} years old. Happy birthday to me!`);
  //debugger;
//}

/* const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  }

  return gifts;
}

wrapGifts(gifts); */

function writeCards (name, event) {
    const message = [];
    for (let i = 0; i < name.length; i++) {
        const messages = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
        message.push(messages)
    }
    return message;
}

function countDown (counting) {
    while (counting > 0) {
        console.log(counting);
        counting -= 1;
    }
    console.log(counting);
}