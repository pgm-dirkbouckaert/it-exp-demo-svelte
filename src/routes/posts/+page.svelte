<script>
	export let data;
</script>

<h1>Posts</h1>

<ul>
	{#each data.posts as post}
		<li><a href="/posts/{post.id}">{post.title}</a></li>
	{/each}
</ul>
