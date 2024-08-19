document.getElementById("card-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // traer valores
    const title = document.getElementById("card-title").value;
    const descripcion = document.getElementById("card-description").value;
    const price = document.getElementById("card-price").value;
    const imageUrl = document.getElementById("card-img").value || "https://picsum.photos/200";
    const bgColor = document.getElementById("card-bg-color").value;
    const borderColor = document.getElementById("card-border-color").value;

    //Mostrar datos por consola
    console.log({
        title: title,
        descripcion: descripcion,
        price: price,
        imageUrl: imageUrl,
        bgColor: bgColor,
        borderColor: borderColor,
    })

    //Crear la carta
    const cardContainer = document.getElementById("new-cards-content");
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.backgroundColor = bgColor;
    newCard.style.border = "4px, solid";
    newCard.style.borderColor = borderColor;
    newCard.style.borderRadius = "40px";

    //Maquetar la carta
    newCard.innerHTML = `
    <div class="new-cards">
        <img src="${imageUrl}" alt="Imagen de producto">
        <p>${title}</p>
        <span><strong>${price}</strong></span>
        <button>Comprar</button>
    </div>`;

    //añadir carta
    cardContainer.appendChild(newCard);

    //limpiar form
    document.getElementById("card-form").reset();
})