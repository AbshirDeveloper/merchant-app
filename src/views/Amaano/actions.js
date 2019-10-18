import dummyData from './dummyData.json'

export const getAllAmano = () => {
    return {
        type: 'amanoData',
        payload: dummyData
    }
}