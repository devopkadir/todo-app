let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");
let inputText = document.getElementById("inputText");
let addedTodo = document.getElementById("addedTodo");

addBtn.addEventListener("click", () => {
  event.preventDefault();
  let newP = document.createElement("p");
  newP.classList.add("newP");
  addedTodo.appendChild(newP);
  newP.innerHTML = inputText.value;
  inputText.value = "";

  newP.addEventListener("click", () => {
    newP.style.textDecoration = "line-through";
  });

  newP.addEventListener("dblclick", () => {
    newP.remove();
  });

  clearBtn.addEventListener("click", () => {
    newP.remove();
  });
});

// ! Input tag first word's first letter is Uppercase
document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM content to be fully loaded

  // Get the input element
  let inputText = document.getElementById("inputText");

  // Add an event listener to the input element for when the user types
  inputText.addEventListener("input", function () {
    // Get the current value of the input
    let inputValue = inputText.value;

    // Capitalize the first letter
    inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);

    // Set the modified value back to the input
    inputText.value = inputValue;
  });
});
