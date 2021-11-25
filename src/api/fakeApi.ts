
export function fetchAPI<T>() : Promise<T> {
    return new Promise((resolve, reject) => {
        resolve({
            status: 'ERROR',
            description: 'Internal Error',
        } as unknown as T)
    })
}