// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function (e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.navbar')) {
            if (mobileMenu) mobileMenu.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking a nav link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) mobileMenu.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
        });
    });
});

// Product data (simulating a database)
const products = {
    "kc1": {
        name: "Heat-Resistant 1.5L LDQ Glass Simmer Pot",
        price: 49.99,
        description: "Heat-Resistant 1.5L LDQ Glass Simmer Pot - Dual Yellow Handle, Stovetop & Microwave Safe - Durable, Non-Toxic, and Easy to Clean Kitchen Essential",
        specifications: [
            "Material: Premium Grade Glass",
            "Finish: Hand-polished",
            "Origin: Handcrafted in China",
            "Warranty: 2 Years"
        ],
        careInstructions: [
            "Clean with soft, dry cloth",
            "Avoid direct sunlight",
            "Regular maintenance recommended"
        ],
        images: [
            "../assets/e0e403ff-5370-4e1d-9f8a-ced97e594f9c.webp",
        ],
        
    },
    "kc2": {
        name: "6pcs, Detachable Pot Set",
        price: 69.99,
        description: "26/16/6pcs, Detachable Pot Set, Pot And Pan Set Non-stick Pot Set 26pcs, Cookware Set Removable Handle, Induction Kitchen Cooking Set Removable Handle, RV Camping Stackable Pot Pan, Oven- safe, PFOA- free, Beige/Black",
        specifications: [
            "Material: Ceramic",
            "Brand : OLIXIS",
            "Origin : Zhejiang,China",
            "Strap Width: 22mm"
        ],
        careInstructions: [
            "Avoid prolonged exposure to water",
            "Store in a dry environment away from direct sunlight",
        ],
        images: [
            "../assets/e599092b-8a53-4baa-9da3-d0729faf7403.webp",
        ],
        
    },
    "kc3": {
        name: "4pcs Double-ear Long Fish Plates",
        price: 39.99,
        description: "4pcs Double-ear Long Fish Plates, Nordic Style Creative Ceramic Dish Plate, Pasta Plate, Rectangular Plate, Baking Plate, Dinner Plate With Handles, For Home Kitchen Restaurant Hotel, Kitchen Supplies, Tableware Accessories, 12 Inches",
        specifications: [
            "Material: Ceramic",
            "Shape: Square",
            "Weight: 28g (Ultra-lightweight)",
            
        ],
        careInstructions: [
            "Clean with the provided microfiber cloth only",
            "Store in protective case when not in use",
        ],
        images: [
            "../assets/4eeacdf8-3dc8-4c53-8745-f279e761ceed.webp",
        ],
        
    },
    "kc4": {
        name: "6pcs, Cerkik Ceramic Soup Bowls Set",
        price: 49.99,
        description: "6pcs, Cerkik Ceramic Soup Bowls Set, 24oz, Porcelain Deep Cereal Bowl, 6in, Large Kitchen Dinner Bowl for Eating Salad, Pasta, Dessert, Noodle, Rice, Oatmeal, Microwave Dishwasher Oven Safe, Valentine's Day, Wedding, Blue And White/Assorted Colors",
        specifications: [
            "Material: Ceramic",
            "Shape: Round",
            "Weight: 28g (Ultra-lightweight)",
        ],
        careInstructions: [
            "Clean with the provided microfiber cloth only",
            "Store in protective case when not in use",
        ],
        images: [
            "../assets/63194c1f-47e1-4668-8b57-42b5806f984d.webp",
        ],
        
    },
    "kc5": {
        name: "1pc Floral Lace Princess Apron",
        price: 20,
        description: "1pc Floral Lace Princess Apron - Hand Wipe Pocket - Suitable for Kitchen, Living Room, Bathroom Cleaning.",
        specifications: [
            "Holidays: Halloween",
            "Material: Polyester",
            "Pattern: Solid color",
            "Filling Material: 100% Polyester",
            "Lining Material: 100% Polyester"
        ],
        careInstructions: [
            " Machine Wash on Gentle Cycle",
            "Avoid Harsh Detergents & Bleach",
            "Have serviced by a specialist in vintage movements",
            " Iron on Low (If Needed)"
        ],
        images: [
            "../assets/425c281c-b6b9-428f-a6a4-03f1cb4f6860.webp"
        ],
       
    },
    "kc6": {
        name: "Kuisine 15pcs Chef Knife Set",
        price: 40,
        description: "Kuisine 15pcs Chef Knife Set with Built-In Sharpener, Stainless Steel Blades & Wooden Handles - Elegant Ivory-Acacia Block Display for Kitchen Counter, KUISINE.",
        specifications: [
            "Material: High-carbon stainless steel blades for durability",
            "Blade Lengths: Includes knives ranging from 3.5-inch paring knives to 8-inch chef knives for various tasks.",
            "Handle Design: Ergonomic",
            "Edge Retention: Precision-forged blades with a razor-sharp edge for long-lasting performance and easy maintenance.",
            
        ],
        careInstructions: [
            "Hand Wash Only – Avoid the dishwasher; wash knives with warm, soapy water and dry immediately to prevent rust.",
            "Store Properly – Use a knife block, magnetic strip, or protective sheaths to keep blades sharp and safe.",
            "Regular Sharpening – Hone the blade with a honing rod after each use and sharpen it with a whetstone when needed.",
            "Avoid Hard Surfaces – Use wooden or plastic cutting boards instead of glass, stone, or metal to protect the blade's edge."
        ],
        images: [
            "../assets/98308747-f87a-42d0-b772-f896f7beb477.webp"
        ],
        
    },
    "kc7": {
        name: "6L Large Capacity Electric Air Fryer Oven",
        price: 90,
        description: "6L Large Capacity Electric Air Fryer Oven with Smart Cooking Programs, Multifunctional Touch Control for Home Kitchen, 110V-130V.",
        specifications: [
            "Capacity: Available in sizes ranging from 3.5L to 10L, ideal for small to large families.",
            "Temperature Range: Adjustable from 80°C to 200°C (176°F to 400°F) for versatile cooking options.",
            "Cooking Functions: Multi-function settings including air fry, bake, roast, grill, and dehydrate.",
            "Power & Timer: High-powered (1200W–1800W) with an automatic shut-off timer for safety and convenience.",
            
        ],
        careInstructions: [
            "Unplug Before Cleaning – Always turn off and unplug the air fryer before cleaning to ensure safety.",
            " Hand Wash Removable Parts – Use warm, soapy water to clean the basket, tray, and accessories; avoid abrasive scrubbers.",
            "Wipe the Interior & Exterior – Use a damp cloth with mild detergent to clean the inside and outside; avoid water near electrical components.",
            "Prevent Grease Buildup – Regularly remove and clean crumbs or oil residue to maintain performance and prevent smoke."
        ],
        images: [
            "../assets/99ef514f-485e-41b1-b83e-92549aab40d0.webp"
        ],
       
    },
    "kc8": {
        name: "11-Inch Large Cast Iron Deep Fryer Pot",
        price: 49.99,
        description: "11-Inch Large Cast Iron Deep Fryer Pot with Thermometer and Lid, Oil Drain Filter, Easy Clean, Quick Heat, Compatible with Gas and Induction Stove, Kitchen Gadget, Home Cooking Accessory.",
        specifications: [
            "Material: Made of high-quality stainless steel or cast iron for durability and even heat distribution.",
            "Capacity: Available in sizes ranging from 2L to 6L, suitable for small to large frying needs.",
            "Temperature Control: Comes with a built-in thermometer to monitor oil temperature for precise frying.",
            "Dial: Original with Patina",
            "Design Features: Includes a removable oil filter, a lid to prevent splatters, and a cool-touch handle for safety."
        ],
        careInstructions: [
            "Cool Before Cleaning – Always allow the pot to cool completely before handling or washing.",
            "Hand Wash with Mild Soap – Use warm water and a non-abrasive sponge to clean; avoid harsh detergents that may damage the material.",
            " Remove Oil Properly – Strain and store used oil if reusing, or dispose of it safely (never pour it down the drain).",
        ],
        images: [
            "../assets/f8eb482003ed80b55fc1aff28fc6f96c_yED9EWHvz3A1Y.webp"
        ],
        
    },
    "kc9": {
        name: "Tesslux 5.3 Quart Stainless Steel Electric Deep Fryer",
        price: 90,
        description: "Tesslux 5.3 Quart Stainless Steel Electric Deep Fryer with Viewing Window & Odorless Filter, Adjustable Temperature - Perfect for Home Use, Includes Mesh Basket for Crispy Fries, Deep Fryer Basket.",
        specifications: [
            "Capacity: Available in sizes from 5.3, ideal for home and commercial use.",
            "Power & Heating: High-powered (1200W–2000W) with rapid heating for efficient frying.",
            "Temperature Control: Adjustable thermostat (up to 200°C/392°F) for precise cooking",
            
        ],
        careInstructions: [
            " Unplug Before Cleaning – Always turn off and unplug the fryer before cleaning to ensure safety.",
            "Dispose of Oil Properly – Let the oil cool completely, then strain and store or dispose of it safely.",
            
        ],
        images: [
            "../assets/1e21afc1-48b9-4b0d-bff8-0fef8695f27b.webp"
        ],
       
    }
};

