// const car = {
//     color: ["Black", "Blue", "white"],
//     price: 12832,
//     source: "Honda"
// }
// console.log(car.price)

const listcars = [
    {
    name: "Xe máy Honda VARIO 160cc 2023 Phiên bản Thể Thao - Xám đen bạc",
    price: 58440000,
    model: "VARIO 160 THỂ THAO",
    imgUrl: "https://salt.tikicdn.com/cache/368x368/ts/product/d9/1a/41/b52676f742e0fc4df26e5ef12e6ca11a.png.webp"
    },
    {
    name: "Xe Máy Honda AirBlade 160 2023 - Phiên Bản Tiêu Chuẩn - Đỏ Xám",
    price: 223323223,
    model: "VARIO 160 THỂ THAO",
    imgUrl: "https://salt.tikicdn.com/cache/368x368/ts/product/c7/94/3f/6a76daedf3a1249a913aee5233e309cc.jpg.webp"
    },
    {
    name: "Xe máy Honda VARIO 160cc 2023 Phiên bản Thể Thao - Xám đen bạc",
    price: 58440000,
    model: "VARIO 160 THỂ THAO",
    imgUrl: "https://salt.tikicdn.com/cache/368x368/ts/product/c7/94/3f/6a76daedf3a1249a913aee5233e309cc.jpg.webp"
    },
    {
    name: "Xe máy Honda VARIO 160cc 2023 Phiên bản Thể Thao - Xám đen bạc",
    price: 58440000,
    model: "VARIO 160 THỂ THAO",
    imgUrl: "https://salt.tikicdn.com/cache/368x368/ts/product/d9/1a/41/b52676f742e0fc4df26e5ef12e6ca11a.png.webp"
    },
    {
    name: "Xe máy Honda VARIO 160cc 2023 Phiên bản Thể Thao - Xám đen bạc",
    price: 58440000,
    model: "VARIO 160 THỂ THAO",
    imgUrl: "https://salt.tikicdn.com/cache/368x368/ts/product/d9/1a/41/b52676f742e0fc4df26e5ef12e6ca11a.png.webp"
    },
    {
    name: "Xe máy Honda VARIO 160cc 2023 Phiên bản Thể Thao - Xám đen bạc",
    price: 58440000,
    model: "VARIO 160 THỂ THAO",
    imgUrl: "https://salt.tikicdn.com/cache/368x368/ts/product/d9/1a/41/b52676f742e0fc4df26e5ef12e6ca11a.png.webp"
    },
    
];
// <img src="" alt="">
//<h4 >Xe Máy Honda AirBlade 160 2023 - Phiên Bản Tiêu Chuẩn - Đỏ Xám</h4>
//<h3>58440000$</h3>

const container = document.getElementById("container");

listcars.forEach(function(item, index) {
    const divTag = document.createElement("div");
    const imgTag = document.createElement("img");
    const h4Tag = document.createElement("h4");
    const h3Tag = document.createElement("h3");

    divTag.appendChild(imgTag);
    divTag.appendChild(h4Tag);
    divTag.appendChild(h3Tag);

    container.appendChild(divTag)
    imgTag.src = item.imgUrl;
    h4Tag.innerText = item.price;
    h3Tag.innerText = item.model;
    // container.appendChild(divSecond);

}
)