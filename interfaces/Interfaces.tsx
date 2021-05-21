interface IState {
    code: string,
    name: string,
    country: ICountry,
}

interface ILanguage {
    code: number,
    name: string,
    native: string,
    rtl: boolean,
}

export interface ICountry {
    code: number,
    name: string,
    native: string,
    phone: string,
    continent: IContinent,
    capital: string,
    currency: string,
    languages: ILanguage,
    emoji: string,
    emojiU: string,
    states: IState,
}

export interface IContinent {
    code: number,
    name: string,
    countries: ICountry
}
