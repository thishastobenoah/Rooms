// Phase 1
class Room {
  constructor(name, length, width, capacity = 15) {
    this.name = name;
    this.length = length;
    this.width = width;
    this.capacity = capacity;
  }

  getArea() {
    return this.length * this.width;
  }

  getPerimeter() {
    return 2 * (this.length + this.width);
  }
}

const room1 = new Room("Sun", 30, 20);
const room2 = new Room("Green", 15, 20);

console.log(room1.name);
console.log(room1.length);
console.log(room1.width);
console.log(room1.getArea());
console.log(room1.getPerimeter());

console.log(room2.name);
console.log(room2.length);
console.log(room2.width);
console.log(room2.getArea());
console.log(room2.getPerimeter());

// Phase 2
Room.prototype.available = true;
room2.available = false;

console.log("room1 - available:", room1.available);
console.log("room2 - available:", room2.available);

// Phase 3
const room3 = new Room("Blue", 25, 25, 18);

console.log("room2 - capacity:", room2.capacity);
console.log("room3 - capacity:", room3.capacity);