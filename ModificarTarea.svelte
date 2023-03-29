<button on:click={manejadorModificar}><img src="./public/Modificar.png" alt="">Modificar</button>

<style>

 img {
    height: 1,3rem;
  }

</style>


<script>
  import Tarea from "./Tarea.svelte";


export let nuevaTarea1
let editando =false
let descripcion = nuevaTarea1.descripcion

function manejadorModificar () { 
    editando=true 
}
function manejadorGuardar () {
      const tareaJSON = JSON.stringify(nuevaTarea1)
      const promesaRespuesta = fetch ("http://localhost:8000/tarefas/",
             {
                method:"PUT",
                headers: {"Content-Type":"application/json"},
                body: tareaJSON
        })
        editando=false
}

</script>

<div>
    <button on:click={manejadorModificar}>Modificar</button>
    {#if (editando===true)}
    <label>
        Descripcion:
        <input type="text" bind:value={nuevaTarea1.descripcion}>
    </label>
    <label>
        Completada:
        <input type="checkbox" bind:checked={nuevaTarea1.completada}>
    </label>
    <button on:click={manejadorGuardar}>Guardar</button>
    {/if}
</div>