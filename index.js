document.addEventListener("DOMContentLoaded", function () {
    // Selecting elements
    const form = document.querySelector("form");
    const numberInput = form.querySelector('input[name="number"]');
    const addButton = form.querySelector("button");
    const numberBankOutput = document.querySelector("#numberBank output");
    const sortOneButton = document.querySelector("#sortOne");
    const sortAllButton = document.querySelector("#sortAll");
    const oddsOutput = document.querySelector("#odds output");
    const evensOutput = document.querySelector("#evens output");
  
    // Initialize number bank array
    let numberBank = [];
  
    // Function to update number bank display
    function updateNumberBankDisplay() {
      numberBankOutput.textContent = numberBank.join(", ");
    }
  
    // Event listener for "Add Number" button
    addButton.addEventListener("click", function (event) {
      event.preventDefault();
      const enteredNumber = parseFloat(numberInput.value);
  
      if (!isNaN(enteredNumber)) {
        // Add the number to the number bank
        numberBank.push(enteredNumber);
        // Update number bank display
        updateNumberBankDisplay();
      }
  
      // Clear the input field
      numberInput.value = "";
    });
  
    // Event listener for "Sort 1" button
    sortOneButton.addEventListener("click", function () {
      if (numberBank.length > 0) {
        const firstNumber = numberBank.shift(); // Remove the first number
        // Sort the number into odds or evens
        if (firstNumber % 2 === 0) {
          evensOutput.textContent += firstNumber + ", ";
        } else {
          oddsOutput.textContent += firstNumber + ", ";
        }
        // Update number bank display
        updateNumberBankDisplay();
      }
    });
  
    // Event listener for "Sort All" button
    sortAllButton.addEventListener("click", function () {
      // Move all numbers to odds or evens
      numberBank.forEach(function (number) {
        if (number % 2 === 0) {
          evensOutput.textContent += number + ", ";
        } else {
          oddsOutput.textContent += number + ", ";
        }
      });
  
      // Clear the number bank array
      numberBank = [];
      // Update number bank display
      updateNumberBankDisplay();
    });
  });