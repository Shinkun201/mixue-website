// Cart page functionality
document.addEventListener('DOMContentLoaded', () => {
    renderCartItems();
    updateCartIconQuantity();
});

function renderCartItems() {
    const cart = getCart();
    const cartItemsBody = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartSummary = document.getElementById('cart-summary');
    const cartTable = document.getElementById('cart-table');
    const totalPriceElement = document.getElementById('total-price');

    if (!cartItemsBody || !emptyCartMessage || !cartSummary || !cartTable || !totalPriceElement) return;

    // Xóa nội dung cũ
    cartItemsBody.innerHTML = '';

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartSummary.style.display = 'none';
        cartTable.style.display = 'none';
        return;
    } else {
        emptyCartMessage.style.display = 'none';
        cartSummary.style.display = 'block';
        cartTable.style.display = 'table';
    }

    let totalCartPrice = 0;

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" width="80" loading="lazy"></td>
            <td>${item.name}</td>
            <td>${formatCurrency(item.price)}</td>
            <td>
                <div class="quantity-control">
                    <button class="decrease-quantity-btn" data-id="${item.id}" aria-label="Giảm số lượng">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <span>${item.quantity}</span>
                    <button class="increase-quantity-btn" data-id="${item.id}" aria-label="Tăng số lượng">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </td>
            <td>${formatCurrency(item.price * item.quantity)}</td>
            <td>
                <button class="remove-item-btn" data-id="${item.id}" aria-label="Xóa sản phẩm">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        `;
        cartItemsBody.appendChild(row);

        totalCartPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = formatCurrency(totalCartPrice);

    // Gắn sự kiện
    attachCartEventListeners();
}

function attachCartEventListeners() {
    // Tăng số lượng
    document.querySelectorAll('.increase-quantity-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            changeQuantity(id, 1);
        });
    });

    // Giảm số lượng
    document.querySelectorAll('.decrease-quantity-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            changeQuantity(id, -1);
        });
    });

    // Xóa sản phẩm
    document.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            if (confirm('Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?')) {
                removeItemFromCart(id);
            }
        });
    });
}

function changeQuantity(id, delta) {
    const cart = changeQuantityInCart(id, delta);
    if (cart) {
        renderCartItems();
        updateCartIconQuantity();
    }
}

function removeItemFromCart(id) {
    const cart = removeFromCart(id);
    if (cart) {
        renderCartItems();
        updateCartIconQuantity();
    }
}

// Checkout button
document.getElementById('thanhtoan')?.addEventListener('click', () => {
    const cart = getCart();
    if (cart.length === 0) {
        showToast('Giỏ hàng trống. Vui lòng chọn sản phẩm trước khi thanh toán!', 'error');
    } else {
        window.location.href = "checkout.html";
    }
});

// Toast notification function for cart page
function showToast(message, type = 'success') {
    // Sử dụng toast từ main.js nếu có, nếu không dùng alert
    if (window.utils && window.utils.showToast) {
        window.utils.showToast(message, type);
    } else {
        alert(message);
    }
}