function aterrizarAvion(velocidad, altura){
    if(velocidad > 268 && velocidad < 278 ){
        if(altura > 150 && altura < 300){
            console.log("Avión listo para aterrizar");
        }else{
            console.log("Es necesario estar en una altura entre 150 a 300 metros para poder aterrizar");
        }
    }else{
        console.log("Es necesario estar en una velocidad entre 268 a 278 km/hr para poder aterrizar");
    }
}

aterrizarAvion(270, 180);
aterrizarAvion(270, 100);
aterrizarAvion(200, 180);
aterrizarAvion(200, 100);