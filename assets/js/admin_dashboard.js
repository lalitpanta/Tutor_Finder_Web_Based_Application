
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('tutor');

    form.addEventListener('click', function (event) {
        event.preventDefault(); // click nagarda samma form aafai submit hunna

        fetch('http://localhost:4000/getAllTutor', )
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // JSON response dinxa
        })
        .then(data => {
            console.log('Data posted successfully:', data);
            const userDataContainer = document.getElementById('userdata');
            userDataContainer.innerHTML = ""; // purano data lai clear garxa

            //jati data aayo  Loop jastai row haru bharidai janxan 
            data.info.forEach(info => {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${info.id}</td>     
                    <td>${info.name}</td>
                    <td>${info.subjectName}</td>
                    <td>${info.email}</td>
                    <td>${info.dob}</td>
                    <td>${info.phone}</td>
                    <td>${info.gender}</td>
                    <td>${info.address}</td>
                    <td>${info.idType}</td>
                    <td>${info.idNumber}</td>
                    <td>${info.issuedAuthority}</td>
                    <td>${info.document}</td>
                    <td>${info.degree}</td>
                    <td>${info.university}</td>
                    <td>${info.institution}</td>
                    <td>${info.cgpa}</td>
                    <td>${info.passed_year}</td>
                    <td>${info.license}</td>
                    <td>${info.license_no}</td>
                    <td>${info.issued_date}</td>
                    <td>
                        <button onclick="verifyTutor()">Verify</button> 
                        <button id="deleteButton-${info.email}" onclick="deleteTutor('${info.email}')">Delete</button>
                    </td>
                `;
                userDataContainer.appendChild(row);
            });

           
        })
        .catch(error => {
            console.error(' problem in our fetch operation:', error);
            alert('sorry we cant delete tutor.....');
        });
    });
});

// Delete tutor by email
window.deleteTutor = function (email) {
    const confirmDelete = confirm('Are you sure you want to delete this tutor?');
    if (confirmDelete) {
        const row = document.querySelector(`tr[data-id="${email}"]`);
        if (row) {
            row.remove();
        }
    }
};

// Message dinxa verify ko lagi tara hamro post garne bittikai aafai verify hunxa
window.verifyTutor = function () {
    alert('Verify tutor successfully');
};




//logout ko lagi kam garxa
document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logout');

    // logout button ma click garda logout hunxa
    logoutButton.addEventListener('click', function () {
        // Conformation message pathauxa
        const confirmLogout = confirm('Are you sure you want to log out?');
        if (confirmLogout) {
            // yo dummy window dekhauxa
            alert('Logout Successful.......');

        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', function() {
        window.location.href = '/public/admin_login.html';
    });
});