// Update the product click handling
document.addEventListener('DOMContentLoaded', () => {
    // Handle product click events
    document.querySelectorAll('.product').forEach(product => {
        const viewButton = product.querySelector('.view-product');
        if (viewButton) {
            viewButton.addEventListener('click', () => {
                const productId = product.dataset.id;
                window.location.href = `pages/product-detail.html?id=${productId}`;
            });
        }
    });

    // Load checkout page with product details
    if (window.location.pathname.includes('checkout.html')) {
        const checkoutProduct = JSON.parse(sessionStorage.getItem('checkoutProduct'));
        const checkoutProductDiv = document.getElementById('checkout-product');

        if (checkoutProduct && products[checkoutProduct.id]) {
            // Show actual product details without color and size
            checkoutProductDiv.innerHTML = `
                <div class="product-summary">
                    <div class="product-summary-header">
                        <img src="${products[checkoutProduct.id].images[0]}" alt="${checkoutProduct.name}">
                        <div class="product-summary-details">
                            <h3>${checkoutProduct.name}</h3>
                        </div>
                    </div>
                    <div class="price-details">
                        <div class="price-row">
                            <span>Price:</span>
                            <span>$${checkoutProduct.price.toFixed(2)}</span>
                        </div>
                        <div class="price-row">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div class="price-row discount">
                            <span>Discount:</span>
                            <span>-$${(checkoutProduct.price * 0.02).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            `;

            // Calculate total with discount
            const total = checkoutProduct.price * 0.9; // 10% discount
            document.getElementById('total-amount').textContent = `$${total.toFixed(2)}`;
        } else {
            // Show empty cart content
            checkoutProductDiv.innerHTML = `
                <div class="product-summary empty-cart">
                    <div class="product-summary-header">
                        <div class="empty-cart-icon">
                            <i class="fas fa-shopping-bag"></i>
                        </div>
                        <div class="product-summary-details">
                            <h3>Your cart is empty</h3>
                            <div class="product-options">
                                <span class="option">
                                    <i class="fas fa-arrow-left"></i>
                                    <a href="../index.html#categories">Continue Shopping</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="price-details">
                        <div class="price-row">
                            <span>Subtotal:</span>
                            <span>$0.00</span>
                        </div>
                        <div class="price-row">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                    </div>
                </div>
            `;

            document.getElementById('total-amount').textContent = '$0.00';
        }

        // Handle checkout form submission
        const checkoutForm = document.getElementById('checkout-form');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your purchase!');
                window.location.href = 'thank-you.html';
            });
        }

        // Payment method toggle
        const cardPayment = document.getElementById('card-payment');
        const codPayment = document.getElementById('cod-payment');
        const cardDetails = document.getElementById('card-details');

        function toggleCardDetails() {
            if (cardPayment.checked) {
                cardDetails.classList.remove('hidden');
                cardDetails.querySelectorAll('input').forEach(input => input.required = true);
            } else {
                cardDetails.classList.add('hidden');
                cardDetails.querySelectorAll('input').forEach(input => input.required = false);
            }
        }

        cardPayment.addEventListener('change', toggleCardDetails);
        codPayment.addEventListener('change', toggleCardDetails);

        // Initial state
        toggleCardDetails();
    }
});

