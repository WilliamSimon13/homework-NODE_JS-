    var product = [
        {
            id:"P1",
            name:"Phòng tổng thống",
            img : "P1.jpeg",
            price:1220000,
        },
        {
            id:"P2",
            name:"Phòng giường đôi",
            img : "P2.png",
            price:400000,
        },
        {
            id:"P3",
            name:"Phòng bình dân",
            img : "P3.jpeg",
            price:350000,
        },
        {
            id:"P4",
            name:"Phòng giường lớn",
            img : "P4.jpeg",
            price:564000,
        },
        
    ];
// đẩy mảng product vào local
    function Save(){
        localStorage.setItem('listProduct',JSON.stringify(product))
    }
   //lấy sản phẩm 
   function load(){
       product = JSON.parse(localStorage.getItem('listProduct'));
   } 
   //xuất sản phẩm ra html
   if (localStorage.getItem("listProduct") != null) {
    load();
}
Save();
   var listLocal = function(){
       var listproduct ="";
       for (var i in product){
           var data = JSON.parse(JSON.stringify(product[i]))
        var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listproduct += '<div class="card product p-2" style="width:auto">'; 
        listproduct += '<img class="card-img-top" src="img/' + data.img +'" alt="...">';
        listproduct += '<div class="card-title product-title text-center h5" >'+data.name+'</div>';
        listproduct += '<div class="price text-center h6">'+data.price+'₫</div>';
        listproduct += `<button style="
                                background-color: #28a745; 
                                color: white; 
                                border: none; 
                                padding: 10px 20px; 
                                font-size: 16px; 
                                border-radius: 5px; 
                                cursor: pointer;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            ">Xem Chi Tiết</button>
                            `;
        listproduct += '</div>';
        listproduct += '</div>';

        document.getElementById("OrderList").innerHTML += listproduct;
       }
       Save();
       
   }

listLocal();

