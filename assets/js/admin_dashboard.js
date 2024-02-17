async function callApi() {
    let result = await fetch('https://jsonplaceholder.typicode.com/users');
    result = await result.json();
    console.warn(result);
    document.getElementById('userdata').innerHTML = result
        .map((user) =>
            `<tr data-id="${user.id}">
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.dob}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.gender}</td>
            <td>${user.address}</td>
            <td>${user.ID}</td>
            <td>${user.ID_no}</td>
            <td>${user.Issued_authority}</td>
            <td>${user.document}</td>
            <td>${user.degree}</td>
            <td>${user.University}</td>
            <td>${user.Institution}</td>
            <td>${user.Cgpa}</td>
            <td>${user.passed_year}</td>
            <td>${user.Subject}</td>
            <td>${user.icense_level}</td>
            <td>${user.license_no}</td>
            <td>${user.Issued_date}</td>
            <td><button onclick="verifyTutor()">verify</button> <button onclick="deleteTutor(${user.id})">Delete</button></td>
            </tr>`
        ).join("");
}
callApi();










// tutor delete garna ko lagi by their tutorid
window.deleteTutor = function (userId) {
    const confirmDelete = confirm('Are you sure you want to delete this tutor?');
    if (confirmDelete) {
        const row = document.querySelector(`tr[data-id="${userId}"]`);
        if (row) {
            row.remove();
        }
    }
};

// message
window.verifyTutor = function () {
    alert('Verify tutor successfully');
};



//logout ko lagi kam garxa
document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logout');

    // Add click event listener to the logout button
    logoutButton.addEventListener('click', function () {
        // Confirm with the user before logging out
        const confirmLogout = confirm('Are you sure you want to log out?');
        if (confirmLogout) {
            // Show a message to the user
            alert('Logout Successful. You have been logged out.');

            // Close the current window
            window.close();
        }
    });
});
