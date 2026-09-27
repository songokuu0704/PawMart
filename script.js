/* =========================================================
   PAWMART — MAIN JAVASCRIPT
   Smart Products. Happier Pets.
   ========================================================= */


/* =========================================================
   PRODUCT DATA
   ========================================================= */

const products = {

    "pawbowl": {
        name: "PawBowl Smart Feeder",
        category: "FEEDING",
        price: 2499,
        image: "images/pawbowl.jpg",
        rating: "4.8/5",
        petType: "Cats & Dogs",
        description: "A smart portion-controlled feeder designed to make everyday pet feeding more convenient.",
        features: [
            "Portion-controlled feeding",
            "Easy everyday operation",
            "Pet-friendly design"
        ]
    },

    "water-fountain": {
        name: "PawClean Water Fountain",
        category: "HYDRATION",
        price: 1999,
        image: "images/water-fountain.jpg",
        rating: "4.7/5",
        petType: "Cats & Dogs",
        description: "A continuous filtered-flow drinking system designed to provide convenient access to fresh water.",
        features: [
            "Continuous water flow",
            "Filtered-flow design",
            "Easy to use and maintain"
        ]
    },

    "motion-ball": {
        name: "PurrPlay Motion Ball",
        category: "TOYS",
        price: 899,
        image: "images/motion-ball.jpg",
        rating: "4.7/5",
        petType: "Cats",
        description: "An interactive motion toy designed to keep indoor cats active and engaged.",
        features: [
            "Interactive motion",
            "Indoor play design",
            "Encourages activity"
        ]
    },

    "puzzle-feeder": {
        name: "TreatMate Puzzle Feeder",
        category: "TOYS",
        price: 1099,
        image: "images/puzzle-feeder.jpg",
        rating: "4.8/5",
        petType: "Cats & Dogs",
        description: "A puzzle-style feeder that makes pets work and play while enjoying their favourite treats.",
        features: [
            "Interactive puzzle design",
            "Treat-based activity",
            "Encourages play"
        ]
    },

    "play-tunnel": {
        name: "PurrHide Play Tunnel",
        category: "TOYS",
        price: 1299,
        image: "images/play-tunnel.jpg",
        rating: "4.7/5",
        petType: "Cats",
        description: "A foldable interactive tunnel designed for indoor exploration and playful activity.",
        features: [
            "Foldable design",
            "Interactive play",
            "Indoor-friendly"
        ]
    },

    "grooming-brush": {
        name: "PawFresh Grooming Brush",
        category: "GROOMING",
        price: 799,
        image: "images/grooming-brush.jpg",
        rating: "4.9/5",
        petType: "Cats & Dogs",
        description: "An everyday grooming brush with an integrated fur-collection chamber.",
        features: [
            "Fur-collection chamber",
            "Easy grooming",
            "Comfort-focused design"
        ]
    },

    "nail-clipper": {
        name: "PawTrim Nail Clipper",
        category: "GROOMING",
        price: 499,
        image: "images/nail-clipper.jpg",
        rating: "4.6/5",
        petType: "Cats & Dogs",
        description: "A pet-focused nail-trimming tool designed for simple grooming routines.",
        features: [
            "Pet-focused design",
            "Easy handling",
            "Compact size"
        ]
    },

    "pet-shampoo": {
        name: "PawGlow Pet Shampoo",
        category: "GROOMING",
        price: 699,
        image: "images/pet-shampoo.jpg",
        rating: "4.7/5",
        petType: "Cats & Dogs",
        description: "A gentle everyday pet-care formula designed for routine grooming.",
        features: [
            "Everyday grooming",
            "Gentle formula concept",
            "Easy-to-use bottle"
        ]
    },

    "quick-dry-towel": {
        name: "PawDry Quick-Dry Towel",
        category: "GROOMING",
        price: 599,
        image: "images/quick-dry-towel.jpg",
        rating: "4.7/5",
        petType: "Cats & Dogs",
        description: "A high-absorption towel designed to make post-bath drying quicker and easier.",
        features: [
            "High-absorption material",
            "Quick-drying design",
            "Reusable"
        ]
    },

    "ear-kit": {
        name: "PawCare Ear Kit",
        category: "GROOMING",
        price: 649,
        image: "images/ear-kit.jpg",
        rating: "4.6/5",
        petType: "Cats & Dogs",
        description: "A dedicated basic ear-care kit designed for everyday pet grooming routines.",
        features: [
            "Basic ear-care tools",
            "Compact kit",
            "Easy storage"
        ]
    },

    "comfort-mat": {
        name: "CoolPaws Comfort Mat",
        category: "COMFORT",
        price: 1499,
        image: "images/comfort-mat.jpg",
        rating: "4.8/5",
        petType: "Cats & Dogs",
        description: "A reusable cooling surface designed to provide a comfortable place for pets to rest.",
        features: [
            "Reusable cooling surface",
            "Easy to clean",
            "Comfort-focused design"
        ]
    },

    "premium-bed": {
        name: "PawRest Premium Bed",
        category: "COMFORT",
        price: 2999,
        image: "images/premium-bed.jpg",
        rating: "4.9/5",
        petType: "Cats & Dogs",
        description: "A comfortable washable bed designed for everyday relaxation.",
        features: [
            "Washable design",
            "Premium comfort",
            "Everyday-use construction"
        ]
    },

    "smart-collar": {
        name: "PawTrack Smart Collar",
        category: "ACCESSORIES",
        price: 1799,
        image: "images/smart-collar.jpg",
        rating: "4.7/5",
        petType: "Dogs",
        description: "A smart collar concept designed for location and activity monitoring.",
        features: [
            "Location-monitoring concept",
            "Activity-monitoring concept",
            "Modern collar design"
        ]
    },

    "car-seat": {
        name: "PawShield Car Seat",
        category: "TRAVEL",
        price: 2499,
        image: "images/car-seat.jpg",
        rating: "4.8/5",
        petType: "Cats & Dogs",
        description: "A dedicated pet travel and safety seat designed for journeys by car.",
        features: [
            "Dedicated pet seat",
            "Travel-focused design",
            "Comfortable seating area"
        ]
    },

    "travel-bottle": {
        name: "PawEase Travel Bottle",
        category: "TRAVEL",
        price: 899,
        image: "images/travel-bottle.jpg",
        rating: "4.7/5",
        petType: "Cats & Dogs",
        description: "A portable water bottle designed to make giving pets water while travelling easier.",
        features: [
            "Portable design",
            "Travel-friendly",
            "Easy water dispensing"
        ]
    }

};


