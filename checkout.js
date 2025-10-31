// Checkout functionality
document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.getElementById('checkout-form');
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    if (!checkoutForm || !cartItemsList || !totalPriceElement) return;

    // Lấy dữ liệu từ giỏ hàng
    function getCart() {
        try {
            return JSON.parse(localStorage.getItem('mixueCart')) || [];
        } catch (error) {
            console.error('Lỗi tải giỏ hàng:', error);
            showError('Không thể tải giỏ hàng');
            return [];
        }
    }

    function formatCurrency(amount) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    }

    function showError(message) {
        alert(message); // Có thể thay bằng toast notification
    }

    function showSuccess() {
        // Hiển thị thông báo thành công
        document.getElementById('checkout-form').style.display = 'none';
        document.getElementById('cart-summary').style.display = 'none';
        document.getElementById('thank-you').style.display = 'block';
        
        // Xóa giỏ hàng
        try {
            localStorage.removeItem('mixueCart');
        } catch (error) {
            console.error('Lỗi xóa giỏ hàng:', error);
        }
    }

    // Hiển thị giỏ hàng
    function displayCartItems() {
        const cartItems = getCart();
        let total = 0;

        cartItemsList.innerHTML = '';
        
        if (cartItems.length === 0) {
            cartItemsList.innerHTML = '<li>Giỏ hàng trống</li>';
            totalPriceElement.textContent = formatCurrency(0);
            return;
        }

        cartItems.forEach(item => {
            const name = item.name || 'Không rõ';
            const quantity = item.quantity || 1;
            const price = item.price || 0;
            const itemTotal = price * quantity;
            
            const li = document.createElement('li');
            li.className = 'cart-item';
            li.innerHTML = `
                <span class="item-name">${name}</span>
                <span class="item-quantity">SL: ${quantity}</span>
                <span class="item-total">${formatCurrency(itemTotal)}</span>
            `;
            cartItemsList.appendChild(li);
            total += itemTotal;
        });

        totalPriceElement.textContent = formatCurrency(total);
    }

    // Xử lý submit form
    checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const note = document.getElementById('note').value.trim();

        // Validation
        if (!fullname || !email || !address || !phone) {
            showError("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^0\d{9}$/;

        if (!emailRegex.test(email)) {
            showError("Email không hợp lệ!");
            return;
        }

        if (!phoneRegex.test(phone)) {
            showError("Số điện thoại không hợp lệ! (Định dạng: 0xxxxxxxxx)");
            return;
        }

        // Hiển thị loading
        const submitButton = checkoutForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<div class="loading"></div> Đang xử lý...';
        submitButton.disabled = true;

        // Giả lập xử lý thanh toán
        setTimeout(() => {
            showSuccess();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });

    // Khởi tạo hiển thị giỏ hàng
    displayCartItems();
});

// Enhanced checkout process
function enhancedCheckout() {
    const checkoutForm = document.getElementById('checkout-form');
    
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const cart = getCart();
        const customerInfo = {
            name: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value
        };
        
        // Tạo đơn hàng mới
        const order = orderTracking.createOrder(cart, customerInfo);
        
        // Hiển thị xác nhận với mã đơn hàng
        showOrderConfirmation(order);
    });
}

function showOrderConfirmation(order) {
    document.getElementById('checkout-form').style.display = 'none';
    document.getElementById('cart-summary').style.display = 'none';
    
    const thankYouDiv = document.getElementById('thank-you');
    thankYouDiv.innerHTML = `
        <h1>🎉 ĐẶT HÀNG THÀNH CÔNG!</h1>
        <div class="order-confirmation">
            <p><strong>Mã đơn hàng:</strong> ${order.id}</p>
            <p><strong>Khách hàng:</strong> ${order.customer.name}</p>
            <p><strong>Số điện thoại:</strong> ${order.customer.phone}</p>
            <p><strong>Tổng tiền:</strong> ${utils.formatCurrency(order.total)}</p>
            <p><strong>Dự kiến giao hàng:</strong> ${new Date(order.estimatedDelivery).toLocaleTimeString('vi-VN')}</p>
            <div class="tracking-buttons">
                <a href="order-tracking.html?id=${order.id}" class="track-order-btn">Theo dõi đơn hàng</a>
                <a href="TrangChu.html" class="continue-shopping">Tiếp tục mua sắm</a>
            </div>
        </div>
    `;
    thankYouDiv.style.display = 'block';
}

// Khởi tạo checkout nâng cao
document.addEventListener('DOMContentLoaded', function() {
    enhancedCheckout();
});