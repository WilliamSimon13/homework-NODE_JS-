const { Hotel, vipRoom } = require('./hotel');

var hotel = new Hotel(101, 1, 100000, 'normal');
var viproom = new vipRoom(102, 2, 150000);

hotel.showInfo();
hotel.checkAvailability();
hotel.updatePrice(120000);
hotel.updateRoomType('VIP');
hotel.showInfo();

viproom.showInfo();
viproom.checkAvailability();
viproom.updatePrice(180000);
viproom.updateRoomType('VIP');
viproom.showInfo();