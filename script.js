document.addEventListener("DOMContentLoaded", function() {
    fetch('../nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            document.querySelector('.hamburger').addEventListener('click', toggleDrawer);
        });
});

document.getElementById('open-modal').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('open-modal-2').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('modal-2').style.display = 'block';
});

document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target == this) {
        this.style.display = 'none';
    }
});

document.getElementById('modal-2').addEventListener('click', function(event) {
    if (event.target == this) {
        this.style.display = 'none';
    }
});

function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    drawer.style.display = drawer.style.display === 'flex' ? 'none' : 'flex';
}