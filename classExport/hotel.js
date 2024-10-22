class Hotel {

    constructor(roomNumber, floor, price, type){
        this.roomNumber = roomNumber;
        this.floor = floor;
        this.price = price;
        this.type = type;
        this.isAvailable = true;
    }

    showInfo(){
        console.log(`Room Information:
        - Room Number: ${this.roomNumber}
        - Floor: ${this.floor}
        - Price: $${this.price}
        - Type: ${this.type}
        - Available: ${this.isAvailable ? 'Yes' : 'No'}
        `);
    }

    checkAvailability() {
        if (this.isAvailable) {
            console.log(`Room ${this.roomNumber} is available.`);
        } else {
            console.log(`Room ${this.roomNumber} is not available.`);
        }
    }

    updatePrice(newPrice) {
        this.price = newPrice;
        console.log(`The price for room ${this.roomNumber} has been updated to $${this.price}.`);
    }

    updateRoomType(newType) {
        this.type = newType;
        console.log(`The type for room ${this.roomNumber} has been updated to ${this.type}.`);
    }

}

class vipRoom extends Hotel {
    constructor(roomNumber, floor, price) {
        super(roomNumber, floor, price, 'VIP');
        this.hasSpecialService = true; 
        this.hasGoodView= true; 
    }

    showInfo() {
        super.showInfo();
        console.log('This is a VIP room with special service and good view.');
    }
}

module.exports = { Hotel, vipRoom };