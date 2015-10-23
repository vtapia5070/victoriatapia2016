var LinkedList = function () {
  this.head = null;
  this.tail = null
};

LinkedList.addToTail = function (val) {
  if (this.tail === null) {
    this.head = createNode(val);
    this.tail = this.head;
  } else {
    this.tail.next = createNode(val);
    this.tail = this.tail.next;
  }
};

LinkedList.forEach = function () {};

LinkedList.removeHead = function () {};

LinkedList.removeTail = function () {};

var createNode = function (value) {
  return {
    value = value;
    next = null;
  }
};

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