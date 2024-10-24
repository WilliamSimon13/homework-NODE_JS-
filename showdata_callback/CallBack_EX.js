function great(name,callback){
    console.log('hello ' +name);
    callback();
}

function sayGoodbye(){
    console.log('Goodbye');
}

great('Simon', sayGoodbye);

function A(callback){
    const kq = 5+8;
    callback(kq);
}

function B(kq){
    console.log('hello kq: ' + kq);
}

A(B);

function tinhdientich (chieuDai,chieuRong,callback){
    const area = chieuDai*chieuRong;
    callback(area);
}

function display(area){
    console.log('Dien Tich HCN la: ' + area);
}

tinhdientich(10,20,display);


