(function(){
'use-strict';

    document.addEventListener('DOMContentLoaded', function(){


        // Aroma

        var cantidadAroma = document.getElementById('cantidad-aroma');
        var porcentajeAroma = document.getElementById('porciento-aroma');
        var resultado = document.getElementById('pResultado');
        var resultado2 = document.getElementById('pResultado2');

        //Nicotina
        var concentracionNicotina = document.getElementById('nico-lista');
        var cantidadNicotina = document.getElementById('cant-nicotina');        

        //  Base
        var cantBase = document.getElementById('cant-base');
        var porPg = document.getElementById('por-pg-gv');
        var pg = document.getElementById('pg');
        var gv = document.getElementById('gv');

        

        // Botones

        var btnResultadoLiquido = document.getElementById('btnPorAroma');
        var btnResultadoBase = document.getElementById('btn-por-pg');
        var bntPorcentajes = document.getElementById('por-pg-gv');
        var btnRepetir = document.getElementById('btn-reiniciar');
        
        
        btnResultadoLiquido.addEventListener('click', resultadoLiquido);
        btnResultadoBase.addEventListener('click', resultadoBase);
        bntPorcentajes.addEventListener('mousemove', porcentajes);
        bntPorcentajes.addEventListener('touchmove', porcentajes);
        btnRepetir.addEventListener('click', repetir);
        

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
            resultado.innerHTML += 'Con ' + resultCantAroma + 'ml de Aroma al ' + resultPorAroma + '%' + ', puedes hacer un maximo de ' + totalLiquido.toFixed() + 'ml de E-Liquido.'; 
            resultado2.innerHTML += 'Si quieres fabricar ' + totalLiquido.toFixed() + 'ml de E-Liquido tienes que mezclar ' + totalLiquido2.toFixed() + 'ml de Aroma y ' +  totalLiquido3.toFixed(0) + 'ml de Base.';
                
            // console.log('Porcentaje:' + resultPorAroma);
            // console.log('Cantidad:' + resultCantAroma);
            // console.log('totalLiquido:' + totalLiquido);
            // console.log('totalLiquido2:' + totalLiquido2);
            // console.log('totalLiquido3:' + totalLiquido3);     
        }

        function resultadoBase(){

            var conNicotina  = parseInt(concentracionNicotina.value);
            var cantNicotina = cantidadNicotina.value;
            let resultCantBase = cantBase.value;
            let resultPorPg = porPg.value;
            let resultPorGv = 100 - resultPorPg;

            let totalPg = (resultPorPg * resultCantBase)/100;
            let totalGv = (resultCantBase - totalPg);
            

            if (conNicotina == 0){

                let totalPg = (resultPorPg * resultCantBase)/100;
                let totalGv = (resultCantBase - totalPg);

                resultado.innerHTML = '';
                resultado2.innerHTML = '';
                resultado.innerHTML += 'Si quieres fabricar ' + resultCantBase +'ml de Base al ' + resultPorPg + '% de PG y ' + resultPorGv + '% de GV.';
                resultado2.innerHTML += 'Tienes que echar ' + totalPg.toFixed(1) + 'ml de PG y ' + totalGv.toFixed(1) + 'ml de GV.'

            }else{

                let totalNicotina = (cantNicotina * resultCantBase/conNicotina);

                resultado.innerHTML = '';
                resultado2.innerHTML = '';
                resultado.innerHTML += 'Si quieres fabricar ' + resultCantBase +'ml de Base con '+ cantNicotina + 'mg de nicotina al ' + resultPorPg + '% de PG y ' + resultPorGv + '% de GV.';
                resultado2.innerHTML += 'Tienes que echar ' + (totalPg - (totalNicotina/2)).toFixed(1) + 'ml de PG y ' + (totalGv - (totalNicotina/2)).toFixed(1) + 'ml de GV y ' + totalNicotina.toFixed(1) + 'ml de nicotina.';


                console.log(totalNicotina+'ml');
            }
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

        function repetir(){

            concentracionNicotina.value = 0;
            cantBase.value = 0;
            porcentajeAroma.value = 0;
            cantidadAroma.value = 0;
            porPg.value = 50;

        }
    });

})();

// Jquery //

$(function(){

    'use-strict'

    
    $('.contenedor-preguntas div:first').show();
    $('.contenedor-botones-preguntas a').on('click', btnSiguiente);
    $('.contenedor-boton-continuar a').on('click', btnContinuar);

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



});