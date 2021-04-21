// 文件相关接口
import request from '@/system/request'

// 获取素材列表(分页)
export function getMaterialList(data) {
  return request({
    target: 'DECORATION-MY-FILE-LIST-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

//删除素材
export function deleteMaterial(data) {
  return request({
    target: 'DECORATION-MY-FILE-BATCH-DELETE-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

//获取分组
export function getGroup(data) {
  return request({
    target: 'DECORATION-FILE-GROUP-SELECT-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

//新建分组
export function newGroup(data) {
  return request({
    target: 'DECORATION-FILE-GROUP-INSERT-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

//编辑分组
export function editGroup(data) {
  return request({
    target: 'DECORATION-FILE-GROUP-UPDATE-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

//删除分组
export function deleteGroup(data) {
  return request({
    target: 'DECORATION-FILE-GROUP-DELETE-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

//移动分组
export function moveGroup(data) {
  return request({
    target: 'DECORATION-MY-FILE-UPDATEFILE-GROUP-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

//同步素材
export function syncMaterial(data) {
  return request({
    target: 'DECORATION-SYNC-WECHAT-MATERIAL-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}


/********************************  图片  ********************************/
//上传图片
export function uploadImage(data) {
  return request({
    target: 'DECORATION-MY-FILE-UP-LOAD-PHOTO-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

//获取微信图片素材
export function getWxImage(data) {
  return request({
    target: 'DECORATION-IMAGE-MATERIAL-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

/********************************  图文  ********************************/
//保存图文素材
export function saveArticle(data) {
  return request({
    target: 'DECORATION-MY-FILE-UP-LOAD-TEXT-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

//修改图文素材
export function editArticle(data) {
  return request({
    target: 'DECORATION-MY-FILE-UPDATE-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

//根据id获取图文详情
export function getArticle(data) {
  return request({
    target: 'DECORATION-MY-FILE-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

//获取微信图文素材
export function getWxArticle(data) {
  return request({
    target: 'DECORATION-NEWS-MATERIAL-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

/********************************  视频  ********************************/
//上传视频
export function uploadVideo(data) {
  return request({
    target: 'DECORATION-MY-FILE-UP-LOAD-VIDEO-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

//获取微信视频素材
export function getWxVideo(data) {
  return request({
    target: 'DECORATION-VIDEO-MATERIAL-PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}



