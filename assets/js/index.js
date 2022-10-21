document.querySelector('.layui-nav .oneli a').click()
let layer=layui.layer
function userinfo(){
    $.ajax({
        method:'get',
            url:'/my/userinfo',
        //    headers:{Authorization:localStorage.getItem('token')||''
        //   }
       success:function(res){
          console.log(res)
          if(res.status!==0){
return layer.msg(res.message)
          }else{


xuanrantouxiang(res.data)

           
          }



      },
 
       })
}



userinfo()
function  xuanrantouxiang(data){
let name=data.nickname||data.username
document.querySelector('.touxiang .users').innerText=name


//头像
if(data.user_pic!==null){

$('.layui-nav-img').attr('src',data.user_pic).show()
$('.wztx').hide()


}else{
    $('.wztx').attr('src',data.user_pic).show()
    $('.layui-nav-img').hide()
    //文字插入到里
    let A=name[0]
    
    document.querySelector('.touxiang .wztx').innerHTML=A
    document.querySelector('.layui-nav .wztx').innerHTML=A

}






}

document.querySelector('#tc').addEventListener('click',function(){
   
      //eg2
      layer.confirm('确认退出吗?', function(index){
        //do something
       
        localStorage.removeItem('token')
        location.href='./login.html'
        layer.close(index);

      });
  

})