export function classNames(cls, mods, additional = []) {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className, _]) => className),
        ...additional,
    ].join(' ');
}
