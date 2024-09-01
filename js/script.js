$(document).ready(function () {
    // Initialize datepicker to field date of birth
    $("#dob").datepicker({ dateFormat: 'dd-mm-yy' });

    // Form submit event handler
    document.getElementById('exerciseForm').addEventListener('submit', function (e) {
        var valid = true;

        // Clear previous error messages
        document.querySelectorAll('.error').forEach(function (el) {
            el.textContent = '';
        });

        // Custom validation for empty fields and other conditions

        // Validate First Name
        var firstName = document.getElementById('firstName').value.trim();
        if (!firstName) {
            valid = false;
            document.getElementById('firstNameError').textContent = 'First Name is required.';
        } else if (/\d/.test(firstName)) {
            valid = false;
            document.getElementById('firstNameError').textContent = 'First Name shouldn’t contain numeric.';
        }

        // Validate Last Name
        var lastName = document.getElementById('lastName').value.trim();
        if (!lastName) {
            valid = false;
            document.getElementById('lastNameError').textContent = 'Last Name is required.';
        } else if (/\d/.test(lastName)) {
            valid = false;
            document.getElementById('lastNameError').textContent = 'Last Name shouldn’t contain numeric.';
        }

        // Validate Mobile Number
        var mobile = document.getElementById('mobile').value.trim();
        if (!mobile) {
            valid = false;
            document.getElementById('mobileError').textContent = 'Mobile Number is required.';
        } else if (!/^\d{10}$/.test(mobile)) {
            valid = false;
            document.getElementById('mobileError').textContent = 'Mobile Number must be exactly 10 digits and shouldn’t contain alphabets.';
        }

        // Validate Email Address
        var email = document.getElementById('email').value.trim();
        if (!email) {
            valid = false;
            document.getElementById('emailError').textContent = 'Email Address is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            valid = false;
            document.getElementById('emailError').textContent = 'Email should contain @ and .';
        }

        // Validate Password and Confirm Password
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        if (!password || !confirmPassword) {
            valid = false;
            document.getElementById('confirmPasswordError').textContent = 'Both Password and Confirm Password are required.';
        } else if (password !== confirmPassword) {
            valid = false;
            document.getElementById('confirmPasswordError').textContent = 'Passwords must match.';
        }

        // Reset previous form values and results if valid
        if (valid) {
            // Collect form values
            var resultTable = document.getElementById('resultTable');
            var tbody = resultTable.querySelector('tbody');
            tbody.innerHTML = ''; // Clear previous results

            var formData = new FormData(document.getElementById('exerciseForm'));
            formData.forEach((value, key) => {
                var row = document.createElement('tr');
                var cell1 = document.createElement('td');
                var cell2 = document.createElement('td');
                cell1.textContent = key;
                cell2.textContent = value;
                row.appendChild(cell1);
                row.appendChild(cell2);//appendchild used to add parent child 
                tbody.appendChild(row);
            });

            resultTable.style.display = 'table'; // Show the result table
            document.getElementById('exerciseForm').reset(); // Reset the form fields
            e.preventDefault(); // Prevent form from actually submitting
        } else {
            e.preventDefault(); // Prevent form submission if not valid
        }
    });
});
