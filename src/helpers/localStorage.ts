export type SessionStorageKey = 'page' | 'gender' | 'nat' | 'results'

export const getByKey = <T> (key: SessionStorageKey, defaultValue?: string) : T => {
    const data = window.localStorage.getItem(key) || (defaultValue ?? '{}')
    return JSON.parse(data) as T
    }

export const setByKey = (key: SessionStorageKey, value: unknown): void => {
    window.localStorage.setItem(key,JSON.stringify(value))
}    