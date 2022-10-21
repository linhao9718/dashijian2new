$.ajaxPrefilter(function(options){
options.url='http://www.liulongbin.top:3007'+options.url

    // 为有权限的设置请求头



if(options.url.indexOf('/my/')!==-1){
    options.headers={Authorization:localStorage.getItem('token')||''
}

}
options.complete=function(es){
    console.log(es)
    if(es.responseJSON.status!==0 ||es.responseJSON.message=='身份认证失败!'){
        location.href='login.html'
    
    }
          }

})