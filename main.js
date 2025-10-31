// CONFIG
const CONFIG = {
    CART_KEY: 'mixueCart',
    CURRENCY: 'VND',
    API_TIMEOUT: 5000
};

// PRODUCTS DATA
const products = [
    {
        name: "Kem Chocolate Sundae Mixue",
        price: "50,000",
        numericalPrice: 50000,
        image: "image/sp1.png",
        description: "Kem Chocolate Sundae Mixue là sự kết hợp hoàn hảo giữa kem vani mềm mịn và sốt chocolate đậm đà. Hương vị ngọt ngào, mát lạnh, thích hợp cho những tín đồ của chocolate.",
        shortDescription: "Sự kết hợp hoàn hảo giữa kem vani mềm mịn và sốt chocolate đậm đà.",
        category: "Kem",
        id: "K001",
    },
    {
        name: "Sữa Kem Lắc Dâu Tây Mixue",
        price: "50,000",
        numericalPrice: 50000,
        image: "image/sp2.jpg",
        description: "Sữa Kem Lắc Dâu Tây Mixue mang đến hương vị dâu tây tươi mát và sữa kem béo ngậy. Một thức uống giải khát tuyệt vời với vị chua ngọt cân bằng.",
        shortDescription: "Hương vị dâu tây tươi mát và sữa kem béo ngậy.",
        category: "Kem",
        id: "K002",
    },
    {
        name: "Super Sundae Trân Châu Đường Đen Mixue",
        price: "50,000",
        numericalPrice: 50000,
        image: "image/sp3.jpg",
        description: "Super Sundae Trân Châu Đường Đen Mixue là món tráng miệng độc đáo với kem tươi, trân châu dai giòn và sốt đường đen thơm lừng. Sự kết hợp các lớp vị tạo nên trải nghiệm thú vị.",
        shortDescription: "Món tráng miệng độc đáo với kem tươi, trân châu và sốt đường đen.",
        category: "Kem",
        id: "K003",
    },
    {
        name: "Hồng Trà Kem Mixue",
        price: "50,000",
        numericalPrice: 50000,
        image: "image/sp4.jpg",
        description: "Hồng Trà Kem Mixue là sự hòa quyện giữa vị chát nhẹ của hồng trà và lớp kem sữa béo ngậy, tạo nên một thức uống thanh mát và hấp dẫn.",
        shortDescription: "Sự hòa quyện giữa vị chát nhẹ của hồng trà và lớp kem sữa béo ngậy.",
        category: "Kem",
        id: "K004",
    },
    {
        name: "Super Sundae Socola Mixue",
        price: "50,000",
        numericalPrice: 50000,
        image: "image/sp5.jpg",
        description: "Super Sundae Socola Mixue là phiên bản sundae dành cho những ai yêu thích vị socola. Kem mềm mịn kết hợp với các topping và sốt socola phong phú.",
        shortDescription: "Phiên bản sundae dành cho những ai yêu thích vị socola.",
        category: "Kem",
        id: "K005",
    },
    {
        name: "Trà sữa Dương Chi Cam Lộ Mixue",
        price: "50,000",
        numericalPrice: 50000,
        image: "image/sp6.jpg",
        description: "Trà sữa Dương Chi Cam Lộ Mixue là thức uống độc đáo với sự kết hợp của trà sữa thơm lừng và topping cam thảo, mang lại hương vị mới lạ và thanh mát.",
        shortDescription: "Thức uống độc đáo với trà sữa thơm và topping cam thảo.",
        category: "Trà Sữa",
        id: "K006",
    },
    {
        name: "Trà sữa trân châu Mixue",
        price: "50,000",
        numericalPrice: 50000,
        image: "image/sp7.png",
        description: "Trà sữa trân châu Mixue – Pearl Milk Tea là thức uống kinh điển với vị trà thơm và trân châu dai ngon, đậm đà, được yêu thích bởi mọi lứa tuổi.",
        shortDescription: "Thức uống kinh điển với vị trà thơm và trân châu dai ngon.",
        category: "Trà Sữa",
        id: "K007",
    },
    {
        name: "Trà Sữa Thạch Dừa Mixue",
        price: "50,000",
        numericalPrice: 50000,
        image: "image/sp8.jpg",
        description: "Trà Sữa Thạch Dừa Mixue mang hương vị dừa tự nhiên, kết hợp cùng thạch dừa giòn sần sật, tạo cảm giác mới lạ và giải khát hiệu quả.",
        shortDescription: "Hương vị dừa tự nhiên, kết hợp cùng thạch dừa giòn sần sật.",
        category: "Trà Sữa",
        id: "K008",
    },
    {
        name: "Trà Sữa Trân Châu Đường Đen Mixue",
        price: "50,000",
        numericalPrice: 50000,
        image: "image/sp9.jpg",
        description: "Trà Sữa Trân Châu Đường Đen Mixue là sự hòa quyện giữa vị trà sữa truyền thống và siro đường đen ngọt ngào, cùng trân châu dai giòn, tạo nên hương vị đặc trưng.",
        shortDescription: "Sự hòa quyện giữa trà sữa truyền thống và siro đường đen ngọt ngào.",
        category: "Trà Sữa",
        id: "K009",
    },
    {
        name: "Trà Sữa 3Q Mixue",
        price: "50,000",
        numericalPrice: 50000,
        image: "image/sp10.jpg",
        description: "Trà Sữa 3Q Mixue với sự kết hợp của 3 loại topping yêu thích (trân châu, thạch dừa, pudding), mang đến trải nghiệm đa dạng và thú vị trong từng ngụm.",
        shortDescription: "Kết hợp 3 loại topping yêu thích, mang đến trải nghiệm đa dạng.",
        category: "Trà Sữa",
        id: "K010",
    },
];

