// order-tracking.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('track-order-btn').addEventListener('click', trackOrder);
    loadUserOrders();
});

function trackOrder() {
    const orderId = document.getElementById('order-id-input').value.trim();
    const order = orderTracking.orders.find(o => o.id === orderId);
    
    const resultDiv = document.getElementById('tracking-result');
    
    if (order) {
        resultDiv.innerHTML = createOrderTrackingHTML(order);
        resultDiv.style.display = 'block';
    } else {
        resultDiv.innerHTML = '<p class="error">Không tìm thấy đơn hàng với mã này.</p>';
        resultDiv.style.display = 'block';
    }
}

function createOrderTrackingHTML(order) {
    const statusSteps = ['confirmed', 'preparing', 'ready', 'delivering', 'delivered'];
    const currentStatusIndex = statusSteps.indexOf(order.status);
    
    return `
        <div class="order-info">
            <h3>Thông tin đơn hàng ${order.id}</h3>
            <div class="customer-info">
                <p><strong>Khách hàng:</strong> ${order.customer.name}</p>
                <p><strong>Điện thoại:</strong> ${order.customer.phone}</p>
                <p><strong>Địa chỉ:</strong> ${order.customer.address}</p>
                <p><strong>Tổng tiền:</strong> ${utils.formatCurrency(order.total)}</p>
            </div>
        </div>
        
        <div class="tracking-timeline">
            ${statusSteps.map((status, index) => `
                <div class="timeline-step ${index <= currentStatusIndex ? 'completed' : ''}">
                    <div class="step-icon">${index + 1}</div>
                    <div class="step-content">
                        <strong>${getStatusText(status)}</strong>
                        ${order.tracking.find(t => t.status === status) ? 
                          `<small>${new Date(order.tracking.find(t => t.status === status).timestamp).toLocaleString('vi-VN')}</small>` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="estimated-delivery">
            <p>🕐 <strong>Dự kiến giao hàng:</strong> ${new Date(order.estimatedDelivery).toLocaleString('vi-VN')}</p>
        </div>
    `;
}

function loadUserOrders() {
    // Trong thực tế sẽ lấy từ user session
    const userOrders = orderTracking.orders.slice(0, 3); // Hiển thị 3 đơn gần nhất
    const container = document.getElementById('user-orders-list');
    
    if (userOrders.length > 0) {
        container.innerHTML = userOrders.map(order => `
            <div class="user-order-item" onclick="document.getElementById('order-id-input').value='${order.id}'; trackOrder();">
                <div class="order-id">${order.id}</div>
                <div class="order-status ${order.status}">${getStatusText(order.status)}</div>
                <div class="order-total">${utils.formatCurrency(order.total)}</div>
                <div class="order-date">${new Date(order.date).toLocaleDateString('vi-VN')}</div>
            </div>
        `).join('');
    } else {
        container.innerHTML = '<p>Bạn chưa có đơn hàng nào.</p>';
    }
}

function getStatusText(status) {
    const statusMap = {
        'confirmed': 'Đã xác nhận',
        'preparing': 'Đang chuẩn bị',
        'ready': 'Sẵn sàng',
        'delivering': 'Đang giao',
        'delivered': 'Đã giao'
    };
    return statusMap[status] || status;
}