
// export const reroute = (data ) => {
//
//     console.log('data', data);
//
//     // if (url.pathname == '/login') {
//     //     if (authStore.isAuthorized()) {
//     //         // return '/';
//     //     }
//     // }
// };
//
//
// export const handle: Handle = async ({ event, resolve }) => {
//     if (event.url.pathname.startsWith('/custom')) {
//         return new Response('custom response');
//     }
//
//     console.log('HANDLE ');
//
//     const response = await resolve(event);
//     return response;
// };

export function handle({ event, resolve }) {
    return resolve(event, {
        ssr: false
    });
}