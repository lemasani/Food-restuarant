
const foodItem = document.querySelector('.food');

const foodId = 52772;

const url = './menu.json';
console.log('ths url', url);

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
    p.textContent = `Description: ${item.description}`;
    div.appendChild(p);
    const price = document.createElement('span');
    price.classList.add('price');
    price.textContent = `Price: ${item.price}`;
    div.appendChild(price);

    return div
}

fetchMenu(url).then(data => {
    const breakfast = data.menu.breakfast;
    const lunch = data.menu.lunch;
    const dinner = data.menu.dinner;

    const menu = [...breakfast, ...lunch, ...dinner];

    menu.forEach(item => {
        const menuItem = foodItemUI(item);
        foodItem.appendChild(menuItem);
    });
});



