const container = document.querySelector('.container');

// JSON
// fetch('./data/products.json')
//   .then((res) => res.json())
//   .then((data) => {
//     for (product of data.products) {
//       const card = document.createElement('div');
//       card.classList.add('card');
//       card.innerHTML = `
//             <h2 class="card-name">${product.name}</h2>
//             <p class="card-desc">${product.desc}</p>
//             <button class="card-price">${product.price}</button>
//         `;
//       container.appendChild(card);
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// API

const list = document.querySelector('.list');
const ApiUrl = 'https://jsonplaceholder.typicode.com/photos/';

fetch(ApiUrl)
  .then((res) => res.json())
  .then((data) => {
    for (item of data) {
      console.log(item);
      const listItem = document.createElement('img');
      listItem.src = item.url;
      list.appendChild(listItem);
    }
  })
  .catch((error) => {
    console.log(error);
  });
