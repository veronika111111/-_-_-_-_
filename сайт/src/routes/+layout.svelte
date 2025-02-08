<script lang="ts">
	import '../app.css';
    import {getCookie} from '$modules/auth/utils';
    import authStore from '$modules/auth/index.svelte';

	let { children } = $props();



    let session = getCookie('session');


    if (session)
        authStore.load(session);
</script>

{@render children()}



