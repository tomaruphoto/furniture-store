const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const item = items.find(i => i.id === id);
const detailDesc = document.querySelector(".detail-description")
const detailImg = document.querySelector(".detail-img");
const detailName = document.querySelector(".detail-name");
const detailPrice = document.querySelector(".detail-price");
const detailSize = document.querySelector(".detail-size");
const detailMaterial = document.querySelector(".detail-material");

detailImg.src = item.img;
detailImg.alt = item.name;
detailName.textContent = item.name;
detailDesc.textContent = item.description;
detailSize.textContent = item.size;
detailMaterial.textContent = item.material;
detailPrice.textContent = "¥" + item.price.toLocaleString();