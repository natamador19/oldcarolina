function validarCorreo(Correo){
    var correo= /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var esValido=correo.test(Correo);
    console.log(esValido);
    if(esValido==true){
        alert('El correo electrónico es válido');
    }
    else
    {
        alert('El correo electrónico no es válido')
    }
}

