const wishlistKey = "wishlist";
const wishlist = JSON.parse(localStorage.getItem(wishlistKey)) || []; // Get wishlist from local storage

function addToWishlist(productId) {
    // Add product to wishlist
    wishlist.push(productId);
    // Update wishlist in local storage
    localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
    alert('Product added to wishlist!');
    displayWishlist(); // Update the wishlist section
}

// Example wishlist display function
function displayWishlist() {
    const wishlistItems = document.getElementById('wishlist-items');
    wishlistItems.innerHTML = ''; // Clear current items

    wishlist.forEach(itemId => {
        // Fetch product details based on itemId 
        const product = {
            name: `Product ${itemId}`, 
            price: itemId * 50, 
            image: `product-${itemId}.jpg` // Assumes image names like product-1.jpg, etc.
        };

        wishlistItems.innerHTML += `
            <tr>
                <td><img src="${product.image}" alt="${product.name}" style="width: 50px;"> ${product.name}</td>
                <td>${product.price} INR</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeFromWishlist(${itemId})"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `;
    });
}

function removeFromWishlist(productId) {
    // Remove product from wishlist
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
    }
    // Update wishlist in local storage
    localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
    displayWishlist(); // Update the wishlist section
}
