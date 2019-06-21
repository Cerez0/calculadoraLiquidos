(function(){
'use-strict';

    document.addEventListener('DOMContentLoaded', function(){


        // Datos

        var cantidadAroma = document.getElementById('cantidad-aroma');
        var porcentajeAroma = document.getElementById('porciento-aroma');
        var resultado = document.getElementById('pResultado');
        var resultado2 = document.getElementById('pResultado2');

        var cantBase = document.getElementById('cant-base');
        var porPg = document.getElementById('por-pg-gv');
        var pg = document.getElementById('pg');
        var gv = document.getElementById('gv');

        

        // Botones

        var btnResultadoLiquido = document.getElementById('btnPorAroma');
        var btnResultadoBase = document.getElementById('btn-por-pg');
        var bntPorcentajes = document.getElementById('por-pg-gv');
        
        
        btnResultadoLiquido.addEventListener('click', resultadoLiquido);
        btnResultadoBase.addEventListener('click', resultadoBase);
        bntPorcentajes.addEventListener('mousemove', porcentajes);
        bntPorcentajes.addEventListener('touchmove', porcentajes);

        pg.innerHTML = bntPorcentajes.value + '%';
        gv.innerHTML = (100 - bntPorcentajes.value) + '%';
        

        // Funciones //

        function resultadoLiquido(){

            let resultPorAroma = porcentajeAroma.value;
            let resultCantAroma = cantidadAroma.value;
            console.log('Porcentaje:' + resultPorAroma);
            console.log('Cantidad:' + resultCantAroma);

            let totalLiquido = (resultCantAroma * 100)/resultPorAroma;

            let totalLiquido2 = (totalLiquido * resultPorAroma)/100;
            let totalLiquido3 = (totalLiquido - totalLiquido2);

            resultado.innerHTML = '';
            resultado2.innerHTML = '';
            resultado.innerHTML += 'Con ' + resultCantAroma + 'ml de Aroma al ' + resultPorAroma + '%' + ', puedes hacer un maximo de ' + totalLiquido.toFixed() + 'ml de E-Liquid.'; 
            resultado2.innerHTML += 'Si quieres fabricar ' + totalLiquido.toFixed() + 'ml de E-Liquid tienes que mezclar ' + totalLiquido2.toFixed() + 'ml de Aroma y ' +  totalLiquido3.toFixed(0) + 'ml de Base.';
                
            // console.log('Porcentaje:' + resultPorAroma);
            // console.log('Cantidad:' + resultCantAroma);
            // console.log('totalLiquido:' + totalLiquido);
            // console.log('totalLiquido2:' + totalLiquido2);
            // console.log('totalLiquido3:' + totalLiquido3);     
        }

        function resultadoBase(){

            let resultCantBase = cantBase.value;
            let resultPorPg = porPg.value;
            let resultPorGv = 100 - resultPorPg;

            let totalPg = (resultPorPg * resultCantBase)/100;
            let totalGv = (resultCantBase - totalPg);

            resultado.innerHTML = '';
            resultado2.innerHTML = '';
            resultado.innerHTML += 'Si quieres fabricar ' + resultCantBase +'ml de Base al ' + resultPorPg + '% de PG y ' + resultPorGv + '% de GV.';
            resultado2.innerHTML += 'Tienes que echar ' + totalPg + 'ml de PG y ' + totalGv + 'ml de GV.'

            
        }

        function porcentajes(){
            mostrarPorcentajes();
        }

         function mostrarPorcentajes(){


            let resultCantBase = cantBase.value;
            let resultPorPg = porPg.value;
            let resultPorGv = 100 - resultPorPg;

            pg.innerHTML = resultPorPg;
            gv.innerHTML = resultadoBase;

            pg.innerHTML = resultPorPg + '%';
            gv.innerHTML = resultPorGv + '%';
            
            console.log(resultCantBase + ' ' + resultPorPg + ' ' + resultPorGv );

         }


    });

})();

// Jquery //

$(function(){

    'use-strict'

    
    $('.contenedor-preguntas div:first').show();
    $('.contenedor-botones-preguntas a').on('click', btnSiguiente);
    $('.contenedor-boton-continuar a').on('click', btnContinuar);
    $('#btn-nicotina').on('click', btnNicotina);

    function btnSiguiente(){

    
        var sig = $(this).attr('href');
        $('.pregunta').fadeOut();
        $(sig).fadeIn();
        console.log(sig);
        return false;

    }

    function btnContinuar(){
        
        
        var sig = $(this).attr('href');
        $('.pregunta').fadeOut();
        $(sig).fadeIn();
        console.log(sig);
        return false;
        
    
    }

    function btnNicotina(){

        var sig = $(this).attr('href');
        $('.pregunta').fadeOut();
        $(sig).fadeIn();
        console.log(sig);
        return false;

    }


});