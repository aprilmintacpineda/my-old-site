(function() {
  // cache
  var senderEmail = document.querySelector('#sender-email');
  var senderEmailErrorContainer = document.querySelector('#sender-email-error');

  var senderMessage = document.querySelector('#sender-message');
  var senderMessageErrorContainer = document.querySelector('#sender-message-error');

  var submitButton = document.querySelector('#send-contact-form');
  var submitButtonErrorContainer = document.querySelector('#send-contact-form-error');

  var formStatus = {
    submitted: false,
    message: ''
  }

  var data = resetData();

  function resetData() {
    return {
      message: {
        value: '',
        error: ''
      },
      email: {
        value: '',
        error: ''
      }
    }
  }

  function resetFields() {
    senderEmail.value = '';
    senderMessage.value = '';
  }

  senderEmail.onkeyup = function(keyupEvent) {
    // change value
    data.email.value = keyupEvent.target.value;
    // validations
    if(!data.email.value.length) {
      data.email.error = 'Email is required.';
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email.value)) {
      data.email.error = 'Your email is invalid.';
    } else {
      data.email.error = '';
    }

    // show error
    senderEmailErrorContainer.textContent = data.email.error;
  }

  senderMessage.onkeyup = function(keyupEvent) {
    // change value
    data.message.value = keyupEvent.target.value;
    // validations
    if(!data.message.value.length) {
      data.message.error = 'Message is required.';
    } else if(data.message.value.length < 100) {
      data.message.error = 'Please type a longer message than that.';
    } else {
      data.message.error = '';
    }

    // show error
    senderMessageErrorContainer.textContent = data.message.error;
  }

  submitButton.onclick = function() {
    if(!formStatus.submitted) {
      // only when not submitting.
      formStatus.message = '';
      submitButtonErrorContainer.textContent = formStatus.message;

      if(data.email.error || data.message.error) {
        formStatus.message = 'Please fix all the errors.';
        submitButtonErrorContainer.textContent = formStatus.message;
      } else if(!data.email.value || !data.message.value) {
        formStatus.message = 'Please fill up the required fields.';
        submitButtonErrorContainer.textContent = formStatus.message;
      } else {
        formStatus.submitted = true;

        fetch('https://formspree.io/aprilmintacpineda@gmail.com', {
          method: 'POST',
          body: JSON.stringify({
            email: data.email.value,
            message: data.message.value
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function(response) {
          formStatus.submitted = false;
          resetFields();
          data = resetData();
          alert('Your message has been sent!');

          console.log(response);
        })
        .catch(function(error) {
          formStatus.submitted = false;
          formStatus.message = error.message;
        });
      }
    }
  }
})();