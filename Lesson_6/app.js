let products = {
   data: [
      {
         name: 'MATRIX 1999 DECK',
         price: '780.000đ - 1.470.000đ',
         image: 'images/matrix-1999-1.jpg',
      },

      {
         name: 'RAEDA DECK',
         price: '780.000đ - 1.470.000đ',
         image: 'images/Raeda-Deck.jpg',
      },

      {
         name: 'MUSTY DECK',
         price: '780.000đ - 1.470.000đ',
         image: 'images/Musty-Deck.jpg',
      },

      {
         name: 'TRISTIQUE DECK',
         price: '780.000đ - 1.470.000đ',
         image: 'images/Tristique-deck.jpg',
      },

      {
         name: 'FIELD TRIP DECK',
         price: '780.000đ - 1.470.000đ',
         image: 'images/Fied-Trip-deck.jpg',
      },

      {
         name: 'TARO RAINBOW LOGO DECK',
         price: '780.000đ - 1.670.000đ',
         image: 'images/web-5.jpg',
      },

      {
         name: 'NEON RAINBOW LOGO DECK',
         price: '780.000đ - 1.670.000đ',
         image: 'images/web-1.jpg',
      },

      {
         name: 'ORANAGE RAINBOW LOGO DECK',
         price: '780.000đ - 1.670.000đ',
         image: 'images/web-2.jpg',
      },

      {
         name: 'BLUE RAINBOW LOGO DECK',
         price: '780.000đ - 1.670.000đ',
         image: 'images/web-3.jpg',
      },

      {
         name: 'WHITE RAINBOW LOGO DECK',
         price: '780.000đ - 1.670.000đ',
         image: 'images/web-4.jpg',
      },

      {
         name: 'CUTIS MODEL DECK',
         price: '780.000đ - 1.670.000đ',
         image: 'images/cutis.jpg',
      },

      {
         name: 'CAM VU MODEL DECK',
         price: '780.000đ - 1.670.000đ',
         image: 'images/cam-vu.jpg',
      },

      {
         name: 'SON NGUYEN MODEL DECK',
         price: '780.000đ - 1.670.000đ',
         image: 'images/son-nguyen.jpg',
      },
   ],
};

products.data.forEach((item) => {
   const card = document.createElement('div');
   card.classList.add('card');

   card.innerHTML = `
        <div class="card">
            <div class="image-container">
                <img src="${item.image}">
            </div>
            <div class="container">
                <h5 class="product-name">${item.name}</h5>
                <h6><b>Price:</b> ${item.price}</h6>
                <button>Thêm vào giỏ hàng</button>
            </div>
        </div>
    `;
   document.getElementById('products').appendChild(card);
});

function handleSelector() {
   const selector = document.querySelector('.selector');
   selector.addEventListener('click', function (e) {
      console.log(e.target.tagName)
      if (e.target.tagName === 'A') {
         // Remove 'highlight' class from all tabs
         const tabs = document.querySelectorAll('.selector a');
         tabs.forEach(function (tab) {
            tab.classList.remove('highlight');
         });
         // Add 'highlight' class to the clicked tab
         e.target.classList.add('highlight');
      }
   });
}

handleSelector()
