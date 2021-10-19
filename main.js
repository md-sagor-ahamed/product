//Selector
const filterInput = document.querySelector("#filter");
const productListUl = document.querySelector(".collection");
const nameInput = document.querySelector(".product-name");
const priceInput = document.querySelector(".product-price");
const addBtn = document.querySelector(".add-product");
const deleteBtn = document.querySelector(".delete-product");
const alertFunc = document.querySelector(".col")



// data/ state

const productData = []

function getData(productList){
    if(productData.length > 0){
        let li = "";
        productList.forEach(product => {
            li = document.createElement("li");
            li.className = 'list-group-item collection-item';
            li.id = `product-${product.id}`;
            li.innerHTML = `<strong>${product.name}</strong>
            <span class="price">$${product.price}</span>
            <i class="fa fa-trash float-end"></i>`
            productListUl.appendChild(li);
            if(document.querySelector(".alertFunc")){
                document.querySelector(".alertFunc").remove();
            }
        });
    }else{
        alertFunc.insertAdjacentHTML("beforebegin",`<p class="alertFunc">Your list is empty</p>`)
    }
}
getData(productData);

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const price = priceInput.value;
    let id;
    if(productData.length === 0){
        id = 0;
    }else{
        id = productData[productData.length - 1].id + 1;
    }
    if(name === '' || price === '' || !(!isNaN(parseFloat(price)) && isFinite(price))){
        alert('please fil up necessary information');
    }else{
        productData.push({
            id,
            name,
            price,
        });
        productListUl.innerHTML = '';
        getData(productData);
        nameInput.value = '';
        priceInput.value = '';
    }
})
