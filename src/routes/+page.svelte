<script>
	import Announce from '$lib/components/announce.svelte';
	import { faSearch } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="flex flex-col">
	<div class="flex flex-row justify-between items-center">
		<div class="text-5xl m-2">Annonces</div>
		<div class="text-3xl m-2 flex items-center">
			<div class="form-control">
				<div class="input-group">
					<input type="text" placeholder="Search…" class="input input-bordered" />
					<button class="btn btn-square">
						<Fa icon={faSearch} />
					</button>
				</div>
			</div>
		</div>
	</div>

	<div class="columns-1">
		{#each data.rows as row}
			<Announce title={row.title} description={row.description} place={row.place} />
		{/each}
	</div>
</div>
