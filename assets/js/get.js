
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('searchh');
    
        form.addEventListener('submit', function (event) {
            event.preventDefault(); 
    
            // Collect form data
            const formData = new FormData(form);
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });
    
            fetch('http://localhost:4000/getTutor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(formDataObject), 
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); 
            })
            .then(data => {
                console.log('Data posted successfully:', data);
                const userDataContainer = document.getElementById('userdata');
                alert('please select your tutor for your course');
                userDataContainer.innerHTML = ""; // Clear previous content
    
                
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
                    
                    `;
                    userDataContainer.appendChild(row);
                });

               
                
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
                alert('try again.....!');
            });
        });
    });
    











    
    
