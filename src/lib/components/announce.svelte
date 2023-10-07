<script lang="ts">
	import Fa from 'svelte-fa';
	import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

	export let title: string = '';
	export let description: string = '';
	export let place: string = '';

	export let isModalOpen: boolean = false;
</script>

<div class="px-1 py-1 mb-3 flex-col shadow">
	<div class=" px-3 py-1 rounded bg-primary text-white flex flex-row justify-between items-center">
		<div class="text-3xl font-bold">{title}</div>
		<div class="text-2xl flex flex-row">
			<Fa icon={faLocationDot} />
			<div class="pl-2">{place}</div>
		</div>
	</div>
	<div class="px-3 py-1 mt-3 flex flex-col">
		<div class="font-bold text-xl">Description</div>
		<div class="text-lg">{description}</div>
	</div>
	<div class="px-3 py-1 mt-3 flex flex-row justify-end">
		<button class="btn w-64 rounded-full bg-success" on:click={() => (isModalOpen = true)}
			>Button</button
		>
	</div>
</div>

<div class="modal" class:modal-open={isModalOpen}>
	<div class="modal-box">
		<div class="flex flex-col">
			<div class="font-bold text-3xl">Postuler pour {title}</div>
			<div class="my-3">
				Après avoir rempli ce formulaire, vous serez recontacté par nos équipes !
			</div>

			<div class="my-3">
				<div class="my-1">
					<div class="form-control w-full max-w-xs">
						<label class="label" for="lastname">
							<span class="label-text">Nom</span>
						</label>
						<input
							type="text"
							placeholder="Votre nom"
							class="input input-bordered w-full"
							id="lastname"
						/>
					</div>
					<div class="form-control w-full max-w-xs">
						<label class="label" for="firstname">
							<span class="label-text">Prénom</span>
						</label>
						<input
							type="text"
							placeholder="Votre prénom"
							class="input input-bordered w-full"
							id="firstname"
						/>
					</div>
					<div class="form-control w-full max-w-xs">
						<label class="label" for="phone">
							<span class="label-text">Numéro de téléphone</span>
						</label>
						<input type="text" placeholder="06..." class="input input-bordered w-full" id="phone" />
					</div>
				</div>
			</div>

			<div class="modal-action">
				<button class="btn btn-success" on:click={() => (isModalOpen = false)}>Confirmer</button>
			</div>
		</div>
	</div>
</div>
