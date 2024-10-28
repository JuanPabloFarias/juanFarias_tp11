let perfil = "administrador"

function verificacion(){
    usuario = perfil;
    switch (usuario) {
        case " ":
            console.log("Debe especificar el perfil del usuario")
        break;
        case "administrador":
        case "ADMINISTRADOR":
        case "Administrador":
            console.log("Usted tiene todos los privilegios de uso del sistema");
        break;
        case "asistente":
        case "ASISTENTE":
        case "Asistente":
            console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
        break;
        case "invitado":
        case "INVITADO":
        case "Invitado":
            console.log("Usted sólo tiene permisos de consultar datos");
        break;
        default:
            console.log("Debe especificar un perfil válido");
            break;
    }
}

perfil = "administrador"
verificacion()
perfil = "ASISTENTE"
verificacion()
perfil = "Invitado"
verificacion()
perfil = " "
verificacion()
perfil = "ejemplo de perfil no valido"
verificacion()



