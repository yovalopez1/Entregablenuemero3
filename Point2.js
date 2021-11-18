let tipoT = prompt('Ingrese el tipo de trabajador (FIJO O TEMPORAL)')

if(tipoT == "FIJO" || tipoT == "fijo"){
    let nombre = prompt('Ingrese el nombre del trabajador')
    let nHoras = prompt('Ingrese el numero de horas trabajadas')
    let vHoras = prompt('Ingrese el valor hora')
    let deduccion = prompt('Ingrese el total de la deducciones')
    let bonificacion = parseInt(prompt('Ingrese el total bonificaciones'))
    
    let sBruto = parseInt(nHoras*vHoras)
    let sNeto  = parseInt(sBruto - deduccion + bonificacion)
    alert("el nombre del trabajador es: " + nombre + " y su salario es: " + sNeto)
}else if(tipoT == "TEMPORAL" || tipoT == "temporal"){
    let nombre = prompt('Ingrese el nombre del trabajador')
    let nHoras = prompt('Ingrese el numero de horas trabajadas')
    let sNeto = nHoras*6000
    alert("el nombre del trabajador es: " + nombre + "y su salario es: " + sNeto)
}