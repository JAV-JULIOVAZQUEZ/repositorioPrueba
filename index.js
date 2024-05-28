document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (email === '' || password === '') {
        errorMessage.textContent = 'Ambos campos son obligatorios.';
        errorMessage.style.display = 'block';

        
          
      

    } else {
        errorMessage.style.display = 'none';
        // Aquí puedes agregar la lógica para redirigir a otra página
        //alert('Inicio de sesión exitoso!');
        alert('INGRESO EXITOSO');
        // Por ejemplo, redireccionar a otra página
        window.location.href = 'principal.html';
    }
});
        