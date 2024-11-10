document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn gửi form

    // Hiển thị thông báo
    document.getElementById('message').textContent = 'Đăng nhập thành công!';

    // Chuyển hướng đến trang khác sau 2 giây
    setTimeout(function() {
        window.location.href = 'http://127.0.0.1:5500/bán%20acc.html#';
    }, 2000);
});
