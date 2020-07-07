const Node = require('../controllers/Node');

 
class Tree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    add(value) {
        // arbol no tiene elementos
        if (this.isEmpty()) {
            this.root = new Node(value);
            return;
        }

        var aux = this.root;

        while (aux) {
            // vamos hacia la izquierda
            console.log(value.Departamento);

            if (value.Departamento < aux.value) {
                if (aux.left) {
                    aux = aux.left;
                }
                else {
                    aux.left = new Node(value);
                    return;
                }
            }
            else { // vamos hacia la derecha
                if (aux.right) {
                    aux = aux.right;
                }
                else {
                    aux.right = new Node(value);
                    return;
                }
            }
        }
    }
    addRecursive(value, node = this.root) {
        if (!node) {
            this.root = new Node(value);
            return;
        }

        if (value.Departamento.charCodeAt(0) > node.value.Departamento.charCodeAt(0)) {
            if (node.left) {
                return this.addRecursive(value, node.left);
            }
            node.left = new Node(value);
            return;
        }
        else { // vamos hacia la derecha
            if (node.right) {
                return this.addRecursive(value, node.right);
            }
            node.right = new Node(value);
            return;
        }
    }
    find(value) {
        var count = 0;
        var aux = this.root;

        while (aux) {
            // si encontramos el nodo con el valor
            if (aux.value.Departamento == value) {
                a.push(aux.value);
                if ((aux.left == null) && (aux.right == null)) {
                    break;
                }
                if ((aux.left != null) && (aux.right == null)) {
                    aux = aux.left;
                }
                else {
                    aux = aux.right;
                }
            }
            // seguimos buscando a la derecha
            if (aux.value.Departamento.charCodeAt(0) < value.charCodeAt(0)) {
                aux = aux.left;

            }
            else if (aux.value.Departamento.charCodeAt(0) > value.charCodeAt(0)) {
                // seguimos buscando a la izquierda
                aux = aux.right;
            }
        }
        // retornamos el nodo encontrado.
        // si no encontramos el nodo con el valor
        // aux, toma el valor null.
        return aux;
    }
    print(node = this.root) {
        if (!node) {
            return;
        }
        this.print(node.left);
        console.log(node.value);
        this.print(node.right);
    }
}





  ////////////////////////////////////////////////////////////
  