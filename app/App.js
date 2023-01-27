const LinkedList = require('../linkedlist/LinkedList.js');


let list = new LinkedList();

list.addToHead('Rosa Garcia');
list.addToHead('Albert Villagrana');
list.addToHead('Faby Padillia');
list.addToHead('Juan Ramirez');
list.addToHead('Vannesa Rosales');

list.printList();

list.addToHead('Chimmy Da Changa');
list.addToTail('Grandpa Nacho');

list.printList();