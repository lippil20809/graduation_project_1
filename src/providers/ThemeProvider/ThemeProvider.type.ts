export interface ColorTheme  {
    color:Color,
    backgroundColor:BackgroundColor,
    button:ButtonColor
    borderbottom:BorderBottom
}

export interface Color {
    main: string,
    light: string,
    dark: string,
}

export interface BackgroundColor {
    main: string,
    paper: string,
}

export interface ButtonColor {
    bg: string,
    bc: string,
}

export interface BorderBottom {
    bb: string
}

export interface ThemeContextContext {

    theme?:ColorTheme  ,
    toggleTheme?: () => void

}


export type Themes = 'light' | 'dark'


