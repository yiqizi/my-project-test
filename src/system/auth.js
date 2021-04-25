import Cookies from 'js-cookie'
const TokenKey = 'authToken'
const CidKey = 'cid'
const baseBp = 'baseHref'
// 获取token
export function getToken() {
  return Cookies.get(TokenKey)
}
// 设置token
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
// 删除token
export function removeToken() {
  return Cookies.remove(TokenKey)
}

//获取cid
export function getCid() {
  return Cookies.get(CidKey)
}
//设置cid
export function setCid(cid) {
  return Cookies.set(CidKey, cid)
}
//删除cid
export function removeCid() {
  return Cookies.remove(CidKey)
}

// 设置base bp/bp2
export function setBaseBp(bp) {
  return Cookies.set(baseBp, bp)
}
// 获取base bp/bp2
export function getBaseBp() {
  return Cookies.get(baseBp)
}