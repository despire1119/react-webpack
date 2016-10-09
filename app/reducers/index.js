import doLogin from '../actions'
import cookie from 'react-cookie'

export function goodsData(state={
  list:[],
  total: 0,
  myList: [],
  myTotal: 0
},action){
  switch (action.type) {
    case GET_SEARCH_GOODSLIST:
        return Object.assign({},state,{
            list: action.list,
            total: action.total
        });
        break;
    case GET_MY_GOODSLIST:
        return Object.assign({},state,{
            myList: action.list,
            myTotal: action.total
        })
        break
    default:
        return state
  }
}
