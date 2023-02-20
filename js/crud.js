var Fila = null
function onSubmit() {
        let DataForm = Leer()
        if (Fila == null){
            InsertarDatos(DataForm)
        } else{
            Actualizar(DataForm)
            Vaciar()
    }
}

function operaciones (){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);
    var n5 = parseFloat(document.getElementById("n5").value);
    var mat=new Array ([n1, n3, n5],[n2, n4, 0]);
    var ba = ((mat[1][0]*mat[0][1])-(mat[1][1]*mat[0][0]))/mat[1][0];   
    var bb = ((mat[1][0]*mat[0][2])-(mat[1][2]*mat[0][0]))/mat[1][0];  
    var ca = ((ba*mat[1][1])-(bb*mat[1][0]))/ba;  
    var matriz = new Array ([n1, n3, n5], [n2, n4, 0], [ba, bb, 0], [ca, 0, 0], [bb, 0,0])
    console.log(matriz)     
    var vec = new Array (n1, n2, ba, ca, bb)
    for (var i = 0; i < 5; i++) { 
        if (vec[i]<0){
            var a = "inestable"
            return "Inestable"
        }        
      }
    if (a == null){
            return "Estable"
    }
}

function Leer() {
    let DataForm = {}
    DataForm["n1"] = document.getElementById("n1").value
    DataForm["n2"] = document.getElementById("n2").value
    DataForm["n3"] = document.getElementById("n3").value
    DataForm["n4"] = document.getElementById("n4").value
    DataForm["n5"] = document.getElementById("n5").value
    return DataForm
}

function InsertarDatos(data) {
    let table = document.getElementById("tabla")
    let Fila = table.insertRow(table.length)
    columna1 = Fila.insertCell(0).innerHTML = data.n1
    columna2 = Fila.insertCell(1).innerHTML = data.n2
    columna3 = Fila.insertCell(2).innerHTML = data.n3
    columna3 = Fila.insertCell(3).innerHTML = data.n4
    columna3 = Fila.insertCell(4).innerHTML = data.n5
    columna3 = Fila.insertCell(5).innerHTML = `<input class="submit" type="button" onClick="Editarr(this)" value="Editar" ><br><input class="submit" type="button" onClick="Borrarr(this)" value="Borrar" >`
    columna3 = Fila.insertCell(6).innerHTML = operaciones();
    document.getElementById("n1").focus()
    Vaciar()
}
function Vaciar() {
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
    document.getElementById("n3").value = ""
    document.getElementById("n4").value = ""
    document.getElementById("n5").value = ""
    table = null
}
function Editarr(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("n1").value = Fila.cells[0].innerHTML
    document.getElementById("n2").value = Fila.cells[1].innerHTML
    document.getElementById("n3").value = Fila.cells[2].innerHTML
    document.getElementById("n4").value = Fila.cells[3].innerHTML
    document.getElementById("n5").value = Fila.cells[4].innerHTML
}
function Actualizar(DataForm) {
    Fila.cells[0].innerHTML = DataForm.n1
    Fila.cells[1].innerHTML = DataForm.n2
    Fila.cells[2].innerHTML = DataForm.n3
    Fila.cells[3].innerHTML = DataForm.n4
    Fila.cells[4].innerHTML = DataForm.n5
    document.getElementById("n1").focus()
}
function Borrarr(td) {
    if (confirm('¿Seguro de borrar este registro?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla").deleteRow(row.rowIndex)
        Vaciar()
    }
}
function presionar(){
    res=document.getElementById("resultado")
    res.innerHTML=a;
}

