// yo chai tutor lai delete garna lai api fetch gareko 
window.deleteTutor = function (email) {
    const confirmDelete = confirm('Are you sure you want to delete this tutor?');
    if (confirmDelete) {
        fetch('http://localhost:4000/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
                alert('Network response was not ok');
            }
        
            const row = document.querySelector(`tr[data-id="${email}"]`);
            if (row) {
                row.remove();
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            alert('Tutor deleted successfully');
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            alert('Failed to delete tutor');
        });
    }
};
