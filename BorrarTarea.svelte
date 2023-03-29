<button on:click={manejadorBorrar}><img src="./public/Borrar.png" alt="">Borrar</button>

<style>

 img {
  height: 1,3rem;
  }
</style>

<script>
import Tarea from "./Tarea.svelte";

export let nuevaTarea1
let id= nuevaTarea1.id

function manejadorBorrar () {
      const tareaJSON = JSON.stringify ({id: nuevaTarea1.id})
      const promesaRespuesta = fetch ("http://localhost:8000/tarefas/",
             {
                method:"DELETE",
                headers: {"Content-Type":"application/json"},
                body: tareaJSON
            }
      )
}
        
</script>


