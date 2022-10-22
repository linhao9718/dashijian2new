let form=layui.form
let layer=layui.layer
form.verify({

   names: [
        /^[\S]{6,12}$/
        ,'昵称必须6到12位，且不能出现空格'
      ] 




})




function userinfor(){

// let data={}
// document.querySelectorAll().forEach(item=>{
// data[item.name]=item.value
// })



  $.ajax({
  method:'get',
url:'/my/userinfo',
    
 success:function(res){
    console.log(res)

form.val('xxx',res.data)





}
 })


 document.querySelector('[type="reset" ]').addEventListener('click',function(e){
    e.preventDefault()

    

userinfor()



})

document.querySelector('.layui-form').addEventListener('submit',function(e){
    let data={}
document.querySelectorAll('.layui-form input').forEach(item=>{
data[item.name]=item.value
})
    e.preventDefault()
      $.ajax({
      method:'post',
          url:'/my/userinfo',
        data
     ,success:function(res){
   console.log(res);
   if(res.status==0){
layer.msg(res.message)

window.parent.userinfo()



   }
   else{
    layer.msg(res.message)
   }
    }

     })

})


}
userinfor()
