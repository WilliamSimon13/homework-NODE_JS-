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
          '<td><button onclick="updateProduct('
          +id+')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>

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
        // Update product if productId is present
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
            getProducts(handleProducts); // Reload products
            document.getElementById('productForm').reset();
            document.getElementById('productModal').querySelector('.btn-close').click(); // Close modal
        })
        .catch(error => console.error('Error updating product:', error));
    } else {
        // Create new product
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
            getProducts(handleProducts); // Reload products
            document.getElementById('productForm').reset();
            document.getElementById('productModal').querySelector('.btn-close').click(); // Close modal
        })
        .catch(error => console.error('Error adding product:', error));
      }
  });


  function editProduct(id) {
      fetch(`https://671a0effacf9aa94f6a8ede6.mockapi.io/hotel/v1/hotel/${id}`)
          .then(response => response.json())
          .then(product => {
              // Populate the form with the product data
              document.getElementById('productId').value = product.id;
              document.getElementById('productName').value = product.name;
              document.getElementById('productPrice').value = product.price;
              document.getElementById('productPlace').value = product.place;
              document.getElementById('productAvailable').value = product.available;
              document.getElementById('productModalLabel').textContent = 'Edit Product';
          })
          .catch(error => console.error('Error fetching product:', error));
  }

  