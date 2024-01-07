// document.getElementById("click").addEventListener("click", function(){
//     localStorage.setItem("time", JSON.stringify({
//         xinChao: "text"
//     }));
// });

// let result = localStorage.getItem('time');
// console.log(JSON.parse(result))
// // document.getElementById("hello").innerText = localStorage.getItem("hello");

document.getElementById("click-here").addEventListener("click", function(){
    localStorage.setItem("name","Quynh Anh")
    localStorage.setItem("emailhere", "giá trị")
    //emailhere
})
let result1 = localStorage.getItem("name1");
console.log(JSON.parse(result))

let result3 = localStorage.getItem("emailhere");
console.log(JSON.parse(result))