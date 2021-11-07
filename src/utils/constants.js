const COLORS = {
    PRIMARY: '#3285d1',
    SECONDARY: '#0cc3ce',
    TERTIARY: '#f313fe',
    RED_WIZELINE: '#e93d44',
    DARK_WIZELINE: '#262e30',
    LIGHT_BASE: '#FFFFFF',
    DARK_BASE: '#454545',
    GREY_LIGHT: '#d6d6d6',
    GREY: '#8e8e8e'
};

const TEXT_COLOR_TYPES = {
    PRIMARY: "PRIMARY",
    SECONDARY: "SECONDARY",
    TERTIARY: "TERTIARY"
};

const STYLES_SIZE = {
    SM : "0.8em",
    MD : "1em",
    LG : "1.2em",
    XLG: "2em"
}

const ELEMENT_SIZE = {
    SM : "SM",
    MD : "MD",
    LG : "LG",
    XLG: "XLG"
}

const GENERAL = {
    ELEMENT_EMPTY_LENGTH : 0,
    EMPTY_ARRAY: [],
    SINGLE_ELEMENT: 1,
    DELAY_DATA: 2000,
    PRODUCT_EMPTY: 0,
    EMPTY_OBJECT: {},
}

const OPERATIONS = {
    ADD : 'add',
    REMOVE : 'remove'
}


const QUERY = {
    CATEGORY_PREDICATE : '[[at(document.type, "category")]]',
    CATEGORY_SIZE : '30',
    PRODUCTS_PREDICATE : '[[at(document.type, "product")]]',
    PRODUCTS_SIZE : '12',    
}

export const API_BASE_URL = 'https://wizeline-academy.cdn.prismic.io/api/v2';

export { COLORS, TEXT_COLOR_TYPES, STYLES_SIZE, ELEMENT_SIZE, GENERAL, QUERY, OPERATIONS }