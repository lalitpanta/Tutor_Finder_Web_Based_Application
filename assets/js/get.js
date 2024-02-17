
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('searchh');
    
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting normally
    
            // Collect form data
            const formData = new FormData(form);
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });
    
            // Fetch API endpoint
            fetch('http://localhost:4000/getTutor', {
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
                console.log('Data posted successfully:', data);
                const userDataContainer = document.getElementById('userdata');
                userDataContainer.innerHTML = ""; // Clear previous content
    
                // Loop through each info object and create HTML elements to display data
                data.info.forEach(info => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${info.name}</td>
                        <td>${info.subjectName}</td>
                        <td>${info.email}</td>
                        <td>${info.dob}</td>
                        <td>${info.phone}</td>
                        <td>${info.gender}</td>
                        <td>${info.address}</td>
                        <!-- Add more fields as needed -->
                    `;
                    userDataContainer.appendChild(row);
                });

               
                // Do something with the response data if needed
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
        });
    });
    

    // document.addEventListener('DOMContentLoaded', function () {
    //     const form = document.getElementById('searchForm');
    
    //     form.addEventListener('submit', function (event) {
    //         event.preventDefault(); // Prevent the form from submitting normally
    
    //         // Collect form data
    //         const formData = new FormData(form);
    //         const formDataObject = {};
    //         formData.forEach((value, key) => {
    //             formDataObject[key] = value;
    //         });
    
    //         // Fetch API endpoint
    //         fetch('http://localhost:4000/getTutor', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json', // Specify content type
    //             },
    //             body: JSON.stringify(formDataObject), // Convert form data to JSON
    //         })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json(); // Parse JSON response
    //         })
    //         .then(data => {
    //             console.log('Data posted successfully:', data);
    //             const userDataContainer = document.getElementById('userdata');
    //             userDataContainer.innerHTML = ""; // Clear previous content
    
    //             // Loop through each info object and create HTML elements to display data
    //             data.info.forEach(info => {
    //                 const row = document.createElement('tr');
    //                 row.innerHTML = `
    //                     <td>${info.name}</td>
    //                     <td>${info.dob}</td>
    //                     <td>${info.email}</td>
    //                     <td>${info.phone}</td>
    //                     <td>${info.gender}</td>
    //                     <td>${info.address}</td>
    //                     <td>${info.subjectName}</td>
    //                 `;
    //                 userDataContainer.appendChild(row);
    //             });
    
    //             // Do something with the response data if needed
    //         })
    //         .catch(error => {
    //             console.error('There was a problem with your fetch operation:', error);
    //         });
    //     });
    // });












    // async function callApi() {
    //     // Data to be sent with the POST request
    //     const postData = {
    //         // Add your data properties here
    //     };
    
    //     const requestOptions = {
    //         method: 'POST', // Specify the HTTP method
    //         headers: {
    //             'Content-Type': 'application/json' // Specify the content type as JSON
    //         },
    //         body: JSON.stringify(postData) // Convert JavaScript object to JSON string
    //     };
    
    //     try {
    //         // Make the POST request
    //         let result = await fetch('http://localhost:4000/getTutor', requestOptions);
            
    //         // Parse the response as JSON
    //         result = await result.json();
            
    //         // Log the result to the console
    //         console.warn(result);
            
    //         // Update the HTML content
    //         document.getElementById('userdata').innerHTML = result["info"][0]
    //             .map((user) =>
    //                 `<tr data-id="${user.email}">
    //                     <td>${user.name}</td>
    //                     <td>${user.dob}</td>
    //                     <td>${user.email}</td>
    //                     <td>${user.phone}</td>
    //                     <td>${user.gender}</td>
    //                     <td>${user.address}</td>
    //                     <td>${user.Subject}</td>
    //                 </tr>`
    //             ).join("");
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // }
    
    // callApi();