// UTILITY FUNCTIONS
const utils = {
    // Format currency
    formatCurrency(amount) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: CONFIG.CURRENCY }).format(amount);
    },

    // Debounce function for search
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Show toast notification
    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    // Show loading state
    showLoading(button) {
        if (button) {
            const originalText = button.innerHTML;
            button.innerHTML = '<div class="loading"></div>';
            button.disabled = true;
            button.dataset.originalText = originalText;
        }
    },

    // Hide loading state
    hideLoading(button) {
        if (button && button.dataset.originalText) {
            button.innerHTML = button.dataset.originalText;
            button.disabled = false;
        }
    }
};

// CART MANAGER
const cartManager = {
    getCart() {
        try {
            return JSON.parse(localStorage.getItem(CONFIG.CART_KEY)) || [];
        } catch (error) {
            console.error('Lỗi tải giỏ hàng:', error);
            utils.showToast('Không thể tải giỏ hàng', 'error');
            return [];
        }
    },

    saveCart(cart) {
        try {
            localStorage.setItem(CONFIG.CART_KEY, JSON.stringify(cart));
        } catch (error) {
            console.error('Lỗi lưu giỏ hàng:', error);
            utils.showToast('Không thể lưu giỏ hàng', 'error');
        }
    },

    addToCart(product, quantity = 1, button = null) {
        if (button) utils.showLoading(button);

        setTimeout(() => {
            try {
                let cart = this.getCart();
                const existingItemIndex = cart.findIndex(item => item.id === product.id);

                if (existingItemIndex > -1) {
                    cart[existingItemIndex].quantity += quantity;
                } else {
                    cart.push({
                        id: product.id,
                        name: product.name,
                        price: product.numericalPrice,
                        image: product.image,
                        quantity: quantity
                    });
                }

                this.saveCart(cart);
                this.updateCartIconQuantity();
                utils.showToast(`🛒 Đã thêm ${quantity} "${product.name}" vào giỏ hàng!`);
            } catch (error) {
                console.error('Lỗi thêm vào giỏ hàng:', error);
                utils.showToast('Không thể thêm vào giỏ hàng', 'error');
            } finally {
                if (button) utils.hideLoading(button);
            }
        }, 500);
    },

    removeFromCart(productId) {
        try {
            let cart = this.getCart();
            cart = cart.filter(item => item.id !== productId);
            this.saveCart(cart);
            this.updateCartIconQuantity();
            utils.showToast('Đã xóa sản phẩm khỏi giỏ hàng');
            return cart;
        } catch (error) {
            console.error('Lỗi xóa khỏi giỏ hàng:', error);
            utils.showToast('Không thể xóa sản phẩm', 'error');
            return this.getCart();
        }
    },

    updateCartIconQuantity() {
        const cart = this.getCart();
        const cartCountElement = document.getElementById('cart-item-count');

        if (cartCountElement) {
            const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountElement.textContent = totalQuantity;
            
            // Add animation
            cartCountElement.classList.add('update');
            setTimeout(() => cartCountElement.classList.remove('update'), 300);
        }
    },

    changeQuantity(productId, delta) {
        try {
            let cart = this.getCart();
            const itemIndex = cart.findIndex(item => item.id === productId);

            if (itemIndex > -1) {
                cart[itemIndex].quantity += delta;
                if (cart[itemIndex].quantity <= 0) {
                    cart.splice(itemIndex, 1);
                    utils.showToast('Đã xóa sản phẩm khỏi giỏ hàng');
                } else {
                    utils.showToast('Đã cập nhật số lượng');
                }
                this.saveCart(cart);
                this.updateCartIconQuantity();
            }
            return cart;
        } catch (error) {
            console.error('Lỗi cập nhật số lượng:', error);
            utils.showToast('Không thể cập nhật số lượng', 'error');
            return this.getCart();
        }
    }
};

