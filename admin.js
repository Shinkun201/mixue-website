// admin.js
document.addEventListener('DOMContentLoaded', function() {
    loadDashboardData();
    setInterval(loadDashboardData, 30000); // Refresh mỗi 30s
});

function loadDashboardData() {
    const salesData = analytics.getSalesData();
    const orders = orderTracking.orders;
    
    // Update stats
    document.getElementById('total-orders').textContent = salesData.totalOrders;
    document.getElementById('today-orders').textContent = salesData.todayOrders;
    document.getElementById('today-revenue').textContent = utils.formatCurrency(salesData.totalRevenue);
    document.getElementById('total-customers').textContent = new Set(orders.map(order => order.customer.phone)).size;
    
    // Load recent orders
    loadRecentOrders(orders.slice(0, 5));
    
    // Load popular products
    loadPopularProducts(salesData.popularProducts);
}

function loadRecentOrders(orders) {
    const container = document.getElementById('recent-orders');
    container.innerHTML = orders.map(order => `
        <div class="order-item">
            <div class="order-header">
                <strong>${order.id}</strong>
                <span class="status ${order.status}">${getStatusText(order.status)}</span>
            </div>
            <div class="order-details">
                <div>${order.customer.name} • ${order.customer.phone}</div>
                <div>${utils.formatCurrency(order.total)} • ${new Date(order.date).toLocaleDateString('vi-VN')}</div>
            </div>
            <button onclick="updateOrderStatus('${order.id}', '${getNextStatus(order.status)}')">
                Cập nhật
            </button>
        </div>
    `).join('');
}

function loadPopularProducts(products) {
    const container = document.getElementById('popular-products');
    container.innerHTML = products.map(([name, count], index) => `
        <div class="product-item">
            <span class="rank">${index + 1}</span>
            <span class="name">${name}</span>
            <span class="count">${count} lượt</span>
        </div>
    `).join('');
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

function getNextStatus(currentStatus) {
    const statusFlow = ['confirmed', 'preparing', 'ready', 'delivering', 'delivered'];
    const currentIndex = statusFlow.indexOf(currentStatus);
    return statusFlow[currentIndex + 1] || currentStatus;
}

function updateOrderStatus(orderId, newStatus) {
    orderTracking.updateOrderStatus(orderId, newStatus);
    loadDashboardData();
    utils.showToast(`Đã cập nhật trạng thái đơn hàng ${orderId}`);
}