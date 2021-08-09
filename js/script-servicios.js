(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        
        // INICIO MENU HAMBURGUESA
        const btnMenu = document.getElementById('btnMenu');
        const navegacion = document.getElementById('navegacion');
        btnMenu.addEventListener('click', function(){
            navegacion.classList.toggle('visible');
        }); 
        // FIN MENU HAMBURGUESA

        // INICIO  MODO OSCURO
        const imgLogoPrincipal = document.getElementById('logo-cambiante');
        const imgLogoSecundario = document.getElementById('img-logo-secundario');
        function modoOscuro(){
            document.body.classList.toggle('dark');
        }
        imgLogoPrincipal.addEventListener('click', modoOscuro);
        imgLogoSecundario.addEventListener('click', modoOscuro);
    });
})();