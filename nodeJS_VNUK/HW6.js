// function tinhdiem(diem) {
//     if (diem < 4) {
//         console.log("Hoc Lai");
//     } else if (diem >= 4 && diem < 5.5) {
//         console.log("Loai D");
//     } else if (diem >= 5.5 && diem < 7) {
//         console.log("Loai C");
//     } else if (diem >= 7 && diem < 8.5) {
//         console.log("Loai B");
//     } else if (diem >= 8.5 && diem <= 10) {
//         console.log("Loai A");
//     } else {
//         console.log("Nhap lai diem");
//     }
// }

// var a = 12;
// var b = 20;
// if(a<b){
//     let tmp =a;
//     a = b;
//     b = tmp;
// }
// console.log(a,b);

// var hello = (name, message) =>{
//     console.log("chao"+ name + ", loi nhan:" +message);
// };
// hello ("simon", "???");

const dientichHCN = (width, height) =>{
    return width * height;
}

const chuviHCN = (width, height) =>{
    return (width + height) *2;
}

console.log(dientichHCN(10,20));
console.log(chuviHCN(10,20));