// PRODUCT RENDERER
const productRenderer = {
    renderAllProductCategories() {
        const kemList = document.getElementById("kem-product-list");
        const trasuaList = document.getElementById("trasua-product-list");

        if (kemList) kemList.innerHTML = "";
        if (trasuaList) trasuaList.innerHTML = "";

        products.forEach((product) => {
            const productDIV = document.createElement("div");
            productDIV.classList.add("product");
            productDIV.innerHTML = `
                <a href="product-detail.html?id=${product.id}">
                    <img src="${product.image}" width="90%" alt="${product.name}" loading="lazy">
                </a>
                <p class="banquyen">${product.category}</p>
                <a href="product-detail.html?id=${product.id}">
                    <p class="tensp">${product.name}</p>
                </a>
                <p class="giasp">${product.price}<i class="fa-solid fa-dong-sign"></i></p>
            `;

            if (product.category === "Kem" && kemList) {
                kemList.appendChild(productDIV);
            } else if (product.category === "Trà Sữa" && trasuaList) {
                trasuaList.appendChild(productDIV);
            }
        });
    },

    renderProductDetail() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        const productDetailPage = document.querySelector('.product-detail-page');
        const noProductFoundMessage = document.getElementById('no-product-found-message');

        const productImage = document.getElementById('product-image');
        const productName = document.getElementById('product-name');
        const productPrice = document.getElementById('product-price');
        const productDescription = document.getElementById('product-description');
        const productCategorySpan = document.getElementById('product-category');
        const productQuantityInput = document.getElementById('product-quantity');
        const addToCartButton = document.getElementById('add-to-cart-detail-btn');
        const productDetailTitle = document.getElementById('product-detail-title');
        const reviewFormTitle = document.getElementById('review-form-title');

        if (!productId) {
            this.showError(noProductFoundMessage, productDetailPage);
            return;
        }

        const currentProduct = products.find(p => p.id === productId);

        if (!currentProduct) {
            this.showError(noProductFoundMessage, productDetailPage);
            return;
        }

        // Hiển thị sản phẩm
        if (noProductFoundMessage) noProductFoundMessage.style.display = 'none';
        if (productDetailPage) productDetailPage.style.display = 'flex';

        // Cập nhật thông tin sản phẩm
        if (productImage) {
            productImage.src = currentProduct.image;
            productImage.alt = currentProduct.name;
        }
        if (productName) productName.textContent = currentProduct.name;
        if (productPrice) productPrice.textContent = utils.formatCurrency(currentProduct.numericalPrice);
        if (productDescription) productDescription.textContent = currentProduct.description;
        if (productCategorySpan) productCategorySpan.textContent = currentProduct.category;
        if (productDetailTitle) productDetailTitle.textContent = `Chi tiết sản phẩm ${currentProduct.name}`;
        if (reviewFormTitle) reviewFormTitle.textContent = `Be the first to review "${currentProduct.name}"`;

        // Gắn sự kiện cho nút "Add to Cart"
        if (addToCartButton) {
            addToCartButton.addEventListener('click', () => {
                const quantity = parseInt(productQuantityInput.value);
                if (isNaN(quantity) || quantity < 1) {
                    utils.showToast('Số lượng không hợp lệ. Vui lòng nhập số lớn hơn hoặc bằng 1.', 'error');
                    return;
                }
                cartManager.addToCart(currentProduct, quantity, addToCartButton);
            });
        }

        // Khởi tạo hệ thống đánh giá
        this.initReviewSystem();
    },

    showError(noProductFoundMessage, productDetailPage) {
        if (noProductFoundMessage) {
            noProductFoundMessage.style.display = 'block';
        }
        if (productDetailPage) {
            productDetailPage.style.display = 'none';
        }
    },

    initReviewSystem() {
        const starIcons = document.querySelectorAll('.rating-stars i');
        const reviewListContainer = document.getElementById('submitted-reviews');
        const submitReviewBtn = document.getElementById('submit-review-btn');
        let selectedRating = 0;

        if (!starIcons.length || !submitReviewBtn) return;

        // Bắt sự kiện chọn sao
        starIcons.forEach(star => {
            star.addEventListener('click', () => {
                selectedRating = parseInt(star.dataset.rating);
                starIcons.forEach(s => s.classList.remove('selected'));
                for (let i = 0; i < selectedRating; i++) {
                    starIcons[i].classList.add('selected');
                }
            });
        });

        // Bắt sự kiện submit
        submitReviewBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const name = document.getElementById('your-name')?.value.trim();
            const email = document.getElementById('your-email')?.value.trim();
            const review = document.getElementById('your-review')?.value.trim();

            if (!selectedRating || !name || !email || !review) {
                utils.showToast('Vui lòng điền đầy đủ thông tin và chọn số sao.', 'error');
                return;
            }

            this.submitReview(name, email, review, selectedRating, reviewListContainer);
            this.resetReviewForm(starIcons);
        });
    },

    submitReview(name, email, review, rating, container) {
        // Ẩn thông báo "There are no reviews yet."
        const noReviewMsg = container?.querySelector('p');
        if (noReviewMsg) noReviewMsg.style.display = 'none';

        // Tạo phần tử review mới
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('submitted-review');
        reviewItem.style.borderTop = '1px solid #eee';
        reviewItem.style.padding = '15px 0';

        // Thêm sao
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            starsHTML += `<i class="fa-star ${i <= rating ? 'fas' : 'far'}" style="color:#ffcc00; margin-right:2px;"></i>`;
        }

        reviewItem.innerHTML = `
            <div>${starsHTML}</div>
            <p><strong>${name}</strong> (${email})</p>
            <p>${review}</p>
            <small>${new Date().toLocaleDateString('vi-VN')}</small>
        `;

        // Thêm vào danh sách
        if (container) {
            container.appendChild(reviewItem);
        }

        utils.showToast('Cảm ơn bạn đã gửi đánh giá!');
    },

    resetReviewForm(starIcons) {
        document.getElementById('your-name').value = '';
        document.getElementById('your-email').value = '';
        document.getElementById('your-review').value = '';
        starIcons.forEach(star => star.classList.remove('selected'));
    }
};

