let form=layui.form
form.verify({
    pass: [
        /^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格'
      ] ,repwd:function(value){
let newpwd=document.querySelector('.newpwds').value
if(newpwd!==value){
return '两次密码不同'
}



      }
})




document.querySelector('.layui-form').addEventListener('submit',function(e){
 e.preventDefault()

  $.ajax({
  method:'post',
      url:'/my/updatepwd',
 data:$(this).serialize()
 ,success:function(res){
    console.log(res)
    if(res.status==0)
    {
document.querySelector('.layui-form ').reset()
layui.layer.msg('更新成功')
    }else{
     layui.layer.msg('更新失败')

    }
}
 })
})