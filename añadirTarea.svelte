<script>
  import ListaTareas from "./listaTareas.svelte"

let descripcion
let completado = false
let id

let  tareas = [//{
            //id: Date.now(),
            //descripcion: "Este é un exemplo de tarefa",
            //completado: completado
        ]

 function manejadorclick () {
        /*tareas.push({
            id: Date.now(),
            descripcion: descripcion,
            completado: completado
        }*/

        tareas = tareas 

 const nuevaTarea1 = {
            id: Date.now(),
            descripcion: descripcion,
            completado: completado
        }

        
 const promesaRespuesta = fetch ("http://localhost:8000/tarefas/",
             {
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify(nuevaTarea1)
            }
 )
}

function manejadorActualizar () {
    const promesaRespuesta  = fetch ("http://localhost:8000/tarefas/")
    promesaRespuesta.then(reaccionRespuesta)
}

function reaccionRespuesta (respuesta) {
    const promesaDatos= respuesta.json();
    promesaDatos.then(reaccionDatos)
}

function reaccionDatos (datos) {
    tareas = datos
}
       
</script>
<fieldset>

<legend>Tareas a Completar</legend>
<label>
    <span>Descripcion de Tarea:</span> <input type="text" bind:value={descripcion}/>
</label>

<label>
    <span>Completada:</span> <input type="checkbox" bind:checked={completado}/>
</label>

<button on:click={manejadorclick}>Añadir tarea</button>
<button on:click={manejadorActualizar}>Actualizar</button>

</fieldset>


<ListaTareas nuevaTarea={tareas}/>
