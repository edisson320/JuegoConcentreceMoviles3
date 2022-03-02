

//Arreglos para selecionar los iconos o imagenes
let iconos = []
let selecciones = []

generarTablero()

//Funcion html para los iconos en este caso
function cargarIconos() {
    iconos = [

    '<i class="fas fa-dragon" style="font-size:48px;color:black"></i>',
    '<i class="fas fa-ambulance" style="font-size:48px;color:black"></i>',
    '<i class="fas fa-apple-alt" style="font-size:48px;color:black"></i>',
    '<i class="fas fa-mosque" style="font-size:48px;color:black"></i>',
    '<i class="fas fa-frog" style="font-size:48px;color:black"></i>',
    '<i class="fas fa-user-secret" style="font-size:48px;color:black"></i>',
    '<i class="fas fa-bell" style="font-size:48px;color:black"></i>',
    '<i class="fas fa-crosshairs" style="font-size:48px;color:black"></i>',
    '<i class="fas fa-cut" style="font-size:48px;color:black"></i>',
    '<i class="fas fa-glasses" style="font-size:48px;color:black"></i>',
    '<i class="fas fa-book-reader" style="font-size:48px;color:black"></i>',
    '<i class="fas fa-grin-beam-sweat" style="font-size:48px;color:black"></i>'
    ]
}

//Funcion general del tablero 
function generarTablero() {
    cargarIconos()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 24; i++) {

        tarjetas.push(`
        <div class="area-tarjeta" data-tilt onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${iconos[0]}
                </div>
                <div class="cara superior">
                    <i class="far fa-question-circle"></i>
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }

    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

//Funcion para Seleccionar Tarje
function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}
//Funcion para selecionar las imagenes para adivinar, Queda pendiente Hacer el conteo.
function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])

        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            trasera1.style.background = "plum"
            trasera2.style.background = "plum"
        }
    }, 1000);
}
