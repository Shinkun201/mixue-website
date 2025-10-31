// loyalty.js
document.addEventListener('DOMContentLoaded', function() {
    loadLoyaltyData();
});

function loadLoyaltyData() {
    const points = loyaltyProgram.getCustomerPoints();
    const rewards = loyaltyProgram.getRewards();
    
    // Hiển thị điểm
    document.getElementById('points-count').textContent = points;
    
    // Hiển thị phần thưởng
    const rewardsGrid = document.getElementById('rewards-grid');
    rewardsGrid.innerHTML = rewards.map(reward => `
        <div class="reward-card ${points >= reward.points ? 'available' : 'locked'}">
            <div class="reward-points">${reward.points} điểm</div>
            <h3>${reward.reward}</h3>
            <p>${reward.description}</p>
            ${points >= reward.points ? 
                `<button class="redeem-btn" onclick="redeemReward(${reward.points}, '${reward.reward}')">Đổi ngay</button>` :
                `<div class="required-points">Cần thêm ${reward.points - points} điểm</div>`
            }
        </div>
    `).join('');
}

function redeemReward(pointsRequired, rewardName) {
    const currentPoints = loyaltyProgram.getCustomerPoints();
    
    if (currentPoints >= pointsRequired) {
        if (confirm(`Bạn có chắc muốn đổi ${pointsRequired} điểm để nhận "${rewardName}"?`)) {
            const newPoints = currentPoints - pointsRequired;
            localStorage.setItem('mixueLoyaltyPoints', newPoints.toString());
            
            utils.showToast(`🎉 Đổi thành công! Bạn đã nhận: ${rewardName}`);
            loadLoyaltyData();
        }
    } else {
        utils.showToast('Bạn không đủ điểm để đổi phần thưởng này', 'error');
    }
}