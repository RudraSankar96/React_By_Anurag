const firstBasket = document.querySelector(`.basket-1 span`)
const secondBasket = document.querySelector(".basket-2 span")

const rightArrow = document.querySelector(".right-arrow")
const leftArrow = document.querySelector(".left-arrow")

const totalApples = 10;
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApples - secondBasketAppleCount;

firstBasket.innerText= firstBasketAppleCount;
secondBasket.innerText = secondBasketAppleCount;

rightArrow.addEventListener("click", ()=>{
  if (firstBasketAppleCount > 0) {
      firstBasketAppleCount--;
      secondBasketAppleCount++;
      firstBasket.innerText = firstBasketAppleCount;
      secondBasket.innerText = secondBasketAppleCount;
    }
  });

  // Move apple left (Basket 2 → Basket 1)
leftArrow.addEventListener("click", () => {
  if (secondBasketAppleCount > 0) {
    secondBasketAppleCount--;
    firstBasketAppleCount++;
    firstBasket.innerText = firstBasketAppleCount;
    secondBasket.innerText = secondBasketAppleCount;
  }
});