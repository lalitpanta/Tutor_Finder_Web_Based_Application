 //yo chai registration form lai popup garaune
 document.addEventListener('DOMContentLoaded', function () {
    const signupBtn = document.getElementById('tutorRegistrationBtn'); 
    const popupIframe = document.getElementById('popupIframe');
    const closeButton = document.getElementById('closeButton');


    popupIframe.style.display = 'none';

    signupBtn.addEventListener('click', function (event) {
        event.preventDefault(); 

        popupIframe.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        popupIframe.style.display = 'none';
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('signupbtn');

    logoutBtn.addEventListener('click', function () {

        window.location.href = '/public/index.html'; 
        
    
        const logoutMessage = document.createElement('div');
        logoutMessage.textContent = 'Logout successful';
        logoutMessage.classList.add('logout-message');
        document.body.appendChild(logoutMessage);

       
        setTimeout(function () {
            logoutMessage.remove();
        }, 3000);
    });
});


//home ma click garda home page dekhauxa
document.addEventListener('DOMContentLoaded', function() {
    // Get the home button
    const homeButton = document.querySelector('.navbar a[href="#"]');
    
    homeButton.addEventListener('click', function(event) {
        event.preventDefault();

        window.location.href = '/public/index.html'; 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('signupbtn');
    logoutButton.addEventListener('click', function() {
        alert('Are you sure to logout');
        window.location.href = '/public/index.html';
    });
});











