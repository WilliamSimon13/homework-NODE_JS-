function getProducts(callback) {
    fetch('https://671a0effacf9aa94f6a8ede6.mockapi.io/hotel/v1/hotel')
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(error => callback(error, null));
  }
  
  function handleProducts(error, data) {
    if (error) {
      console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
    } else {
      const productTableBody = document.getElementById('productTableBody');
      data.forEach(product => {
        const row = `<tr>
          <td>${product.id}</td>
          <td>${product.name} hotel</td>
          <td>${product.price}</td>
          <td>${product.place}</td>
          <td>${product.available}</td>
          <td><button class="btn btn-warning" onclick="editProduct(${product.id})"
          data-bs-toggle="modal" data-bs-target="#productModal">U</button>
          <button class="btn btn-danger" onclick="deleteProduct(${product.id})"
          >D</button>

        </tr>`;
        productTableBody.innerHTML += row;
      });
    }
  }

  getProducts(handleProducts);

  document.getElementById('saveProductButton').addEventListener('click', function () {
    const productId = document.getElementById('productId').value;
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productPlace = document.getElementById('productPlace').value;
    const productAvailable = document.getElementById('productAvailable').value;

    const productData = {
        name: productName,
        price: productPrice,
        place: productPlace,
        available: productAvailable
    };

    if (productId) {
        
        fetch(`https://671a0effacf9aa94f6a8ede6.mockapi.io/hotel/v1/hotel/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(response => response.json())
        .then(() => {
            alert('Product updated successfully');
            getProducts(handleProducts); 
            document.getElementById('productForm').reset();
            document.getElementById('productModal').querySelector('.btn-close').click(); 
        })
        .catch(error => console.error('Error updating product:', error));
    } else {
        
        fetch('https://671a0effacf9aa94f6a8ede6.mockapi.io/hotel/v1/hotel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(response => response.json())
        .then(() => {
            alert('Product added successfully');
            getProducts(handleProducts); 
            document.getElementById('productForm').reset();
            document.getElementById('productModal').querySelector('.btn-close').click(); 
        })
        .catch(error => console.error('Error adding product:', error));
      }
  });


  function editProduct(id) {
      fetch(`https://671a0effacf9aa94f6a8ede6.mockapi.io/hotel/v1/hotel/${id}`)
          .then(response => response.json())
          .then(product => {
              
              document.getElementById('productId').value = product.id;
              document.getElementById('productName').value = product.name;
              document.getElementById('productPrice').value = product.price;
              document.getElementById('productPlace').value = product.place;
              document.getElementById('productAvailable').value = product.available;
              document.getElementById('productModalLabel').textContent = 'Edit Product';

              
          })
          .catch(error => console.error('Error fetching product:', error));
  }

  function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        
        fetch(`https://671a0effacf9aa94f6a8ede6.mockapi.io/hotel/v1/hotel/${productId}`, {
            method: 'DELETE'
        })
        .then(() => {
            alert('Product deleted successfully');
            
            getProducts(handleProducts);
        })
        .catch(error => console.error('Error deleting product:', error));
    }
  }

  