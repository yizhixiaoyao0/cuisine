mui.init()
	mui('.reg-submint').on('tap','input',function(){
		mui.openWindow({
			url:'login.html',  
		    id:'login',   
		})
	})