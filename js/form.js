var validate={
    "telefono":/^\+?\(?504\)?-?[1-9]\d{3}-?\d{4}$/,
    "email":  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
    "isEmpty": /^\s*$/,
    "doublespace":/\s{2,}/,
    "nombre":/^[a-zA-Z ]{2,30}$/,
    "edad":/^([0-9])*$/
};


var formInputs={
    txtName:null,
    txtTelefono:null,
    txtCorreo:null,
    txtEdad:null
};
var formInputsErrors={
    txtName:null,
    txtTelefono:null,
    txtCorreo:null,
    txtEdad:null
};

document.addEventListener("DOMContentLoaded", function(e){
    formInputs.txtName=document.getElementById("txtName");
    formInputsErrors.txtName= document.getElementById("txtNameError");
    formInputs.txtCorreo=document.getElementById("txtCorreo");
    formInputsErrors.txtCorreo= document.getElementById("txtCorreoError");
    formInputs.txtEdad=document.getElementById("txtEdad");
    formInputsErrors.txtEdad= document.getElementById("txtEdadError");
    formInputs.txtTelefono=document.getElementById("txtTelefono");
    formInputsErrors.txtTelefono= document.getElementById("txtTelefonoError");
    formInputs.txtEdad=document.getElementById("txtEdad");
    formInputsErrors.txtEdad= document.getElementById("txtEdadError");
    formInputs.txtName.addEventListener("keyup", inputOnChange);
    formInputs.txtCorreo.addEventListener("keyup", inputOnChange);
    formInputs.txtEdad.addEventListener("keyup", inputOnChange);
    formInputs.txtTelefono.addEventListener("keyup", inputOnChange);
    
    document.getElementById("formulario").addEventListener("submit",inputOnChange);
    
});

function inputOnChange(e){
    var className="";
    formInputsErrors.txtName.className = "hide";
    formInputsErrors.txtName.innerHTML = "";
    formInputsErrors.txtTelefono.className = "hide";
    formInputsErrors.txtTelefono.innerHTML = "";
    formInputsErrors.txtEdad.className = "hide";
    formInputsErrors.txtEdad.innerHTML = "";
    formInputsErrors.txtCorreo.className = "hide";
    formInputsErrors.txtCorreo.innerHTML = "";
    switch(e.target.name){
        case "txtName":
            className = (validate.doublespace.test(e.target.value))?"error":"";
            if(className=="error"){
            formInputsErrors.txtName.innerHTML = "No use doble espaciado";
            formInputsErrors.txtName.className = "show";
            }
            className = (validate.nombre.test(e.target.value))?"":"error";
            if(className=="error"){
                formInputsErrors.txtName.innerHTML = "Ingrese un nombre válido";
                formInputsErrors.txtName.className = "show";
                }
                className = (validate.isEmpty.test(e.target.value))?"error":"";
                if(className=="error"){
                    formInputsErrors.txtName.innerHTML = "No deje campos vacios";
                    formInputsErrors.txtName.className = "show";
                    }
            break;
        case "txtCorreo":
                className = (validate.email.test(e.target.value))?"":"error";
                if(className=="error"){
                    formInputsErrors.txtCorreo.innerHTML = "Ingrese un correo electrónico válido";
                    formInputsErrors.txtCorreo.className = "show";
                    } 
                    className = (validate.isEmpty.test(e.target.value))?"error":"";
                    if(className=="error"){
                        formInputsErrors.txtCorreo.innerHTML = "No deje campos vaciós";
                        formInputsErrors.txtCorreo.className = "show";
                        } 
                        className = (validate.doublespace.test(e.target.value))?"error":"";
                        if(className=="error"){
                            formInputsErrors.txtCorreo.innerHTML = "No use doble espaciados";
                            formInputsErrors.txtCorreo.className = "show";
                            }    
            break;    
        case "txtEdad":
            className = (validate.edad.test(e.target.value))?"":"error";
            if(className=="error"){
                formInputsErrors.txtEdad.innerHTML = "Ingrese solo números";
                formInputsErrors.txtEdad.className = "show";
                } 
                className = (validate.isEmpty.test(e.target.value))?"error":"";
                if(className=="error"){
                    formInputsErrors.txtEdad.innerHTML = "No deje campos vaciós";
                    formInputsErrors.txtEdad.className = "show";
                    } 
                    className = (validate.doublespace.test(e.target.value))?"error":"";
                    if(className=="error"){
                        formInputsErrors.txtEdad.innerHTML = "No use doble espaciados";
                        formInputsErrors.txtEdad.className = "show";
                        }   
                break;
        case "txtTelefono":
            className = (validate.telefono.test(e.target.value))?"":"error";
            if(className=="error"){
                formInputsErrors.txtTelefono.innerHTML = "Ingrese un número teléfonico correcto";
                formInputsErrors.txtTelefono.className = "show";
                } 
                className = (validate.isEmpty.test(e.target.value))?"error":"";
                if(className=="error"){
                    formInputsErrors.txtTelefono.innerHTML = "No deje campos vaciós";
                    formInputsErrors.txtTelefono.className = "show";
                    } 
                    className = (validate.doublespace.test(e.target.value))?"error":"";
                    if(className=="error"){
                        formInputsErrors.txtTelefono.innerHTML = "No use doble espaciados";
                        formInputsErrors.txtTelefono.className = "show";
                        }  
    }   
    }

    function suscripcion(e){
        if(formInputsErrors.txtName.className=="show" ||formInputsErrors.txtEdad.className=="show" ||formInputsErrors.txtCorreo.className=="show" || formInputsErrors.txtTelefono.className=="show"){
            alert("Oh no! Parece que no ingreso datos válidos");
        }else{
        alert("Se ha suscrito correctamente a Carolina's Joyeria");
        }
    }
