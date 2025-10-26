document.addEventListener("DOMContentLoaded", function () {
    const colorButtons = document.querySelectorAll(".color-option");
    const mainImage = document.getElementById("mainProductImage");

    colorButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            // Đổi ảnh chính
            const newImg = this.getAttribute("data-img");
            mainImage.src = newImg;

            // Bỏ selected ở nút khác
            colorButtons.forEach(b => b.classList.remove("selected"));
            // Thêm selected vào nút hiện tại
            this.classList.add("selected");
        });
    });
});



document.getElementById("shippingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Họ và tên
    const fullname = document.getElementById("fullname");
    if (fullname.value.trim() === "" || fullname.value.length > 30) {
        setError(fullname, "Họ và tên không được để trống, tối đa 30 ký tự");
        isValid = false;
    } else {
        clearError(fullname);
    }

    // Email
    const email = document.getElementById("email");
    if (email.value.trim() === "" || !email.value.includes("@")) {
        setError(email, "Email không hợp lệ (phải có @)");
        isValid = false;
    } else {
        clearError(email);
    }

    // Số điện thoại
    const phone = document.getElementById("phone");
    if (phone.value.trim() === "" || phone.value.length > 12  || phone.value.length < 10) {
        setError(phone, "Số điện thoại không hợp lệ (tối đa 12 ký tự)");
        isValid = false;
    } else {
        clearError(phone);
    }

    // Địa chỉ
    const address = document.getElementById("address");
    if (address.value.trim() === "") {
        setError(address, "Địa chỉ không được để trống");
        isValid = false;
    } else {
        clearError(address);
    }

    if (isValid) {
        alert("Thông tin hợp lệ! Chuyển sang bước thanh toán...");
        // Chuyển trang thanh toán ở đây
    }
});

function setError(element, message) {
    element.nextElementSibling.innerText = message;
    element.style.borderColor = "red";
}

function clearError(element) {
    element.nextElementSibling.innerText = "";
    element.style.borderColor = "#ccc";
}

