document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Collect form data
        const formData = new FormData(form);

        // Convert form data to JSON
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        // Print the JSON data in the console
        console.log('Posted Data:', jsonData);

        // API endpoint URL
        const apiUrl = 'http://localhost:4000/addTutorInfo';

        // POST request configuration
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        };

        // Send POST request to the API
        fetch(apiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle success response
                console.log('Data posted successfully:', data);
                // You can perform further actions here, such as showing a success message to the user
            })
            .catch(error => {
                // Handle error
                console.error('There was a problem posting the data:', error);
                // You can display an error message to the user or perform any necessary error handling
            });
    });
});
