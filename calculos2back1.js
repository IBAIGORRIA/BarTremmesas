var total1;
var abierta;
var totDia = 0;
var desa;
var almu;
var meri;
var cena;
var extras;


/* Creo que esto de declarar las mesas se podria hacer de una manera más corta 
pero es lo que me salió */


/* Funciones de botones. Sirven, pero necesito encontrar la manera de hacerlas globales así cada mesa se habilita individual
 */
function abrirMesa() {
    abierta = true;
    var selectores = document.querySelectorAll('#mesa1 input');
    for (var i = 0; i < selectores.length; i++) {
        selectores[i].disabled = false;
    };
};
var cantPerSent = document.getElementById('perSent');
cantPerSent.addEventListener('blur', validarPersonas);

function validarPersonas() {
    var e = parseInt(cantPerSent.value);
    var cantmax = parseInt(cantPerSent.max);
    if (e == "" && e == undefined && e == NaN) {
        alert("Por favor ingrese una cantidad válida de personas ");
        cantPerSent.focus()
        return 0;
    } else if (e > cantmax) {
        alert("Por favor ingrese una cantidad válida de personas. Esta mesa es de " + cantmax + " personas.")
        cantPerSent.focus()
        return 0;
    }
};


function totMesa1() {
    desa = parseInt(document.getElementById('desayuno').value);
    almu = parseInt(document.getElementById('almuerzo').value);
    meri = parseInt(document.getElementById('merienda').value);
    cena = parseInt(document.getElementById('cena').value);
    extras = parseInt(document.getElementById('extras').value);

    // esto deberia hacer que si está en blanco lo pase a 0, pero no me sale
    //así que tengo que ponerle value = 0

    const ingresos = [desa, almu, meri, cena, extras];
    console.log(ingresos);
    for (var i = 0; i < ingresos.length; i++) {
        if (ingresos[i] === "" && ingresos[i] === NaN && ingresos[i] == undefined) {
            ingresos[i] = "0";
        } else {}
    };
    console.log(ingresos);
    if (abierta === true) {
        total1 = parseInt(desa + almu + meri + cena + extras);
        var calculo = document.getElementById('totMesa1');
        calculo.value = total1;
        return total1;
    } else {
        alert("Por Favor abra la mesa primero");
    };
    abierta = false;
    return total1;
};


function promMesa1() {
    var perSent = parseInt(document.getElementById('perSent').value);
    console.log("el valor persent antes del if" + perSent, "el valor total1 antes del if" + total1);
    if (perSent !== 0 && perSent !== NaN) {
        var promed = parseFloat(total1 / perSent);
        console.log(promed);
        var prom = document.getElementById("promMesa1");
        prom.value = promed;
    } else {
        alert("Ingrese personas sentadas para calcular el promedio!");
    }

};

function cerrarMesa1() {
    totDia += total1;
    var selectores = document.querySelectorAll('#mesa1 input');
    var limpiarTextos = document.querySelectorAll('#results p');
    for (var i = 0; i < selectores.length; i++) {
        document.getElementById("mesa1").reset();
        selectores[i].disabled = true;
        limpiarTextos.innerHTML = " ";
    };
    console.log(desa, almu, meri, cena);
    return totDia;
};

function cerrarDia() {
    console.log(total1, totDia);
    var cierreFinal = document.getElementById('totDia');
    if (totDia !== 0 && totDia !== undefined) {
        cierreFinal.innerHTML = totDia;
    } else {
        cierreFinal.innerHTML = "Aún no se han abierto mesas";
    }

};

function notocar() {
    alert("OH! QUÉ REBELDE!")
};

function notYet() {
    alert('Estas Mesas aún no estan disponibles debido a un problema de codeo. Son bienvenidas las sugerencias')
};

//avers