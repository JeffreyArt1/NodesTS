export class Nodo {
  constructor(value: number, parent: Nodo, left: Nodo, right: Nodo) {
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }

  value: number;
  parent: Nodo;
  left: Nodo;
  right: Nodo;
}
