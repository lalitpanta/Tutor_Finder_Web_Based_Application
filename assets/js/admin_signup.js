
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signinForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Collect form data
        const name = form.querySelector('input[name="name"]').value.trim(); // Get name input value
        const email = form.querySelector('input[name="email"]').value.trim();
        const password = form.querySelector('input[name="password"]').value.trim();


        if (email && password && name) {
            const formDataObject = { name, email, password}; 

        
            fetch('http://localhost:4000/adminSignup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(formDataObject), 
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                    alert('please try again......');
                }
                return response.json(); 
            })
            .then(data => {
                console.log('Data stored successfully in the database:', data);

                form.reset();
                alert('Sign up successful!');
            
                
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
                alert('Sign up failed. Please try again.');
            });
        } else {
           
            alert('Please provide all required information.');

        }
    });
});
