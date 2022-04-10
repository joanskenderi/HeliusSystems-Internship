// CHECKIN / CHECKOUT DATES POP OUT
$(document).ready(function () {
  $(function () {
    $("#checkin-date").hide();
    $("#checkout-date").hide();

    $("input[name=way]:radio").click(function () {
      if ($("input[name=way]:checked").val() == "1") {
        $("#checkout-date").hide();
        $("#checkin-date").show();
      } else if ($("input[name=way]:checked").val() == "2") {
        $("#checkin-date").show();
        $("#checkout-date").show();
      }
    });
  });

  // VALIDATION

  // Name Validation
  $("#fname").on("blur", function () {
    if ($(this).val().match("^[a-zA-Z]{3,16}$")) {
      alert("Valid name");
    } else {
      alert("That's not a name");
    }
  });

  // Email Validation
  // function validateEmail($email) {
  //   var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  //   return emailReg.test($email);
  // }

  // Phone Number Validation
});
