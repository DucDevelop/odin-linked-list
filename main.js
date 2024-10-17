import LinkedListFactory from "./LinkedList.js"

const list = LinkedListFactory();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.size);

list.pop();
console.log(list.toString());
console.log(list.size);

list.pop();
console.log(list.toString());
console.log(list.size);
console.log(list.tail.value);
console.log(list.head.value);



console.log(list.contains("cat"));
console.log(list.contains("bird"));

console.log(list.find("cat"));
console.log(list.at(list.find("cat")));

console.log(list.find("bird"));
console.log(list.at(null));


console.log(list.toString());
list.insertAt("Trex", 2);
console.log(list.toString());
list.insertAt("One Man", 1);
console.log(list.toString());
list.insertAt("Zero Man", 0);
console.log(list.toString());
console.log(list.head);

// list.insertAt("Zero Man", 10);
console.log(list.size);
list.insertAt("Tail Man", list.size);
console.log(list.toString());
console.log(list.tail);
console.log(list.size);


list.removeAt(0)
console.log(list.toString());
console.log(list.size);

list.removeAt(list.size-1)
console.log(list.toString());
console.log(list.size);

list.removeAt(2)
console.log(list.toString());
console.log(list.size);



