<main>

  <AñadirTarea/>

</main>


<script>
  import AñadirTarea from "./añadirTarea.svelte"

  const listaTareas = [
    {
        id: Date.now(),
        descripcion: "Este é un exemplo de tarefa",
        completado: false
    }
  ]
</script>


