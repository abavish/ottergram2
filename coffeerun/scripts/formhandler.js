(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    // Code will go here
    console.log(selector);
    if (!selector) {
      throw new Error("No selector provided");
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log("Set submit handler for form");
    // More code will go here
    this.$formElement.on("submit", function(event) {
      event.preventDefault();
      var data = {};
      if (fn == "[data-payment=\"form\"]") {
        //additional check for form selector of payment format
        console.log("Validating Payment");
        $(this).serializeArray().forEach(function(item) {
          data[item.name] = item.value;
        });

        //dynamic html markup
        var $div = $("<div></div>", {
          id: "payment-modal",
          "class": "modal"
        });

        var message = "Thank you for your payment, " + data.title + " " + data.username;
        $div.append(message);
        $("#payment").append($div);
        $("#payment-modal").modal();

      } else {
        $(this).serializeArray().forEach(function(item) {
          data[item.name] = item.value;
          console.log(item.name + " is " + item.value);
        });
        console.log(data);
        fn(data);
      }
      this.reset();
      this.elements[0].focus();
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
