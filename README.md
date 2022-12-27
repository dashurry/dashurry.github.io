<html>
  <head>
    <title>Replace ß with ss</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  </head>
  <body>
    <h1>Replace ß with ss</h1>
    <form id="form" class="container mt-5">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <label for="text">Enter text:</label><br>
      <textarea id="text" rows="5" class="form-control"></textarea><br>
      <button type="submit" class="btn btn-primary">Replace</button>
    </div>
  </div>
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
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </body>
</html>
