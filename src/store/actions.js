
import {
  reqAddress,
  reqShops,
  reqFoodCategorys,
  reqUserInfo
} from '../api'
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER
} from './mutation-types'

export default {
  
  async getAddress ({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    if(result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  
  async getFoodCategorys ({commit}) {
    const result = await reqFoodCategorys()
    if(result.code===0) {
      const foodCategorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys: foodCategorys})
    }
  },
  
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    if(result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  
  saveUser({commit}, user) {
    commit(RECEIVE_USER, {user})
  },
  
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if(result.code===0) {
      const user = result.data
      commit(RECEIVE_USER, {user})
    }
  }
}
