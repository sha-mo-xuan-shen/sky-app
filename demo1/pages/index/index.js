// index.js
Page({
  data:{
    msg:'铸币吧怎么这么菜',
    nickName:'',
    url:'',
    code:'',
  },
  getUserInfo(){
    wx.getUserProfile({
      desc: 'desc',
      success:(res)=>{
        console.log(res.userInfo)
        this.setData({
          nickName:res.userInfo.nickName,
          url: res.userInfo.avatarUrl,
        })
      },
    })
  },
  //微信登录，获取微信用户的授权码
  wxLogin(){
    wx.login({
      success: (res) => {
        console.log(res.code)
        this.setData({
          code: res.code
        })
      },
    })
  },
  //发送请求
  sendRequest(){
    wx.request({
      url: 'http://localhost:8080/user/shop/status',
      method: 'GET',
      success: (res)=>{
        console.log(res.data)
      },
    })
  },
})
