document.addEventListener("DOMContentLoaded", () => {
  const addForm = document.getElementById("addForm");
  if(addForm) {
    addForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if(validateForm()) {
        alert("상품이 추가됩니다!");
        window.location.href = "index.html";
      }
    });
  }

  const editForm = document.getElementById("editForm");
  if(editForm) {
    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if(validateForm()) {
        if(confirm("상품을 수정할까요?")) {
          alert("상품이 수정되었습니다!");
          window.location.href = "view.html";
        }
      }
    });
  }
});

function validateForm() {
  const name = document.getElementById("productName").value.trim();
  const image = document.getElementById("productImage").value.trim();
  const price = parseInt(document.getElementById("productPrice").value);
  const stock = parseInt(document.getElementById("productStock").value);
  const status = document.getElementById("productStatus").value;

  if(name.length < 2) {
    alert("상품명은 최소 2글자 이상 입력해야 합니다.");
    return false;
  }
  if(!image.startsWith("http")) {
    alert("이미지 URL은 http로 시작해야 합니다.");
    return false;
  }
  if(isNaN(price) || price <= 0) {
    alert("가격은 0보다 큰 숫자여야 합니다.");
    return false;
  }
  if(isNaN(stock) || stock < 0) {
    alert("재고 수량은 0 이상의 숫자여야 합니다.");
    return false;
  }
  if(status === "") {
    alert("상태를 선택해야 합니다.");
    return false;
  }
  return true;
}
