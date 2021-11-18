/*const ex1button = document.querySelector('#ex1button')
if(ex1button){
    ex1button.addEventListener('click' , function(event) {
        const ex1subjects = document.querySelector('#ex1subjects')
        const ex1price = document.querySelector('#ex1price')
        const ex1name = document.querySelector('#ex1name')
        const ex1result = document.querySelector('#ex1result')

        if(ex1subjects && ex1price && ex1name && ex1result){
            let nameValue = ex1name.value
            let subjectsValue = Number(ex1subjects.value)
            let priceValue = Number(ex1price.value)
            var msg = ""

            if(nameValue == '' || subjectsValue == '' || priceValue == ''){
                msg = 'Please fill fields'
            }else{
                let total = calculate(subjectsValue, priceValue)
                msg = 'Hi ' + nameValue + '. Please to pay ' + total
                cleanFields()  
            } 
            ex1result.textContent = msg
        }else{
            alert('Error')
        }
    })
}*/

const button = document.querySelector('#button')
if(button){
    button.addEventListener('click' , function(event) {
        const pasajero = document.querySelector('#pasajero')
        const Ruta = document.querySelector('#input_ruta')
        const result = document.querySelector('#result')
        console.log(Ruta)
        console.log(pasajero)
        console.log(result)
        if(Ruta && pasajero && result){
            let pasajeroValue = pasajero.value
            let RutaValue = Ruta.value
            var msg = ""
            console.log("aqui")
            if(nameValue == '' || RutaValue == ''){
                msg = 'Por fovor llene los campos'
            }else{
                console.log("aqui1")
                if(RutaValue == 'A'){
                    var total = pasajeroValue*1200
                    alert("El dinero recolectado es: " + total)
                }else if(RutaValue == 'B'){
                    total = pasajeroValue*1000
                    alert("El dinero recolectado es: " + total)
                } 
                //result.textContent = msg
            } 
        }else{
            alert('Error')
        }
    })
}