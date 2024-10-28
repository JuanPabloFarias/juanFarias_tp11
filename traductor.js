function traductorCondicional(palabra){
    switch (palabra) {
        case "perro":
            console.log("dog");
            break;
        case "gato":
            console.log("cat");
            break;
        case "ventana":
            console.log("window");
            break;
        case "mesa":
            console.log("table");
            break;
        default:
            console.log("La palabra ingresada es incorrecta");
            break;
    }
}

traductorCondicional("perro");
traductorCondicional("gato");
traductorCondicional("ventana");
traductorCondicional("mesa");
traductorCondicional(2550);