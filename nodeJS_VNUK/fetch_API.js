// Hàm lấy sản phẩm từ API
async function fetchProduct() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/'); // Thay bằng URL thực tế
        const product = await response.json(); // Phân tích dữ liệu JSON

        const productContainer = document.getElementById("demo");
        product.forEach(product => {
        // Sử dụng destructuring để lấy các thuộc tính từ sản phẩm
        const { id, name, price, features } = product;

        // Clone sản phẩm và thêm thuộc tính mới
        const clonedProduct = {
            id,
            name,
            price,
            features: {
                ...features, // Clone thuộc tính features
                warranty: '2 years' // Thêm thuộc tính mới
            }
        };

        const productCard = `
                <div class="card">
                    <h2>${clonedProduct.name}</h2>
                    <p><strong>Price:</strong> $${clonedProduct.price}</p>
                    <p><strong>Warranty:</strong> ${clonedProduct.features.warranty}</p>
                    <p><strong>Features:</strong> ${JSON.stringify(clonedProduct.features)}</p>
                </div>
            `;

            // Thêm card vào container
            productContainer.innerHTML += productCard;

        // console.log('Cloned Product: ', clonedProduct);
    });
    } catch (error) {
        console.error('Error fetching product:', error);
    }

}

// Gọi hàm
fetchProduct();

