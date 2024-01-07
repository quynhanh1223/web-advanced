async function getData() {
  const responsePost = await fetch("https://dummyjson.com/posts");
  const resultPost = await responsePost.json();
  console.log(resultPost);
  resultPost.posts.forEach((item, index) => {
    const liAll = document.createElement("li");
    const divTag = document.createElement("div");
    const content = document.createElement("p");
    const imgTag = document.createElement("img");
    const nameAll = document.createElement("h1");

    imgTag.src = "";
    nameAll.innerText = "";
    divTag.appendChild(imgTag);
    divTag.appendChild(nameAll);
    liAll.appendChild(divTag);

    container.appendChild(liAll);
  });
}

getData();

{
  /* <li class="all-li" style="list-style-type:none;">
            <div style="display: flex; flex-wrap: nowrap;">
                <img style="height: 60px; width: 60px; border-radius: 50%;" src="" alt="">
                <h1 style="width: 90%; padding-right: 30px;">Barker Rozer</h1>
                
            </div>
            <p style="width: 80%; display: flex; flex-wrap: wrap;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sapiente vero commodi? Iste molestias ad, tempora suscipit nobis explicabo nemo libero consequuntur architecto perspiciatis quaerat nulla, esse impedit obcaecati harum quibusdam repudiandae, amet eos labore. Voluptatibus ad sequi explicabo, illum maiores incidunt magnam fugiat nostrum cupiditate ipsum odit. Dolores beatae magnam tempora, officiis commodi natus et, aspernatur aut repudiandae eaque quod eum officia. Quisquam aperiam maxime incidunt eveniet, fugit odit fugiat consequatur. Fuga commodi modi eum maiores iusto, soluta fugit sit explicabo odio recusandae cumque cum vel quasi quae sint in voluptates numquam, sapiente autem! Quod id eius voluptatem illum.</p>    
        </li>
        */
}
