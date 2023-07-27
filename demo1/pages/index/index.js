// index.js
Page({
  data:{
    msg:'铸币吧怎么这么菜',
    nickName:'',
    url:'',
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
})
