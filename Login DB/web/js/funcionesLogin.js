/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function borrarDatosEspecificos(){
    var txtUsuario = document.getElementById("txtUsuario"); 
    txtUsuario.value = "";
    
    document.getElementById("txtcontrasena").value = "";
}

function resetearFormularioLogin(){
    document.getElementById("formularioLogin").reset(); 
}