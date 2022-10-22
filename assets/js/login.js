


axios.defaults.baseURL = 'http://www.liulongbin.top:3007';
document.querySelector('#gotozc').addEventListener('click',function(){
document.querySelector('#gotodl').style.display='block'
this.style.display='none'

document.querySelector('.formtwo').style.display='block'
document.querySelector('.formone').style.display='none'


})
document.querySelector('#gotodl').addEventListener('click',function(){

    document.querySelector('#gotozc').style.display='block'
    this.style.display='none'
    document.querySelector('.formone').style.display='block'
    document.querySelector('.formtwo').style.display='none'
})


console.log('a')



var layer=layui.layer
var form=layui.form

form.verify({
    pass: [
        /^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格'
      ] ,
      repwd:function(value){
        let pwd=document.querySelector('.formtwo [name="password"]').value
      
        if(value!==pwd){
           return '两次密码不同'
        }
      }
      ,names:[/^[\S]{4,12}$/,'账号必须6到12位，且不能出现空格']
})




document.querySelector('.formtwo').addEventListener('submit',function(e){
e.preventDefault()
let data={}
document.querySelectorAll('.formtwo input').forEach(item=>{
    data[item.name]=item.value
})
console.log(data)
let layer=layui.layer
 axios({
 transformRequest: [
 function(data) {
 let ret = '';
 for (let it in data) {
 ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
     }
    return ret;
  }
  ],
 headers: {
  'Content-Type': 'application/x-www-form-urlencoded'
},
 url:'http://www.liulongbin.top:3007/api/reguser',
method:'POST',
    data,
   }).then(res=>{
    console.log(res)
 if(res.data.status==0){
   
    layer.msg(res.data.message)
document.querySelector('#gotodl').click()
 }
    });
})

document.querySelector('.formone').addEventListener('submit',function(e){

    e.preventDefault()
    let data={}
document.querySelectorAll('.formone input').forEach(item=>{
    data[item.name]=item.value
})
     axios({
     transformRequest: [
     function(data) {
     let ret = '';
     for (let it in data) {
     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
         }
        return ret;
      }
      ],
     headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
     url:'http://www.liulongbin.top:3007/api/login',
    method:'post',
        data
   
       }).then(res=>{
     console.log(res)
     if(res.data.status==0){
layer.msg('登陆成功')
localStorage.setItem('token',res.data.token)
location.href='./index.html'

     }else{
      layer.msg('登陆失败')
     }
        });
})