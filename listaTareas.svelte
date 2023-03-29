<script>

export let nuevaTarea
import Tarea from "./Tarea.svelte";
import BorrarTarea from "./BorrarTarea.svelte";
import ModificarTarea from "./ModificarTarea.svelte";

</script>

    <ul>
    {#each nuevaTarea as item}
    <li><Tarea tarea = {item}/><ModificarTarea nuevaTarea1={item}/></li> <!--aqui pongo a usar el componente ModificarTarea-->
    <li><Tarea tarea= {item}/><BorrarTarea nuevaTarea1={item}/></li>
    {/each}
    </ul>


  