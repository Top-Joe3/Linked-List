import { LinkedList } from "./list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.toString();

list.prepend("goat");
list.toString();

list.append("lion");
list.append("crab");
list.toString();

console.log(list.size());
console.log(list.headNode());
console.log(list.tail());
console.log(list.at(4));
list.pop();
list.toString();

console.log(list.contains("parrot"));
console.log(list.contains("owl"));
console.log(list.find("car"));
list.toString(list.insert("woman", 2));
list.remove(2);
list.toString();
