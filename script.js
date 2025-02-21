document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll(
    'input[type="radio"][name="unit1"]'
  );
  const totalPriceElement = document.querySelector(".totalprice-bogo");

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      document
        .querySelectorAll(".options")
        .forEach((option) => (option.style.display = "none"));
      document
        .querySelectorAll(".bogo-box-wrapper")
        .forEach((wrapper) => wrapper.parentElement.classList.remove("active"));

      const parentBox = this.closest(".bogo-box-wrapper");
      const options = parentBox.querySelector(".options");
      if (options) options.style.display = "block";

      parentBox.parentElement.classList.add("active");

      const unitPrice = parentBox.querySelector(".bogo-unit-price").textContent;
      totalPriceElement.textContent = `Total : ${unitPrice}`;
    });
  });
});
