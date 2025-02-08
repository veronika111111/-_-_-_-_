import { getContext, hasContext, setContext } from "svelte";
import { readable, writable } from "svelte/store";

// context for any type of store
export const useSharedStore = <T, A>(
    name: string,
    fn: (value?: A) => T,
    defaultValue?: A,
) => {
    if (hasContext(name)) {
        return getContext<T>(name);
    }

    const _value = fn(defaultValue);
    setContext(name, _value);
    return _value;
};

// writable store context
