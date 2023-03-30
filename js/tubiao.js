$(function(){
	
	$('.collapse').on('show.bs.collapse hide.bs.collapse',function(){
		$(this).prev().toggleClass(['bi-caret-right-fill','bi-caret-down-fill'])
	})
})
