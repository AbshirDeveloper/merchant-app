import dummyData from './dummyData.json'


export const getAllBadeeco = () => {
    return {
        type: 'getBadeeco',
        payload: dummyData
    }
}