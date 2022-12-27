<!DOCTYPE html>
<html>
  <head>
    <title>Replace ß with ss</title>
  </head>
  <body>
    <h1>Replace ß with ss</h1>
    <form id="form">
      <label for="text">Enter text:</label><br>
      <textarea id="text" rows="5" cols="50"></textarea><br>
      <button type="submit">Replace</button>
    </form>
    <div id="result"></div>
    <script>
      // The replaceSs function from the previous example
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
        const result = replaceSs(text);

        // Display the result
        document.getElementById("result").innerHTML = result;
      });
    </script>
  </body>
</html>
