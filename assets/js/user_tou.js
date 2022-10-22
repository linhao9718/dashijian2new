;(function(){
  // 1.1 获取裁剪区域的 DOM 元素
  var $image = $('#image')
  // 1.2 配置选项
  const options = {
    // 纵横比
    aspectRatio: 1,
    // 指定预览区域
    preview: '.img-preview'
  }

  // 1.3 创建裁剪区域
  $image.cropper(options)



document.querySelector('.layui-btn').addEventListener('click',function(){

    document.querySelector('#btn').click()










})


document.querySelector('#btn').addEventListener('change',function(){

console.log(this.files[0])
console.log(this.files)
let file=this.files[0]
var newImgURL = URL.createObjectURL(file)
if(image.length==0){
return layui.layer.msg('选择照片！')
}

 $image
 .cropper('destroy')      // 销毁旧的裁剪区域
 .attr('src', newImgURL)  // 重新设置图片路径
 .cropper(options)    


})

document.querySelector('.layui-btn-danger').addEventListener('click',function(e){
    
    
    
  e.preventDefault()  



  var dataURL = $image
  .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
    width: 100,
    height: 100
  })
  .toDataURL('image/png')    
//讲url转为base64
    $.ajax({
        method:'post',
            url:'/my/update/avatar',
      data:{avatar:dataURL}
       ,success:function(res){
          console.log(res);
          if(res.status==0){
            layui.layer.msg('更换成功')
            window.parent.userinfo()


          }else{
            layui.layer.msg('更换失败')
          }

      }
       }) 
})



})()