const generateBtn = document.querySelector(".form button"),
  wrapper = document.querySelector(".wrapper"),
  qrText = document.querySelector(".form input"),
  qrImg = document.querySelector(".result img");

generateBtn.addEventListener("click", () => {
  let value = qrText.value;
  if (!value.trim()) return;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
  generateBtn.innerHTML = "Generating QR Code...";
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerHTML = "Generating QR Code";
  });
});

qrText.addEventListener("keyup", () => {
  if (!qrText.value.trim()) {
    wrapper.classList.remove("active");
  }
});
