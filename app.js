 // The replaceSs function
    function replaceSs(text) {
      if (text.indexOf("ß") !== -1) {
        text = text.replace(/ß/g, "ss");
      }
      return text;
    }

    // Get the form element
    const form = document.getElementById("form");

    // Add an event listener for the submit event
    form.addEventListener("submit", (event) => {
      // Prevent the form from being submitted
      event.preventDefault();

      // Get the text from the textarea
      const text = document.getElementById("text").value;

      // Replace the "ß" characters with "ss"
      let result = replaceSs(text);

      // Highlight the "ß" characters
      result = result.replace(/ß/g, '<span class="highlight">ß</span>');

      // Display the result
      document.querySelector(".result-code > code").innerHTML = result;
    });

    // Get the copy button
    const copyButton = document.getElementById("copy-button");

    // Add an event listener for the click event
    copyButton.addEventListener("click", () => {

      // Get the result code element
      const code = document.querySelector(".result-code > code");

      // Select the text in the code element
      const range = document.createRange();
      range.selectNode(code);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      // Copy the selected text to the clipboard
      document.execCommand("copy");

      // Remove the selected text
      window.getSelection().removeAllRanges();

      // Display a message to the user
      alert("The code has been copied to the clipboard.");

      // Clear the text in the code element and from the textarea if copied succesfully
      code.innerHTML = "";
      document.getElementById("text").value = "";
    });
