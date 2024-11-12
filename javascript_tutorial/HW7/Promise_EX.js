function sumNumber(a,b){
    return new Promise((resolve,reject) =>{
        if(typeof a !== 'number' || typeof b !== 'number'){
            reject('hai so phai la kieu number');
        }else{
            const sum = a + b;
            resolve(sum);
        
        }
    });
}

const a = 5;
const b = 3;

sumNumber(a,b)
    .then(sum =>{
        console.log('tong cua',a,'va',b,'la:',sum);
    })
    .catch(error => {
        console.error(error);
    });

function getUser() {
    return new Promise((resolve,reject) =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok){
                    throw new Error('khong the lay du lieu tu API');
            }
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
    });
}

getUser()
    .then(data => {
        console.log('danh sach nguoi dung',data.length);
    })
    .catch(error => {
        console.error('da xay ra loi',error);
    })