// Hiển thị voucher
function showVoucher() {
  document.getElementById("voucher").style.display = "block";
}

// Xử lý form liên hệ
function submitForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg  = document.getElementById("message").value.trim();
  if (name && email && msg) {
    document.getElementById("response").textContent = 
      "Cảm ơn " + name + "! Chúng tôi đã nhận được tin nhắn.";
    // Reset form
    document.querySelector(".contact-form").reset();
  }
  return false; // ngăn reload trang
}
