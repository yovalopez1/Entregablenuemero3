const button = document.querySelector('#button')
if(button){
    button.addEventListener('click' , function(event) {
        const pasajero = document.querySelector('#input_Pasajero')
        const Ruta = document.querySelector('#input_ruta')
        console.log(Ruta)
        console.log(pasajero)
        if(Ruta && pasajero){
            let pasajeroValue = pasajero.value
            let RutaValue = Ruta.value
            var msg = ""
            console.log("aqui")
            if(pasajeroValue == '' || RutaValue == ''){
                alert("Por fovor llene los campos")
            }else{
                console.log("aqui1")
                if(RutaValue == 'A'){
                    var total = pasajeroValue*1200
                    alert("El dinero recolectado es: " + total)
                }else if(RutaValue == 'B'){
                    total = pasajeroValue*1000
                    alert("El dinero recolectado es: " + total)
                } 
            } 
        }else{
            alert('Error')
        }
    })
}