/* =========================================================
   PRODUCT PAGE VARIABLES
   ========================================================= */

const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("id");

let currentProduct = null;

let currentQuantity = 1;


/* =========================================================
   LOAD PRODUCT DETAILS
   ========================================================= */

function loadProduct() {

    if (!productId || !products[productId]) {
        return;
    }

    currentProduct = products[productId];

    const name =
        document.getElementById("product-name");

    const category =
        document.getElementById("product-category");

    const price =
        document.getElementById("product-price");

    const image =
        document.getElementById("product-image");

    const description =
        document.getElementById("product-description");

    const petType =
        document.getElementById("product-pet-type");

    const features =
        document.getElementById("product-features");


    if (!name) {
        return;
    }


    name.textContent =
        currentProduct.name;


    if (category) {

        category.textContent =
            currentProduct.category;

    }


    if (price) {

        price.textContent =
            "₹" +
            currentProduct.price.toLocaleString("en-IN");

    }


    if (image) {

        image.src =
            currentProduct.image;

        image.alt =
            currentProduct.name;

    }


    if (description) {

        description.textContent =
            currentProduct.description;

    }


    if (petType) {

        petType.textContent =
            currentProduct.petType;

    }


    if (features) {

        features.innerHTML = "";


        currentProduct.features.forEach(
            function(feature) {

                const li =
                    document.createElement("li");

                li.textContent =
                    feature;

                features.appendChild(li);

            }
        );

    }


    const rating =
        document.querySelector(".detail-rating");


    if (rating) {

        rating.innerHTML =
            "★★★★★ <span>" +
            currentProduct.rating +
            "</span>";

    }

}


/* =========================================================
   PRODUCT QUANTITY
   ========================================================= */

function changeQuantity(amount) {

    currentQuantity += amount;


    if (currentQuantity < 1) {

        currentQuantity = 1;

    }


    const quantityElement =
        document.getElementById("quantity");


    if (quantityElement) {

        quantityElement.textContent =
            currentQuantity;

    }

}


/* =========================================================
   ADD CURRENT PRODUCT TO CART
   ========================================================= */

function addCurrentProductToCart() {

    if (!currentProduct) {

        return;

    }


    let cart =
        JSON.parse(
            localStorage.getItem("pawmartCart")
        ) || [];


    const existingProduct =
        cart.find(function(item) {

            return item.id === productId;

        });


    if (existingProduct) {

        existingProduct.quantity +=
            currentQuantity;

    }

    else {

        cart.push({

            id: productId,

            name: currentProduct.name,

            price: currentProduct.price,

            image: currentProduct.image,

            quantity: currentQuantity

        });

    }


    localStorage.setItem(
        "pawmartCart",
        JSON.stringify(cart)
    );


    updateCartCount();


    alert(
        currentProduct.name +
        " added to cart!"
    );

}


/* =========================================================
   UPDATE CART COUNT
   ========================================================= */

function updateCartCount() {

    const cart =
        JSON.parse(
            localStorage.getItem("pawmartCart")
        ) || [];


    let totalItems = 0;


    cart.forEach(function(item) {

        totalItems +=
            item.quantity;

    });


    const cartCountElements =
        document.querySelectorAll("#cart-count");


    cartCountElements.forEach(
        function(element) {

            element.textContent =
                totalItems;

        }
    );

}


/* =========================================================
   BUY NOW
   ========================================================= */

function buyNow() {

    if (!currentProduct) {

        return;

    }


    addCurrentProductToCart();


    window.location.href =
        "cart.html";

}


/* =========================================================
   SHOP CATEGORY FILTER
   ========================================================= */

function filterProducts(category) {

    const productsOnPage =
        document.querySelectorAll(
            ".shop-product"
        );


    productsOnPage.forEach(
        function(product) {

            if (category === "all") {

                product.style.display =
                    "block";

            }

            else if (
                product.dataset.category ===
                category
            ) {

                product.style.display =
                    "block";

            }

            else {

                product.style.display =
                    "none";

            }

        }
    );

}


/* =========================================================
   INITIALIZE PAWMART
   ========================================================= */

loadProduct();

updateCartCount();