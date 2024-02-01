const foodItem = document.querySelector('.food');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const url = './menu.json';
let isFoodSelected = false;

const fetchMenu = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
const foodItemUI = (item) => {
    const div = document.createElement('div');
    div.classList.add('food-item');
    const imgUrl = document.createElement('img')
    imgUrl.src = item.imgUrl;
    imgUrl.alt = item.name;
    div.appendChild(imgUrl);

    const h3 = document.createElement('h3');
    h3.textContent = item.name;
    div.appendChild(h3);
    const p = document.createElement('p');
    p.textContent = `${item.description}`;
    div.appendChild(p);
    const price = document.createElement('span');
    price.classList.add('price');
    price.textContent = `Price: ${item.price}`;
    div.appendChild(price);

    return div
}

function selectFood() {
    isFoodSelected = true;
    console.log('selectFood');
    
}

function displayBreakfast() {
    if(isFoodSelected) {
        foodItem.innerHTML = '';
        isFoodSelected = false;
    }else{
    fetchMenu(url).then(data => {
        isFoodSelected = true;
        const breakfast = data.menu.breakfast;
        breakfast.forEach(item => {
            const menuItem = foodItemUI(item);
            foodItem.appendChild(menuItem)
        });
       
    })
}
};

function displayLunch() {
    if(isFoodSelected) {
        foodItem.innerHTML = '';
        isFoodSelected = false;
    }else{
        fetchMenu(url).then(data => {
        isFoodSelected = true;
        const lunch = data.menu.lunch;
        lunch.forEach(item => {
            const menuItem = foodItemUI(item);
            foodItem.appendChild(menuItem)
        });
    })
}
}

function displayDinner() {
    if(isFoodSelected) {
        foodItem.innerHTML = '';
        isFoodSelected = false;
    }else{
    fetchMenu(url).then(data => {
        isFoodSelected = true;
        const dinner = data.menu.dinner;
        dinner.forEach(item => {
            const menuItem = foodItemUI(item);
            foodItem.appendChild(menuItem)
        });
    })
}
}

btn1.addEventListener('click', displayBreakfast)
btn2.addEventListener('click', displayLunch)
btn3.addEventListener('click', displayDinner)



