import authStore  from '$modules/auth/index.svelte';

export const ssr = false;


export async function load(data) {
    // console.log('DEBUG PRINT: load auth session', cookies.get('session'))

    // const session = cookies.get('session');
    //
    // if (session)
    //     authStore.load(session);
    //
    //
    // console.log(authStore.isAuthorized())

}