// Load product details if on product detail page
if (window.location.pathname.includes('product-detail.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = products[productId];

    if (product) {
        // Set main product image
        const mainImage = document.getElementById('main-product-image');
        if (mainImage) {
            mainImage.src = product.images[0];
            mainImage.alt = product.name;
        }

        // Load thumbnails
        const thumbnailList = document.getElementById('thumbnail-list');
        if (thumbnailList) {
            thumbnailList.innerHTML = ''; // Clear existing thumbnails
            if (product.images && product.images.length > 0) {
                product.images.forEach((img, index) => {
                    const thumbnail = document.createElement('div');
                    thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
                    const thumbnailImg = document.createElement('img');
                    thumbnailImg.src = img;
                    thumbnailImg.alt = `${product.name} view ${index + 1}`;
                    thumbnail.appendChild(thumbnailImg);

                    thumbnail.addEventListener('click', () => {
                        if (mainImage) {
                            mainImage.src = img;
                            mainImage.alt = `${product.name} view ${index + 1}`;
                            document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
                            thumbnail.classList.add('active');
                        }
                    });
                    thumbnailList.appendChild(thumbnail);
                });
            }
        }

        // Set product details
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-name-title').textContent = product.name;
        document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
        document.getElementById('product-description').textContent = product.description;

        // Load color options
       

        // Remove validation and always enable buy button
        const buyButton = document.getElementById('buy-now');
    buyButton.disabled = false;
    buyButton.addEventListener('click', () => {
        // Store product details for checkout without color and size
        sessionStorage.setItem('checkoutProduct', JSON.stringify({
            id: productId,
            name: product.name,
            price: product.price
        }));

        window.location.href = 'checkout.html';
    });

        // Load product details
        loadProductDetails(productId);
    }

    // Handle tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;

            // Update active tab button
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update active tab content
            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Load thank you page with order details
if (window.location.pathname.includes('thank-you.html')) {
    const orderNumber = sessionStorage.getItem('orderNumber');
    const deliveryDate = sessionStorage.getItem('deliveryDate');

    if (orderNumber && deliveryDate) {
        document.getElementById('order-number').textContent = orderNumber;
        document.getElementById('delivery-date').textContent = deliveryDate;

        // Clear session storage
        sessionStorage.clear();
    }
}

// FAQ Toggle
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

function loadProductDetails(productId) {
    const product = products[productId];
    if (!product) return;

    // Update product name, price, and other basic details
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;

    // Update description tab
    const descriptionElement = document.getElementById('tab-description');
    if (descriptionElement) {
        descriptionElement.textContent = product.description;
    }

    // Update specifications tab
    const specificationsElement = document.getElementById('tab-specifications');
    if (specificationsElement && product.specifications) {
        specificationsElement.innerHTML = ''; // Clear existing content
        product.specifications.forEach(spec => {
            const li = document.createElement('li');
            li.textContent = spec;
            specificationsElement.appendChild(li);
        });
    }

    // Update care instructions tab
    const careElement = document.getElementById('tab-care');
    if (careElement && product.careInstructions) {
        careElement.innerHTML = ''; // Clear existing content
        product.careInstructions.forEach(instruction => {
            const li = document.createElement('li');
            li.textContent = instruction;
            careElement.appendChild(li);
        });
    }

    // ... rest of your existing product loading code ...
} 