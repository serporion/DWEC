class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calArea;
    }

    calArea() {
        return this.height * this.width;
    }
}

a = new Rectangle(10, 20);
console.log(a.calArea());