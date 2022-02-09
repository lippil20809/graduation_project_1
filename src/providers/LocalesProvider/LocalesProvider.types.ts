export type Langs = 'ru' | 'en'

export type Traslation = {
details: string
email: string
street: string
suite: string
city: string
phone: string
website: string
photos:string
albums:string
users: string
todos: string
posts:string
genders:string
nationality:string
changeTheme: string
changeLang:string
}

export type Traslations = Record<Langs, Traslation>

export interface LocalesContextContext {
    trans: Traslation,
    toggleLang: () => void
  }