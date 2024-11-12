import { tinhChuVi, tinhDienTich } from '../homework-NODE_JS-/rectangle.js';

// const {tinhChuVi,tinhDienTich} = require('./homework-NODE_JS-/rectangle.js');

const Dai = 5;
const Rong = 10;

const Chuvi  = tinhChuVi(Dai,Rong);
const Dientich = tinhDienTich(Dai,Rong);

console.log(`Chuvi hinh chu nhat la: ${Chuvi}`);
console.log(`Dientich hinh chu nhat la: ${Dientich}`);


