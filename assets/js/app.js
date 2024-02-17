document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message'); // Add an element with id="message" in your HTML to display the message

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Collect form data
        const email = form.querySelector('input[name="email"]').value.trim();
        const password = form.querySelector('input[name="password"]').value.trim();

        // Check if email and password are provided


        if (email && password) {
            const formDataObject = { email, password };
const data = {
  email: 'email',
  password: 'password'
};
            // Fetch API endpoint
            fetch('http://localhost:4000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Specify content type
                },
                // body: JSON.stringify(data),
                
                body: JSON.stringify(formDataObject), // Convert form data to JSON
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse JSON response
            })
            .then(data => {
                console.log('Data posted successfully:', data);
                // Open the dashboard page only if data is successfully posted
                openDashboard(data); // Pass the data to the dashboard function
                // Optionally, you can reset the form after successful post
                form.reset();
                // Show a success message
                message.textContent = 'Login successful!';
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
                // Handle errors or display error messages as needed
                message.textContent = 'Login failed. Please try again.';
            });
        } else {
            // Show a message if email or password is not provided
            message.textContent = 'Please provide both email and password.';
        }
    });

    // Function to open the dashboard page in the main tab
    function openDashboard(data) {
        // Encode the data as Base64 to pass it through the URL
        const encodedData = btoa(JSON.stringify(data));
        window.location.href = `/public/src/student_dashboard/student.html?data=${encodedData}`;
        // Replace '/public/src/student_dashboard/student.html' with the actual URL of your dashboard page
    }
});





document.addEventListener('DOMContentLoaded', function () {
    const aboutUsLink = document.querySelector('#about');

    aboutUsLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        
        // Redirect to the About Us page
        window.location.href = '/public/pages/about/Aboutus.html';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('btn');
    loginButton.addEventListener('click', function() {
        alert('logging in....');
    });
});




      