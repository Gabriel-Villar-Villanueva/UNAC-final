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


        //INICIO FORMULARIO EFECTO PARA EL BOTON SUBMIT
        const radio1 = document.getElementById('acepto');
        const radio2 = document.getElementById('noacepto');
        const box = document.getElementById('box-opacity');
        const btnSubmit = document.getElementById('btn-submit');

        function validate(){  
            if(radio1.checked){
                btnSubmit.disabled = false;
                btnSubmit.classList.add('btn-submit-cambiado');
                box.classList.add('box-visible');
            }
            else if(radio2.checked){
                btnSubmit.disabled = true;
                btnSubmit.classList.remove('btn-submit-cambiado');
                box.classList.remove('box-visible');
            }
        }

        radio1.addEventListener('click', validate);
        radio2.addEventListener('click', validate);
        // FIN FORMULARIO EFECTO PARA EL BOTON SUBMIT

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


        