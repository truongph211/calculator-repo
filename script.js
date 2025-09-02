const inputValue = document.getElementById("user-input");

// Xử lý khi nhấn số
document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }

    inputValue.innerText += e.target.innerHTML.trim();
  });
});

// Xử lý khi nhấn phép toán
document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const operation = e.target.innerHTML.trim();
    let input = inputValue.innerText;
    let lastChar = input[input.length - 1];

    if (operation === "=") {
      // Nếu ký tự cuối là số, thực hiện tính toán
      if (!isNaN(lastChar)) {
        try {
          const result = eval(input);
          inputValue.innerText = result;
        } catch {
          inputValue.innerText = "NaN";
        }
      }
    } else if (operation === "AC") {
      inputValue.innerText = "0";
    } else if (operation === "DEL") {
      inputValue.innerText = input.slice(0, -1);
      if (inputValue.innerText.length === 0) {
        inputValue.innerText = "0";
      }
    } else {
      // Nếu ký tự cuối là số, thêm phép toán
      if (!isNaN(lastChar)) {
        inputValue.innerText += operation;
      }
    }
  });
});
