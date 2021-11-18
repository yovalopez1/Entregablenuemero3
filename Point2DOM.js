const button = document.querySelector('#button')
if(button){
    button.addEventListener('click' , function(event) {
        const tipo = document.querySelector('#input_tTrabajador')
        const nombre = document.querySelector('#input_name')
        const nHoras = document.querySelector('#input_nHoras')
        const vHoras = document.querySelector('#input_vHoras')
        const deduccion = document.querySelector('#input_deduccion')
        const bonificacion = document.querySelector('#input_bonificacion')
        const nombreT = document.querySelector('#input_name')
        const nHorasT = document.querySelector('#input_nHoras')
        console.log(input_bonificacion)
        //console.log(pasajero)
        if(tipo){
            var tipoValue = tipo.value
            var nombreValue = nombre.value
            var nHorasValue = nHoras.value
            var vHorasValue = vHoras.value
            var deduccionValue = deduccion.value
            var bonificacionValue = bonificacion.value
            var nombreTValue = nombreT.value
            var nHorasTValue = nHorasT.value
            console.log("aqui")
            if(nombreValue == '' || nHorasValue == '' || vHorasValue == '' || deduccionValue == '' || bonificacionValue == '' || nombreTValue == '' || nHorasTValue == ''){
                alert("Por fovor llene los campos")
            }else{
                console.log(bonificacion)
                if(tipoValue == "FIJO" || tipoValue == "fijo"){
                    var sBruto = parseInt(nHoras*vHoras)
                    var sNeto  = parseInt(sBruto - deduccion + bonificacion)
                    console.log(sNeto)
                    alert("el nombre del trabajador es: " + nombreValue + " y su salario es: " + sNeto)
                }else if(tipoValue == "TEMPORAL" || tipoValue == "temporal"){
                    sNeto = nHoras*6000
                    alert("el nombre del trabajador es: " + nombreTValue + "y su salario es: " + sNeto)
                }
            } 
        }else{
            alert('Error')
        }
    })
}