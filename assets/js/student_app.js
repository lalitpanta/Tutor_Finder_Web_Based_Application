 //yo chai registration form lai popup garaune
 document.addEventListener('DOMContentLoaded', function () {
    const signupBtn = document.getElementById('tutorRegistrationBtn'); // Updated button ID
    const popupIframe = document.getElementById('popupIframe');
    const closeButton = document.getElementById('closeButton');

    // Initially hide the iframe
    popupIframe.style.display = 'none';

    signupBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the anchor link

        popupIframe.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        popupIframe.style.display = 'none';
    });
});



//yo chai logout ma click garda home page ma janxa
document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('signupbtn'); // Updated button ID

    logoutBtn.addEventListener('click', function () {
        // Redirect to the home page
        window.location.href = '/public/index.html'; 
        
        // Display logout message
        const logoutMessage = document.createElement('div');
        logoutMessage.textContent = 'Logout successful';
        logoutMessage.classList.add('logout-message');
        document.body.appendChild(logoutMessage);

        // Remove the logout message after a certain duration (e.g., 3 seconds)
        setTimeout(function () {
            logoutMessage.remove();
        }, 3000); // 3000 milliseconds = 3 seconds
    });
});


//home ma click garda home page dekhauxa
document.addEventListener('DOMContentLoaded', function() {
    // Get the home button
    const homeButton = document.querySelector('.navbar a[href="#"]');
    
    // Add event listener to the home button
    homeButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of the anchor tag

        // You can change the window location to the index file path
        window.location.href = '/public/index.html'; // Change the path as per your file structure
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('signupbtn');
    logoutButton.addEventListener('click', function() {
        alert('Are you sure to logout');
        window.location.href = '/public/index.html';
    });
});











