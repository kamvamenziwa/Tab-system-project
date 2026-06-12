// script.js

const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    // Remove active class from all buttons
    buttons.forEach(btn => {
      btn.classList.remove("active");
    });

    // Remove active class from all content
    contents.forEach(content => {
      content.classList.remove("active");
    });

    // Add active class to clicked button
    button.classList.add("active");

    // Show selected tab content
    const tabId = button.getAttribute("data-tab");

    document.getElementById(tabId).classList.add("active");

  });

});
