class Hotel {
    constructor(roomNumber, floor, price, type) {
        this._roomNumber = roomNumber;
        this._floor = floor;
        this._price = price;
        this._type = type;
        this._isAvailable = true;
    }

    // Getter for roomNumber
    get roomNumber() {
        return this._roomNumber;
    }

    // Setter for roomNumber
    set roomNumber(newRoomNumber) {
        this._roomNumber = newRoomNumber;
        console.log(`Room number updated to ${newRoomNumber}`);
    }

    // Getter for price
    get price() {
        return this._price;
    }

    // Setter for price
    set price(newPrice) {
        if (newPrice > 0) {
            this._price = newPrice;
            console.log(`Price updated to $${newPrice}`);
        } else {
            console.log("Price must be positive.");
        }
    }

    showInfo() {
        console.log(`Room Information:
        - Room Number: ${this._roomNumber}
        - Floor: ${this._floor}
        - Price: $${this._price}
        - Type: ${this._type}
        - Available: ${this._isAvailable ? 'Yes' : 'No'}
        `);
    }

    checkAvailability() {
        if (this._isAvailable) {
            console.log(`Room ${this._roomNumber} is available.`);
        } else {
            console.log(`Room ${this._roomNumber} is not available.`);
        }
    }

    updateRoomType(newType) {
        this._type = newType;
        console.log(`Room type updated to ${newType}`);
    }
}

// VIP Room extending Hotel
class vipRoom extends Hotel {
    constructor(roomNumber, floor, price) {
        super(roomNumber, floor, price, 'VIP');
        this._hasSpecialService = true;
        this._hasGoodView = true;
    }

    showInfo() {
        super.showInfo();
        console.log('This is a VIP room with special service and a good view.');
    }
}

// Example of a Map to manage rooms
const roomsMap = new Map();

// Adding rooms to the Map
roomsMap.set(101, new Hotel(101, 1, 150, 'Standard'));
roomsMap.set(102, new Hotel(102, 1, 180, 'Deluxe'));
roomsMap.set(201, new vipRoom(201, 2, 300));

// Accessing rooms from the Map and displaying their info
roomsMap.get(101).showInfo();
roomsMap.get(102).showInfo();
roomsMap.get(201).showInfo();

// Update room price using the setter
roomsMap.get(101).price = 160;

// Check updated info
roomsMap.get(101).showInfo();