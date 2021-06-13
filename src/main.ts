import { Nodo } from './lib/nodo';

let Node1 = new Nodo(20, null, null, null);
let Node2 = new Nodo(9, Node1, null, null);
let Node3 = new Nodo(25, Node1, null, null);
let Node4 = new Nodo(5, Node2, null, null);
let Node5 = new Nodo(12, Node2, null, null);
let Node6 = new Nodo(11, Node5, null, null);
let Node7 = new Nodo(14, Node5, null, null);

Node1.left = Node2;
Node1.right = Node3;

Node2.left = Node4;
Node2.right = Node5;

Node5.left = Node6;
Node5.right = Node7;

console.log(Node1);
