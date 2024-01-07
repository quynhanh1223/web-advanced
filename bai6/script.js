console.log(products)

// const imgTag = document.createElement('img')


const container = document.getElementById("content");

products.forEach(function(item, index) {
    const CardTag = document.createElement("div");
    const cardImgTop = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");
    const btnPrimary = document.createElement("a");

    cardImgTop.src = item.imgUrl; // imgUrl from data.js (name of link)
    cardTitle.innerText = item.name;
    cardText.innerText = item.description;
    btnPrimary.innerText = "Them vao gio hang";

    CardTag.appendChild(cardImgTop);
    CardTag.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(btnPrimary);

    container.appendChild(CardTag)
    

    
    // <div class="card" style="width: 18rem;">
    //         <img class="card-img-top" src="https://storage.googleapis.com/f1-cms/2020/12/23b4a28e-20201228_092345.jpg" alt="Card image cap">
    //         <div class="card-body">
    //           <h5 class="card-title">Card title</h5>
    //           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //           <a href="#" class="btn btn-primary">Buy it</a>
    //         </div>
    //       </div>

    //trong ra ngoaif
    cardTitle.classList.add("card-title"),
    cardText.classList.add("card-text"),
    btnPrimary.classList.add("btn-primary"),
    btnPrimary.classList.add("btn"),
    cardBody.classList.add("card-body"),
    cardImgTop.classList.add("card-img-top"),
    CardTag.classList.add("card"),

 
    btnPrimary.addEventListener("click", function(){
        const Oldproducts = JSON.parse(localStorage.getItem('cart'))
        Oldproducts.push(item)
        localStorage.setItem('cart', JSON.stringify(Oldproducts))
    })
    
    // btnPrimary.appendChild(cardBody)

    

// console.log('container')
}
)