// SEARCH MANAGER
const searchManager = {
    init() {
        const searchBox = document.getElementById('search-box');
        const searchResults = document.getElementById('search-results');
        const searchProductList = document.getElementById('search-product-list');
        const noResultsMessage = document.getElementById('no-results-message');

        if (!searchBox || !searchResults || !searchProductList || !noResultsMessage) {
            console.log('Search elements not found');
            return;
        }

        console.log('Search manager initialized');

        searchBox.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            console.log('Search query:', query);
            this.performSearch(query, searchResults, searchProductList, noResultsMessage);
        });

        // Ẩn kết quả tìm kiếm khi nhấp ra ngoài
        document.addEventListener('click', (e) => {
            if (!searchBox.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    },

    performSearch(query, searchResults, searchProductList, noResultsMessage) {
        // Xóa kết quả cũ
        searchProductList.innerHTML = '';

        if (query === '') {
            searchResults.style.display = 'none';
            return;
        }

        console.log('Products available:', products.length);
        console.log('All products:', products);

        // Lọc sản phẩm ĐƠN GIẢN - tìm trong name và category
        const filteredProducts = products.filter(product => {
            const productName = product.name.toLowerCase();
            const productCategory = product.category.toLowerCase();
            const productDesc = product.description.toLowerCase();
            
            return productName.includes(query) || 
                   productCategory.includes(query) || 
                   productDesc.includes(query) ||
                   this.checkSmartSearch(product, query);
        });

        console.log('Filtered products:', filteredProducts);

        if (filteredProducts.length === 0) {
            searchResults.style.display = 'block';
            noResultsMessage.style.display = 'block';
            searchProductList.style.display = 'none';
        } else {
            searchResults.style.display = 'block';
            noResultsMessage.style.display = 'none';
            searchProductList.style.display = 'grid';

            // Hiển thị sản phẩm phù hợp
            filteredProducts.forEach(product => {
                const productDIV = document.createElement('div');
                productDIV.classList.add('product');
                productDIV.innerHTML = `
                    <a href="product-detail.html?id=${product.id}">
                        <img src="${product.image}" width="90%" alt="${product.name}" loading="lazy">
                    </a>
                    <p class="banquyen">${product.category}</p>
                    <a href="product-detail.html?id=${product.id}">
                        <p class="tensp">${product.name}</p>
                    </a>
                    <p class="giasp">${product.price}<i class="fa-solid fa-dong-sign"></i></p>
                `;
                searchProductList.appendChild(productDIV);
            });
        }
    },

    // Tìm kiếm thông minh đơn giản
    checkSmartSearch(product, query) {
        const smartSearchMap = {
            'trà': ['trà sữa'],
            'tra': ['trà sữa'],
            'tea': ['trà sữa'],
            'kem': ['kem', 'sundae'],
            'ice cream': ['kem'],
            'dâu': ['dâu tây'],
            'strawberry': ['dâu tây'],
            'chocolate': ['chocolate', 'socola'],
            'socola': ['chocolate'],
            'trân châu': ['trân châu'],
            'pearl': ['trân châu'],
            'thạch': ['thạch'],
            'jelly': ['thạch'],
            'đường đen': ['đường đen'],
            'brown sugar': ['đường đen']
        };

        const productText = (product.name + ' ' + product.category + ' ' + product.description).toLowerCase();
        
        // Kiểm tra từ khóa thông minh
        for (const [keyword, matches] of Object.entries(smartSearchMap)) {
            if (query.includes(keyword)) {
                for (const match of matches) {
                    if (productText.includes(match)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
};

// EVENT HANDLERS
const eventHandlers = {
    init() {
        // Event delegation for add to cart buttons
        document.addEventListener('click', (e) => {
            const addToCartBtn = e.target.closest('.add-to-cart-btn');
            if (addToCartBtn) {
                const productId = addToCartBtn.dataset.id;
                const product = products.find(p => p.id === productId);
                if (product) {
                    cartManager.addToCart(product, 1, addToCartBtn);
                }
            }
        });

        // Handle checkout button
        const checkoutBtn = document.getElementById('thanhtoan');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                const cart = cartManager.getCart();
                if (cart.length === 0) {
                    utils.showToast('Giỏ hàng trống. Vui lòng chọn sản phẩm trước khi thanh toán!', 'error');
                } else {
                    window.location.href = "checkout.html";
                }
            });
        }
    }
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    productRenderer.renderAllProductCategories();
    productRenderer.renderProductDetail();
    searchManager.init();
    eventHandlers.init();
    cartManager.updateCartIconQuantity();

    // Add loading state to page
    document.body.classList.add('loaded');
});

// Make functions available globally for backward compatibility
window.addToCart = (product, quantity = 1) => cartManager.addToCart(product, quantity);
window.getCart = () => cartManager.getCart();
window.saveCart = (cart) => cartManager.saveCart(cart);
window.formatCurrency = (amount) => utils.formatCurrency(amount);
window.updateCartIconQuantity = () => cartManager.updateCartIconQuantity();

// DEBUG: Kiểm tra search hoạt động
console.log('=== DEBUG SEARCH ===');
console.log('Search box element:', document.getElementById('search-box'));
console.log('Search results element:', document.getElementById('search-results'));
console.log('Total products:', products.length);
products.forEach(p => console.log('-', p.name, '| Category:', p.category));

// ===== ENHANCED FEATURES FOR CV =====

// 1. ORDER TRACKING SYSTEM
const orderTracking = {
    orders: JSON.parse(localStorage.getItem('mixueOrders')) || [],
    
    createOrder(cart, customerInfo) {
        const order = {
            id: 'MX' + Date.now(),
            date: new Date().toISOString(),
            items: cart,
            customer: customerInfo,
            status: 'confirmed',
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            estimatedDelivery: new Date(Date.now() + 45 * 60000), // 45 phút
            tracking: [
                { status: 'ordered', timestamp: new Date(), description: 'Đơn hàng đã được xác nhận' }
            ]
        };
        
        this.orders.unshift(order);
        this.saveOrders();
        return order;
    },
    
    updateOrderStatus(orderId, status) {
        const order = this.orders.find(o => o.id === orderId);
        if (order) {
            order.status = status;
            order.tracking.push({
                status: status,
                timestamp: new Date(),
                description: this.getStatusDescription(status)
            });
            this.saveOrders();
        }
    },
    
    getStatusDescription(status) {
        const statusMap = {
            'confirmed': 'Đơn hàng đã được xác nhận',
            'preparing': 'Đang chuẩn bị đồ uống',
            'ready': 'Đơn hàng đã sẵn sàng',
            'delivering': 'Đang giao hàng',
            'delivered': 'Giao hàng thành công'
        };
        return statusMap[status] || 'Trạng thái đơn hàng';
    },
    
    saveOrders() {
        localStorage.setItem('mixueOrders', JSON.stringify(this.orders));
    }
};

// 2. LOYALTY PROGRAM
const loyaltyProgram = {
    getCustomerPoints() {
        return parseInt(localStorage.getItem('mixueLoyaltyPoints')) || 0;
    },
    
    addPoints(amount) {
        const currentPoints = this.getCustomerPoints();
        const newPoints = currentPoints + amount;
        localStorage.setItem('mixueLoyaltyPoints', newPoints.toString());
        return newPoints;
    },
    
    calculatePoints(orderTotal) {
        return Math.floor(orderTotal / 10000); // 1 điểm / 10,000đ
    },
    
    getRewards() {
        return [
            { points: 10, reward: 'Voucher 10,000đ', description: 'Giảm 10,000đ cho đơn tiếp theo' },
            { points: 20, reward: 'Voucher 25,000đ', description: 'Giảm 25,000đ cho đơn tiếp theo' },
            { points: 50, reward: '1 Ly trà sữa MIỄN PHÍ', description: 'Nhận 1 ly trà sữa bất kỳ' }
        ];
    }
};

// 3. ANALYTICS DASHBOARD
const analytics = {
    getSalesData() {
        const orders = orderTracking.orders;
        const today = new Date().toDateString();
        
        return {
            totalOrders: orders.length,
            todayOrders: orders.filter(order => new Date(order.date).toDateString() === today).length,
            totalRevenue: orders.reduce((sum, order) => sum + order.total, 0),
            popularProducts: this.getPopularProducts(orders)
        };
    },
    
    getPopularProducts(orders) {
        const productCount = {};
        orders.forEach(order => {
            order.items.forEach(item => {
                productCount[item.name] = (productCount[item.name] || 0) + item.quantity;
            });
        });
        
        return Object.entries(productCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
    }
};

// 4. INITIALIZE ENHANCED FEATURES
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced checkout - tích điểm
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            const cart = cartManager.getCart();
            if (cart.length > 0) {
                const pointsEarned = loyaltyProgram.calculatePoints(
                    cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
                );
                loyaltyProgram.addPoints(pointsEarned);
            }
        });
    }
    
    // Hiển thị điểm tích lũy nếu có
    const loyaltyPoints = loyaltyProgram.getCustomerPoints();
    if (loyaltyPoints > 0) {
        this.showLoyaltyNotification(loyaltyPoints);
    }
});

// 5. ENHANCED NOTIFICATIONS
utils.showLoyaltyNotification = function(points) {
    const notification = document.createElement('div');
    notification.className = 'toast loyalty-toast';
    notification.innerHTML = `
        <div>🎉 Bạn có <strong>${points} điểm</strong> tích lũy!</div>
        <small>Đổi điểm để nhận ưu đãi đặc biệt</small>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
};