import express from "express"
import cors from "cors"

// Creamos e configuramos a aplicación de Express
const app = express()
app.use(cors()) // Aceptar peticións desde outras URL
app.use(express.json()) // Manexar os datos recibidos como JSON

// O noso almacen de datos.
// Normalmente en lugar do array atoparemos unha base de datos.
let tarefas = [
    {
        id: 0,
        descripcion: "Unha tarefa de exemplo",
        completado: true,
    }
]

// Definicions de endpoints
app.post("/tarefas/", controladorPost)
app.get("/tarefas/", controladorGet)
app.put("/tarefas/", controladorPut)
app.delete("/tarefas/", controladorDelete)

// Controladores executados polos endpoints
function controladorPost (peticion, respuesta) {
    tarefas.push(peticion.body)
    respuesta.status(201)
    respuesta.send("Ok")
}

function controladorGet (peticion, respuesta) {
    respuesta.status(200)
    respuesta.send(JSON.stringify(tarefas))
}


function controladorPut (peticion, respuesta){
    //console.log (peticion.body)

    let posicion= tarefas.findIndex (function(estaTarea) {
        return estaTarea.id === peticion.body.id
    })

    console.log(posicion)
    tarefas.splice(posicion,1,peticion.body)
    console.log(posicion)
    respuesta.status(200)
    respuesta.send("Todo bien :)")
}


function controladorDelete (peticion, respuesta) {
    let posicion= tarefas.findIndex (
        function (estaTarea) {
        return estaTarea.id === peticion.body.id
    }
)

    tarefas.splice(posicion,1,)
    respuesta.status(200)
    respuesta.send("Eliminada")
}




// ahora el splice para modificar la posicion pero tenemos que crear la tare en Insomnia
// para probarlo creamos una peticion de tippo hhtp rest metodo put y apunta dire
//cion de backend y JSON, modificar tarea (id,desc,rema)
// send insertamos post, hacemos get, y probamos si esta modificada o no
//y ahora miramos console log

//Ahora creamos el PUT
//Ahora el delete





// Posta en marcha da aplicación de Express
app.listen( 8000, function () {
    console.log("Express traballando...");
})