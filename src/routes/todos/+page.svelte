<script>
	export let data;
</script>

<h1>Todos</h1>

<ul class="todo-list">
	{#each data.todos as todo}
		<li class={todo.completed ? 'todo-item todo-item--completed' : ''}>{todo.title}</li>
	{/each}
</ul>
