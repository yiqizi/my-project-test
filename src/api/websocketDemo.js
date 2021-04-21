import websocket from '@/system/websocket'


/********************************************************** demo  开始 ******************************************************/
// 获取列表socket
export function getData(data, methods) {
  return websocket({
    url: '/sockjs-node/873/euznsvbv/websocket',
    method: 'get',
    // baseURL: process.env.WEBSOCKET_server,
    data,
    methods
  })
}

