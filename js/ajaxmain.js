function ajaxMain(url,datas,fn){
$.ajax({
    url:'http://123.206.43.228/MS_progect/index.php'+url, 
    dataType:"jsonp", 
    jsonp:'jsoncallback',
    callback:'?',
    type:"get",
    data:datas,
    timeout:100000,
    success:fn,   
    error:function(){
    	document.getElementsByTagName('body')[0].innerHTML='<header class="mui-bar mui-bar-nav red-bg">'
		+'<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>'
		+'</header>	<div class="load-pic"><img src="../img/load.png"/></div>';	
    }
})
}