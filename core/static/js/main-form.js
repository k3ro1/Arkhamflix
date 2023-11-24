function valForm(){
    console.log("Acceso establecido")
    var vNom = $('#nombre').val();
    var vMail = $('#correo').val();
    var vMensaje = $('mensaje').val();


    if(vNom == "" || vNom == null){
        Err_color("nombre");
        Err_contenido("nombre");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(vNom)){
            Err_color("nombre");
            Err_contenido("No se permiten caracteres especiales");
            return false;
        }
    }
    //Validar campo correo
    if(vMail=="" || vMail==null){
        Err_color("Correo");
        Err_contenido("Correo");
        return false;   
    }else{
        var expresion= /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;
        if(!expresion.test(vMail)){
            Err_color("correo");
            Err_contenido("correo valido");
            return false;
        }
    }

}


function Err_color(id_div){
    alert("Es invalido el "+id_div);
    $('#'+id_div).css('border','1px solid red');
}

function Err_contenido(dato){
    alert("Ingrese un "+dato);
}


function ColorDefault(id_div){
   $('#'+id_div).css('border','1px solid #999');
}

//Queda en memoria 
$('input').focus(function(){
    ColorDefault('nombre');
    ColorDefault('correo');
    ColorDefault('mensaje');
})