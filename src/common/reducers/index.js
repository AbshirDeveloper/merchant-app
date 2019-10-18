import { combineReducers } from 'redux';

const initialState = {
    menu: false,
    isDesktop: false
}

function main(state = initialState, actions) {
    switch (actions.type) {
        case 'menu':
            return {
                ...state,
                menu: actions.payload,
                isDesktop: actions.payload
            }
        default:
            return {
                ...state
            }
    }
}

const initialIibsiState = {
    cart: {
        columnDefs: [
            {
                DisplayName: "Badeeco",
                Name: "badeeco",
                CanShow: true
            },
            {
                DisplayName: "Intaxabo",
                Name: "intaxabo",
                CanShow: true
            },
            {
                DisplayName: "Qiimo halkii xabo",
                Name: "qiimo_halkii_xabo",
                CanShow: true
            },
            {
                DisplayName: "Iskudar",
                Name: "iskudar",
                CanShow: true
            }
        ],
        rowData: []
    }
}

function iibsi(state = initialIibsiState, actions) {
    switch (actions.type) {
        case 'addToCart':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    rowData: [...state.cart.rowData, actions.payload]
                }
            }
        default:
            return state
    }
}

const daynState = {
    data: {}
}

function dayn(state = daynState, actions) {
    switch (actions.type) {
        case 'initialGet':
            return {
                ...state,
                data: actions.payload
            }
        default:
            return {
                ...state
            }
    }
}

const amanoState = {
    data: {}
}

function amano(state = amanoState, actions) {
    switch (actions.type) {
        case 'amanoData':
            return {
                ...state,
                data: actions.payload
            }
        default:
            return {
                ...state
            }
    }
}

const badeecoState = {
    data: {}
}

function badeeco(state = badeecoState, actions) {
    switch (actions.type) {
        case 'getBadeeco':
            return {
                ...state,
                data: actions.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default combineReducers({
    iibsi,
    main,
    dayn,
    amano,
    badeeco
})

