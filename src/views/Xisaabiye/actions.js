import dummyData from './dummyData.json'
import _ from 'lodash';

export const getAllXisaab = (options = ['dayn']) => (dispatch) => {
    let columnDefs = [];
    let rowData = [];
    let cards = [];
    let types = []
    options.length && options.forEach(element => {
        const newObject = _.mapKeys(dummyData.filter(el => el.type === element.toLowerCase())[0].columnDefs, 'Name')
        const existingColumns = columnDefs.length ? _.mapKeys(columnDefs, 'Name') : {}
        const combinedObject = { ...newObject, ...existingColumns }
        columnDefs = [...Object.values(combinedObject)]
        dummyData.filter(el => el.type === element.toLowerCase())[0].rowData.forEach(e => {
            rowData.push(e)
        })
        dummyData.filter(el => el.type === element.toLowerCase())[0].cards.forEach(e => {
            cards.push(e)
        })
    })
    let newObject = {
        columnDefs, rowData, cards, types: dummyData.map(el => el.type)
    }
    dispatch({
        type: 'getXisaabiye',
        payload: newObject
    })
}