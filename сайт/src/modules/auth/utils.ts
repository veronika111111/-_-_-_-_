type TOptions = Partial<{
    path: string;
    samesite: 'lax' | 'strict';
    expires: string;
    "max-age": string;
    domain: string;
}>;

function setCookie(key: string, data: string, options: TOptions = {}) {

    let serializedCookieString = encodeURIComponent(key) + '=' + encodeURIComponent(data);

    for (let optionName in options) {
        serializedCookieString += '; ' + optionName + '=' + options[optionName];
    }

    console.log('saving cookies: ', document.cookie = serializedCookieString);
}
function getCookie(key: string) {
    const cookies = document.cookie.split(';');

    for (let cookie: any of cookies) {

        cookie = cookie.split('=');

        let coockieKey  = decodeURIComponent(cookie[0]);

        if (coockieKey === key)
            return decodeURIComponent(cookie[1]);

    }

    return null;
}





function encode(data: any): string {
    return JSON.stringify(data)
}

function decode(data: string) {
    return JSON.parse(data);
}


export {setCookie, getCookie, encode, decode}
