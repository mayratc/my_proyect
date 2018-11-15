function Ingresar() {
    nombre = document.getElementById("txt_nombre").value;

    document.getElementsByName("nombre")[0].innerHTML = nombre;

    var conca = "";
    for (let i = 0; i < nombre.length; i++) {
        if (i == 0) {
            conca = nombre.charAt(i).toUpperCase();
        }
        else {
            conca = conca + nombre.charAt(i).toLowerCase();
        }

    }
    document.getElementsByName("nombre")[0].innerHTML = conca;
    document.getElementsByName("formulario")[0].style.display='none';
    document.getElementsByName("formulario")[1].style.display='block';
}
function bebidas() {
    document.getElementsByName("formulario")[1].style.display = 'none';
    document.getElementsByName("formulario")[2].style.display = 'block';
    document.getElementsByName("formulario")[4].style.display = 'none';

}

function comida() {
     document.getElementsByName("formulario")[1].style.display ='none';
     document.getElementsByName("formulario")[3].style.display ='block';
     document.getElementsByName("formulario")[4].style.display = 'none';
}
function calcular() {

    var total;
    var a = parseInt(document.querySelector('input[name="respuesta0"]:checked').value);
    var b = parseInt(document.querySelector('input[name="respuesta1"]:checked').value);
    var c = parseInt(document.querySelector('input[name="respuesta2"]:checked').value);

    total = a + b + c;

    var conca = "";
    var correcta = 0;
    var incorrecta = 0;

    if (a == 0) {
        incorrecta++;
    } else {
        correcta++;
    }

    if (b == 0) {
        incorrecta++;
    } else {
        correcta++;
    }

    if (c == 0) {
        incorrecta++;
    } else {
        correcta++;
    }

    document.getElementsByName("correcta")[0].innerHTML = correcta ;
    document.getElementsByName("incorrecta")[0].innerHTML = incorrecta ;
    document.getElementsByName("formulario")[2].style.display="none";
    document.getElementsByName("formulario")[4].style.display="block";
    document.getElementsByName("formulario")[3].style.display="none"
    document.getElementsByName("formulario")[4].style.display="block";




}
function sumarPuntos() {


    try {
        var a = parseInt(document.querySelector('input[name="respuesta0"]:checked').value);
        var b = parseInt(document.querySelector('input[name="respuesta1"]:checked').value);
        var c = parseInt(document.querySelector('input[name="respuesta2"]:checked').value);

        document.getElementsByName('calcular')[0].style.display = "inline";
        document.getElementsByName('calcular')[1].style.display = "inline";
    } catch (error) {
        document.getElementsByName('calcular')[0].style.display = "none";
        document.getElementsByName('calcular')[1].style.display = "none";
    }

    }
    function volver(){

        document.getElementsByName("formulario")[4].style.display="none";
        document.getElementsByName("formulario")[1].style.display='block';
        location.reload();
}
