document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signinForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Collect form data
        const name = form.querySelector('input[name="name"]').value.trim(); // Get name input value
        const email = form.querySelector('input[name="email"]').value.trim();
        const password = form.querySelector('input[name="password"]').value.trim();
        const role = form.querySelector('input[name="role"]').value.trim(); // Get role input value

        // Check if email, password, name, and role are provided
        if (email && password && name && role) {
            const formDataObject = { name, email, password, role }; // Include name and role in form data

            // Fetch API endpoint to store user data in the database
            fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Specify content type
                },
                body: JSON.stringify(formDataObject), // Convert form data to JSON
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse JSON response
            })
            .then(data => {
                console.log('Data stored successfully in the database:', data);
                // Optionally, you can reset the form after successful storage
                form.reset();
                // Show a success message
                message.textContent = 'Sign up successful!';
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
                // Handle errors or display error messages as needed
                message.textContent = 'Sign up failed. Please try again.';
            });
        } else {
            // Show a message if any of the fields are not provided
            message.textContent = 'Please provide all required information.';
        }
    });
});
