import request from '@/system/request'

/* 新的登录接口 */
export function login(data) {
  return request({
    target: 'MANAGER-API-100',
    method: 'post',
    apiType: 'manager',
    noCid:'true',
    data
  })
}

export function logout(data) {
  return request({
    target: 'MANAGER-API-101',
    method: 'post',
    apiType: 'manager',
    data
  })
}

//登录日志记录
export function loginRecord(data) {
  return request({
    target: 'LOGIN-RECORD-INSERT-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

//修改账户信息
export function updateUserInfo(data) {
  return request({
    target: 'MANAGER-API-106',
    method: 'post',
    apiType: 'manager',
    data
  })
}

//修改密码
export function updatePass(data) {
  return request({
    target: 'MANAGER-API-129',
    method: 'post',
    apiType: 'manager',
    data
  })
}



export function getUserInfo(data) {
  return request({
    target: 'MANAGER-API-105',
    method: 'post',
    apiType: 'manager',
    data
  })
}


