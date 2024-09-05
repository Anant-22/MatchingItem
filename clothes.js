const products = [
    { name: 'Brown Jacket', price: '500rs' },
    { name: 'Jeans', price: '500rs' },
    { name: 'Black Tshirt', price: '500rs' },
    { name: 'Red Tshirt', price: '500rs' },
    { name: 'Sneakers', price: '500rs' },
    { name: 'Black Jacket', price: '500rs' },
];


function levenshteinDistance(a, b) {
    const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            matrix[i][j] = Math.min(
                matrix[i - 1][j - 1] + (b[i - 1] === a[j - 1] ? 0 : 1),
                matrix[i][j - 1] + 1,
                matrix[i - 1][j] + 1
            );
        }
    }
    return matrix[b.length][a.length];
}


function fuzzyMatch(item, searchTerm, threshold = 0.6) {
    const distance = levenshteinDistance(item.toLowerCase(), searchTerm.toLowerCase());
    const similarity = 1 - (distance / Math.max(item.length, searchTerm.length));
    return similarity >= threshold;
}


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


    resultsContainer.innerHTML = '';


    if (query.length > 3) {

        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

        if (filteredProducts.length > 0) {

            filteredProducts.forEach(product => {
                const div = document.createElement('div');
                div.className = 'search-item';
                div.innerHTML = `<span class="product-name">${product.name}</span><br><span class="product-price">${product.price}</span>`;
                div.addEventListener('click', () => handleSuggestionClick(product.name));  // Add click event

                resultsContainer.appendChild(div);
            });
        } else {

            const suggestedProducts = products.filter(product => fuzzyMatch(product.name, query));

            if (suggestedProducts.length > 0) {

                const suggestionDiv = document.createElement('div');
                suggestionDiv.className = 'suggestion-title';
                suggestionDiv.textContent = 'Did you mean:';
                resultsContainer.appendChild(suggestionDiv);

                suggestedProducts.forEach(product => {
                    const div = document.createElement('div');
                    div.className = 'search-item';
                    div.innerHTML = `<span class="product-name">${product.name}</span><br><span class="product-price">${product.price}</span>`;
                    div.addEventListener('click', () => handleSuggestionClick(product.name));  // Add click event

                    resultsContainer.appendChild(div);
                });
            } else {

                const noResultsDiv = document.createElement('div');
                noResultsDiv.className = 'no-results';
                noResultsDiv.textContent = '';
                resultsContainer.appendChild(noResultsDiv);
            }
        }

        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.style.display = 'none';
    }

    filterAndDisplayCards(query);
}
function handleSuggestionClick(suggestedName) {
    const searchBar = document.getElementById('search-bar');
    searchBar.value = suggestedName;
    searchItems();
}
