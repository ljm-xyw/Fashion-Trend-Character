$(function(){
	$('.top_nav .nav ul li a').mouseenter(function(event) {
		$(this).css('color', '#b65500').parent('.top_nav .nav ul li').siblings('li').children('a').css('color', '#fff');
	});
	$('.top_nav .nav ul li a').mouseleave(function(event) {
		$(this).css('color', '#fff');
		$('.top_nav .nav ul li.frist').children('a').css('color', '#b65500');
	});
	$('.top_nav .nav ul li a').click(function(event) {
		$(this).css('text-decoration', 'none');
	});
	$('.top_logo .logo .search').click(function(event) {
		var value=$('.top_logo .logo .txt').val();
		if(value==''){
			alert('请输入要搜索的内容~');
		}
	});
})