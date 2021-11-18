let placa = prompt('Ingrese el numero de placa')
let NPasjeros = prompt('Ingrese numro de pasajeros transportados')
let Ruta = prompt('Ingrese la ruta, (A o B)')

if(Ruta == 'A' || Ruta == 'a'){
    var total = NPasjeros*1200
    alert("El dinero recolectado es: " + total)
}else if(Ruta == 'B' || Ruta == 'b'){
    total = NPasjeros*1000
    alert("El dinero recolectado es: " + total)
}
