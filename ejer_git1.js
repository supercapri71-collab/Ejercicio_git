obtieneMinuscula=function(){
      let nota1;
     let nota2;
     let cmpResu;
     cmpResu = document.getElementById("txtNota1");
     nota1 = cmpResu.value;
     nota2=parseInt(nota1.charCodeAt(0));
     prome = valeMinu(nota2);
     mostrarTexto("lblProme", prome);
}
