function addUser(newUser) {
    return new Promise((resolve, reject) => {
      fetch('https://656d3ffbbcc5618d3c22ee91.mockapi.io/product', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Không thể thêm người dùng');
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

const newUser = {
    name : 'John Doe VTC_Mr Dinh',
    username : 'johndoe',
    email : 'johndoe@example.com',
};


addUser(newUser)
    .then(data => {
        console.log('ADDED success',data)
    })
    .catch(error => {
        console.error('ERROR',error);
    })