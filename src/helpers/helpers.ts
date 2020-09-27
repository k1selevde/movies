
export function objectIsNotEmpty(obj: object, mhProps: string): Boolean {
    //@ts-ignore
    return Boolean(obj[mhProps])
}