var LinkedList = function () {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function (val) {
  if (this.head === null) {
    this.head = createNode(val);
    this.head.next = this.tail;
    this.tail = this.head;
  } else {
    this.tail.next = createNode(val);
    this.tail = this.tail.next;
  }
};

LinkedList.prototype.forEach = function (cb, node) {
  node = node || this.head;
  for (var i = 0; i < node.value.length; i++) {
    cb(node.value[i]);
  }
  if (node.next) {
    LinkedList.prototype.forEach(cb, node.next);
  } else {
    return;
  }
};

LinkedList.prototype.removeHead = function () {
  var next = this.head.next;
  delete this.head;
  this.head = next;
};

var createNode = function (val) {
  return {
    value: val,
    next: null
  };
};

var list = new LinkedList();
list.addToTail(['a', 'b', 'c']);
list.addToTail(['e', 'f', 'g']);
list.addToTail('c');
list.addToTail('d');
list.addToTail('e');
// list.forEach()
list.forEach(console.log);
list.removeHead();
console.log(list);
list.forEach(console.log);
console.log(list);

// test and compare following
// function List(){
//   this.start = null; 
//   this.end = null;
//   this.add = function (data){
//     if(this.start === null && this.end === null){ 
//       this.start = List.makeNode(data); 
//       this.end = this.start;
//     } else if (this.end === this.start) {
//       this.end = List.makeNode(data);
//       this.start.next = this.end;
//     } else {
//       this.end.next = List.makeNode(data);
//       this.end = this.end.next;
//     }
//   };
// }