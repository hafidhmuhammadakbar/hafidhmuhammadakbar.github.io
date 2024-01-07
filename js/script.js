function formValidation() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');
  // Loop over them and prevent submission
  Array.from(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
          } else {
              submitForm();
          }
          form.classList.add('was-validated');
      }, false);
  });
}

function submitForm() {
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let message = document.querySelector('#message').value;        
  const msg = `Hi, I'm ${name} (${email}). ${message}`;
  // Create a mailto link to open the user's default email client with prefilled details
  const mailtoLink = `mailto:hafidhmuhammadakbar1@student.uns.ac.id?subject=Contact%20Form&body=${encodeURIComponent(msg)}`;
  
  // Open the default email client with the prefilled details
  window.location.href = mailtoLink;
}