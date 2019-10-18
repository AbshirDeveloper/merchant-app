import dummyData from './dummyData.json'

export const getAllDayn = () => (dispatch) => {
    dispatch({
        type: 'initialGet',
        payload: dummyData
    })
}