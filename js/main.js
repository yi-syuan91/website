//loading
$(window).load(function(){  
	$(".loader, .loader_mask").delay(1000).fadeOut();
});

// menu link
$(function(){
	$(".to_about").click(function() {
		$('html,body').animate({scrollTop:$("#link_about").offset().top}, "show");
		return false;
	});

	$(".to_works").click(function() {
		$('html,body').animate({scrollTop:$("#link_works").offset().top}, "show");
		return false;
	});

	$(".to_contact").click(function() {
		$('html,body').animate({scrollTop:$("#link_contact").offset().top}, "show");
		return false;
	});
});


$(".totop").css("bottom", -$(".totop").innerHeight());

$(window).scroll(function(){
	// toTop show
	top_space = $("body").height()-$(window).height()-50;
	tag_height = $(".totop").innerHeight();

	if($(window).scrollTop() >= top_space){
		$(".totop").css("bottom", "0");
	}
	else {
		$(".totop").css("bottom", -tag_height);
	}

	// header_fixed
	if($(window).scrollTop()>=100){
		$(".header_fixed").css("z-index", "1").css("opacity", "1");
	}
	else {
		$(".header_fixed").css("z-index", "-1").css("opacity", "0");
	}
})

// toTop
$(".totop").click(function() {
	$("html,body").animate({scrollTop:0},400,"swing");
});

// lightBox
$('.swipebox').swipebox();

function copy_contact(id) {
	var TextRange = document.createRange();
	
	TextRange.selectNode(document.getElementById(id));
	sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(TextRange);
	document.execCommand("copy");

	alert("複製成功");
}