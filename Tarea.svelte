<script>
  import ListaTareas from "./listaTareas.svelte";
  import nuevaTarea1 from "./añadirTarea.svelte";
export let  tarea

</script>
<label>
    <span>{tarea.descripcion}</span>
    <input type="checkbox"checked={tarea.completado}/>   
   
</label>

    
