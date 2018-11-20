import ajax from './ajax';
const BASE = '/api';

export const reqAddress = (longitude,latitude) => ajax(BASE +`/position/${latitude},${longitude}`)
export const reqFoodCategorys = () => ajax(BASE+'/index_category')
export const reqShops = ({longitude,latitude}) => ajax(BASE + 'shops',{latitude, longitude})
