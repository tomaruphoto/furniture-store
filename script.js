

const container = document.querySelector(".item-container");
function createItemElement(item) {
    const div = document.createElement("a");
    const thumb = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("h3");
    const price = document.createElement("p");
    const tax = document.createElement("span");

    img.src = item.img;
    img.alt = item.name;
    div.className = "item";
    div.href = "detail.html?id=" + item.id;
    thumb.className = "thumb";
    name.textContent = item.name;
    price.textContent = "¥" + item.price.toLocaleString();
    tax.textContent = "+tax";

    price.appendChild(tax);
    thumb.appendChild(img);
    div.appendChild(thumb);
    div.appendChild(name);
    div.appendChild(price);
    return div;
}

items.slice(0, 8).forEach(item => {
    const showItem = createItemElement(item);
    container.appendChild(showItem);
});

const viewMoreButton = document.querySelector(".view-more");
viewMoreButton.addEventListener("click", () => {
    items.slice(8, 12).forEach(item => {
    const showItem = createItemElement(item);
    container.appendChild(showItem);
  });
    viewMoreButton.style.display = 'none';
});

const pageLinks = document.querySelectorAll(".page-link");

pageLinks.forEach(link => {
    link.addEventListener("click", () => {
    const page = link.dataset.page;
    container.innerHTML = "";

    let itemsToShow;
    if(page === "1") {
        itemsToShow = items.slice(0, 8);
        viewMoreButton.style.display = 'block';
    } else if(page === "2") {
        itemsToShow = items.slice(12, 16);
        viewMoreButton.style.display = 'none'; 
    }

    itemsToShow.forEach(item => {
    const showItem = createItemElement(item);
    container.appendChild(showItem);
    });
  });
});

