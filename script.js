const btnsRating = document.querySelectorAll(".btnRating");
const btnSubmit = document.querySelector(".btnSubmit");
const main = document.querySelector("main");

let currentRating = document.querySelector(".active");
btnsRating.forEach(btn => {
  btn.addEventListener("click", function () {
    if (currentRating) {
      currentRating.classList.remove("active");
    }
    btn.classList.add("active");
    currentRating = btn;
  });
});

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentRating) {
    main.classList.remove("component");
    main.classList.add("thank-you-state");
    // create content for the "thank you" state
    const html = `<header><img src="/images/illustration-thank-you.svg" /></header>
          <div class="user-rating"> You selected ${currentRating.value} out of 5</div>
          <div class="thank-you-content">
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
          </div>`;
    main.innerHTML = html;
  }
});
