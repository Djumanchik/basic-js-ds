const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node { // создание узла
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
}
class BinarySearchTree { 
  constructor() { // конструктор создания дерева
      this.root = null
  }

  add(data) {
    this.root = addWithin(this.root, data); // рекурсиваная функция, вызывающая сама себя
    function addWithin(node, data) {
      if (!node) { // если нет узла, то его можно добавить
        return new Node(data); // добавить узел
      }
      if (node.data === data) { // если узел есть и у него есть значение равное добавленному
        return node; // то мы его не добавляем, а просто возвращаем его из дерева
      }
      if (data < node.data) { // если значение элемента меньше узлового 
        node.left = addWithin(node.left, data); // идем и добавляем его влево
      } else { // иначе
        node.right = addWithin(node.right, data); // жобавляем его вправо
      }
      return node; // возврат текущего узла
    }
  } 

  has(data) { // 
    return searchWithin(this.root, data);
    function searchWithin(node, data) {
      if (!node) { // если узла нет, то возвращаем ложь
        return false;
      }
    
      if (node.data === data) { // если есть нужное значение, что вернем истину
        return true;
      }
      return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data); // если искомая величина меньше ищем слева, нет - справа
    }
  }

  find(node, data) {
    // function search(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        return this.find(node.left, data);     
      } else if (data > node.data) { 
        return this.find(node.right, data); 
      } else {
        return node; 
      }
  }

  remove(data) {
    this.root = removeNode(this.root, data); // удали узел из этого дерева с таким значением
    function removeNode(node, data) {
      if(!node) { // если нет узла и там ноль
        return null; // его мы и оставляем
      }
      if (data < node.data) { // если искомое значение меньше, чем в текущем узле
        node.left = removeNode(node.left, data); // ищем слева и просим удалить искомую величину
        return node; // и положить в корень новый узел, шагая вверх
      } else if (node.data < data) { // иначе, если занчение больше, то
        node.right = removeNode(node.right, data); // удаляем в правом поддереве искомую величину
        return node; // и возвращаем обновленное поддерево 
      } else { // иначе значение равно тому, что находится в узле
        if (!node.left && !node.right) { // вдруг текущий узел является листом - у него нет ни левого, ни правого поддерева
          return null; // если нет обоих потомков, то просто записываем туда ноль
        }
        if (!node.left) { // если нет левого потомка 
          node = node.right; // то ставим правого потомка на его место
          return node; // и вписываем его значение на место удаленного
        }
        if (!node.right) { // если нет правого потомка
          node = node.left; // то ставим на его место левого потомка
          return node; // и записываем его на место удаленного
        }
        // а когда есть оба потомка, то необходимо сделать сравнение
        let minFromRight = node.right; // ищем минимального из правого поддерева (либо стоит искать максимального из левого поддерева) - начинаем с корня правого поддерева
        while (minFromRight.left) { // наименьший находится максимально слева и мы идем влево до конца
          minFromRight = minFromRight.left; // если слева элемент есть, то мы сдвигаемся к нему
        }
        node.data = minFromRight.data; // как только нашли минимальный элемент в правом поддереве, мы помещаем его значение в значение удаляемого узла
        node.right = removeNode(node.right, minFromRight.data); // и удаляем узел с минимальным значением
        return node; // возвращаем текущий узел и он по рекурсии поднимится вверх
      }
    }
  }

  min() {
    if (!this.root) { // проверяем, есть ли у нас корень
      return; // если нет корня, то и нечего возвращать
    }
    let node = this.root; // начинаем искать с корня
    while (node.left) { // а есть кто-нибудь левее
      node = node.left; // и мы к нему переходим
    } // дойдя до самого левого мы закрываем цикл
    return node.data; // возвращаем минимум
  }

  max() {
    if (!this.root) { // проверяем, есть ли у нас корень
      return; // если нет корня, то и нечего возвращать
    }
    let node = this.root; // начинаем искать с корня
    while (node.right) { // а есть кто-нибудь правее
      node = node.right; // и мы к нему переходим
    } // дойдя до самого правого мы закрываем цикл
    return node.data; // возвращаем максимум
  }
}

// const BST = new BinarySearchTree();
// BST.add(11); // establishes root node 
// BST.add(7);
// BST.add(9);
// BST.add(15);
// BST.add(6);
// console.log(BST);

module.exports = {
  BinarySearchTree
};