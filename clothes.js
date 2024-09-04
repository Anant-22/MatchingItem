// // Sample product data javascript 1
// const products = [
//     { name: 'brown Jecket', price: '500rs' },
//     { name: 'Blue Jeans', price: '500rs' },
//     { name: 'black Tshirt', price: '500rs' },
//     { name: 'Red Tshirt', price: '500rs' },
//     { name: 'Sneakers', price: '500rs' },
//     { name: 'Black Jecket', price: '500rs' },
//
// ];
//
// function searchItems() {
//     const query = document.getElementById('search-bar').value.toLowerCase();
//     const resultsContainer = document.getElementById('search-results');
//
//     // Clear previous results
//     resultsContainer.innerHTML = '';
//
//     // Only search if query is longer than 3 characters
//     if (query.length > 3) {
//         const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
//
//         if (filteredProducts.length > 0) {
//             filteredProducts.forEach(product => {
//                 const div = document.createElement('div');
//                 div.className = 'search-item';
//                 div.innerHTML = `<span class="product-name">${product.name}</span><br><span class="product-price">${product.price}</span>`;
//                 resultsContainer.appendChild(div);
//             });
//         } else {
//             const noResultsDiv = document.createElement('div');
//             noResultsDiv.className = 'no-results';
//             noResultsDiv.textContent = 'No items found.';
//             resultsContainer.appendChild(noResultsDiv);
//         }
//
//         resultsContainer.style.display = 'block';
//     } else {
//         resultsContainer.style.display = 'none';
//     }
// }

// // Sample product data javascript 2
// const products = [
//     { name: 'Brown Jacket', price: '500rs' },
//     { name: 'Blue Jeans', price: '500rs' },
//     { name: 'Black Tshirt', price: '500rs' },
//     { name: 'Red Tshirt', price: '500rs' },
//     { name: 'Sneakers', price: '500rs' },
//     { name: 'Black Jacket', price: '500rs' },
// ];
//
// function searchItems() {
//     const query = document.getElementById('search-bar').value.toLowerCase();
//     const resultsContainer = document.getElementById('search-results');
//     const bestMatchContainer = document.getElementById('best-match');
//
//     // Clear previous results
//     resultsContainer.innerHTML = '';
//     bestMatchContainer.innerHTML = '';
//
//     // Only search if query is longer than 3 characters
//     if (query.length > 3) {
//         const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
//
//         if (filteredProducts.length > 0) {
//             // Display the best match
//             const bestMatch = filteredProducts[0];
//             bestMatchContainer.innerHTML = `<div class="best-match-item"><strong>Best Match:</strong><br><span class="product-name">${bestMatch.name}</span><br><span class="product-price">${bestMatch.price}</span></div>`;
//
//             // Display all matching items
//             filteredProducts.forEach(product => {
//                 const div = document.createElement('div');
//                 div.className = 'search-item';
//                 div.innerHTML = `<span class="product-name">${product.name}</span><br><span class="product-price">${product.price}</span>`;
//                 resultsContainer.appendChild(div);
//             });
//         } else {
//             const noResultsDiv = document.createElement('div');
//             noResultsDiv.className = 'no-results';
//             noResultsDiv.textContent = 'No items found.';
//             resultsContainer.appendChild(noResultsDiv);
//         }
//
//         resultsContainer.style.display = 'block';
//         bestMatchContainer.style.display = 'block';
//     } else {
//         resultsContainer.style.display = 'none';
//         bestMatchContainer.style.display = 'none';
//     }
// }

// // Sample product data javascript 3
// const products = [
//     { name: 'brown Jecket', price: '500rs' },
//     { name: 'Blue Jeans', price: '500rs' },
//     { name: 'black Tshirt', price: '500rs' },
//     { name: 'Red Tshirt', price: '500rs' },
//     { name: 'Sneakers', price: '500rs' },
//     { name: 'Black Jecket', price: '500rs' },
// ];
//
// function searchItems() {
//     const query = document.getElementById('search-bar').value.toLowerCase();
//     const resultsContainer = document.getElementById('search-results');
//
//     // Clear previous results
//     resultsContainer.innerHTML = '';
//
//     // Only search if query is longer than 3 characters
//     if (query.length > 3) {
//         const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
//
//         if (filteredProducts.length > 0) {
//             filteredProducts.forEach(product => {
//                 const div = document.createElement('div');
//                 div.className = 'search-item';
//                 div.innerHTML = `<span class="product-name">${product.name}</span><br><span class="product-price">${product.price}</span>`;
//                 resultsContainer.appendChild(div);
//             });
//         } else {
//             const noResultsDiv = document.createElement('div');
//             noResultsDiv.className = 'no-results';
//             noResultsDiv.textContent = 'No items found.';
//             resultsContainer.appendChild(noResultsDiv);
//         }
//
//         resultsContainer.style.display = 'block';
//     } else {
//         resultsContainer.style.display = 'none';
//     }
//
//     // Call the new function to filter and display cards
//     filterAndDisplayCards(query);
// }
//
// function filterAndDisplayCards(query) {
//     const productCards = document.querySelectorAll('.product-card');
//
//     productCards.forEach(card => {
//         const productName = card.querySelector('.product-name').textContent.toLowerCase();
//         if (productName.includes(query) && query.length > 3) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// }

// Sample product data sampe 4
const products = [
    { name: 'Brown Jecket', price: '500rs' },
    { name: 'Blue Jeans', price: '500rs' },
    { name: 'black Tshirt', price: '500rs' },
    { name: 'Red Tshirt', price: '500rs' },
    { name: 'Sneakers', price: '500rs' },
    { name: 'Black Jecket', price: '500rs' },
];
function filterAndDisplayCards(query) {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('.product-name').textContent.toLowerCase();
        if (productName.includes(query) && query.length > 3) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function searchItems() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Only search if query is longer than 3 characters
    if (query.length > 3) {
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const div = document.createElement('div');
                div.className = 'search-item';
                div.innerHTML = `<span class="product-name">${product.name}</span><br><span class="product-price">${product.price}</span>`;
                resultsContainer.appendChild(div);
            });
        } else {
            const noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'no-results';
            noResultsDiv.textContent = 'No items found.';
            resultsContainer.appendChild(noResultsDiv);
        }

        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.style.display = 'none';
    }

    // Call the new function to filter and display cards
    filterAndDisplayCards(query);
}
