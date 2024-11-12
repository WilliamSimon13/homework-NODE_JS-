function tinh(){
    const dientichHCN = (width, height) =>{
        return width * height;
    }
    
    const chuviHCN = (width, height) =>{
        return (width + height) *2;
    }
    
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    
    
    
    document.getElementById("ChuVi").innerHTML = dientichHCN(width, height);
    document.getElementById("DienTich").innerHTML = chuviHCN(width, height);
    
}