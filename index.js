$(document).ready(function () {
	//override jquery validate plugin defaults
	// http://stackoverflow.com/a/18754780

	$.validator.setDefaults({
    errorElement: "span",
    errorClass: "help-block",
    highlight: function (element, errorClass, validClass) {
        // Only validation controls
        if (!$(element).hasClass('novalidation')) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        }
    },
    unhighlight: function (element, errorClass, validClass) {
        // Only validation controls
        if (!$(element).hasClass('novalidation')) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        }
    },
    errorPlacement: function (error, element) {
        if (element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        }
        else if (element.prop('type') === 'radio' && element.parent('.radio-inline').length) {
            error.insertAfter(element.parent().parent());
        }
        else if (element.prop('type') === 'checkbox' || element.prop('type') === 'radio') {
            error.appendTo(element.parent().parent());
        }
        else {
            error.insertAfter(element);
        }
    }
});

	$("#signup-form").validate({
		rules: {
      fname: {
				required: true,
			},
      lname: {
				required: true,
			},
      country: {
				required: true,
			},
			email: {
				required: true,
				maxlength: 255
			},
      plan: {
				required: true,
			},
			emailConfirm: {
				required: true,
				equalTo: "#email",
				maxlength: 255
			},
			zipCode: {
        required: true,
				maxlength: 32
			},
      username: {
        required: true,
				maxlength: 20
			},
      city: {
        required: true,
			},
			password: {
				required: true,
				minlength: 8
			},
			passwordConfirm: {
				required: true,
				minlength: 8,
				equalTo: "#password"
			},
			termsOfUse: "required"
		},

		messages: {
      country: {
				required: "Please select your country.",
			},
			email: {
				required: "Please enter your email address.",
			},
      username: {
				required: "Please choose a username.",
			},
			emailConfirm: {
				required: "Confirm your email address.",
				equalTo: "Emails do not match."
			},
			password: {
				required: "Please choose a password."
			},
			passwordConfirm: {
				required: "Confirm your password.",
				equalTo: "Passwords do not match."
			},
      plan: {
				required: "Please select a plan.",
			},
			termsOfUse: {
				required: "<br>You must agree to terms of service."
			}
    }
	});
});