import dummyData from '../Badeeco/dummyData.json'

export const addProductToCart = (item) => {
    return {
        type: 'addToCart',
        payload: item
    }
}

export const deductFromProducts = (cart) => {
    // dummy 
    const cartIds = cart.map(el => el.id);
    const response = dummyData.rowData.filter(el => !cartIds.some(element => element === el.id))


    /* 

    real

    const response = responseOfACall 
    
    */

    const data = {
        columnDefs: dummyData.columnDefs,
        rowData: response
    }
    return {
        type: 'getBadeeco',
        payload: data
    }
}

export const getAllBadeeco = () => {
    return {
        type: 'getBadeeco',
        payload: dummyData
    }
}

export const onDaynSubmit = (info) => {
    return {
        type: 'daynSubmit',
        payload: info
    }
}