const billingSwitch = document.getElementById("toggle");
const priceBasic = document.querySelector(".price-basic");
const pricePro = document.querySelector(".price-pro");
const priceMaster = document.querySelector(".price-master");

billingSwitch.addEventListener("click", () => {
  if (billingSwitch.checked == true) {
    priceBasic.textContent = "$19.99";
    pricePro.textContent = "$24.99";
    priceMaster.textContent = "$39.99";
  } else {
    priceBasic.textContent = "$199.99";
    pricePro.textContent = "$249.99";
    priceMaster.textContent = "$399.99";
  }
});
