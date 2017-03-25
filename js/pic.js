document.addEventListener("plusready", onPlusReady, false);
// 扩展API加载完毕，现在可以正常调用扩展API 
function onPlusReady() {
	console.log("plusready");
}
// 摄像头
function getImage() {
	var cmr = plus.camera.getCamera();
	cmr.captureImage(function(p) {
		plus.gallery.save(p, function() { //保存到相册
			plus.nativeUI.alert("头像修改成功");
		});
		// p 返回相对 路径 处理为绝对路径
		plus.io.resolveLocalFileSystemURL(p, function(entry) {
			console.log(entry.fullPath)
			document.getElementById("show").src = entry.fullPath;
			localStorage.setItem('img', entry.fullPath);
		}, function(e) {
			alert('错误')
		});
	}, function(e) { // 失败
		alert('拍照失败')
	}); // 摄像机参数未设置					
}
//本地选照片
function galleryImg() {
	console.log("从相册选择图片"); // 从相册中选择图片				
	plus.gallery.pick(function(p) {
		document.getElementById("show").src = p;
		alert(p)
	}, function(e) {
		alert("取消选择图片");
	}, function(e) {
		alert("错误")
	});
}