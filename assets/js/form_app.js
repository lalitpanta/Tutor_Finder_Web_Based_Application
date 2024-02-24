document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // form ko data collect gareko
        const formData = new FormData(form);

        // json ma convert gareko
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        // json data lai console ma print gareko
        console.log('Posted Data:', jsonData);

       
        const apiUrl = 'http://localhost:4000/addTutorInfo';

       
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        };

        fetch(apiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                form.reset();
                // Show the form box again
                form.style.display = 'block';
               
                console.log('Data posted successfully:', data);
                alert('form submitted successfully.');
               
            })
            .catch(error => {
                
                console.error('There was a problem posting the data:', error);
                alert('Network problem try again.....');
            });
            
    });
});




