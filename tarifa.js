function ajusteTarifaEnergia(pagoMes, consumoKWH){
consumoKWH > 300 ? resultado = pagoMes * 0.20 + pagoMes : null;

if(consumoKWH > 300){
    console.log(`Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, en base al ajuste
        tarifario (hogares con consumo mayor a 300kwh por mes tendrán un
        aumento del 20%), cumplimos con informarle que se ha ajustado el total a
        pagar, que será de ${resultado}`);
}
}

ajusteTarifaEnergia(46000, 450);



