(function () {
    const btnEliminacion = document.querySelectorAll(".btnEliminacion");

    btnEliminacion.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            Swal.fire({
                title: '¿Seguro que quieres eliminar el curso?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar'
            }).then((result) => {
                if (result.isConfirmed) {
                    // If the user clicks "Yes", continue with the deletion
                    window.location.href = e.target.getAttribute('href');
                }
            });
        });
    });
})();
