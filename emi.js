
	/*var todo = $("input").val();
	$("input").val("");
		$("#lst").append("<li><span>X</span> "+todo+"</li>")
	*/
	


		
		$("#lst").on("click","li", function(e){
		
			//console.log($(this));
			// console.log($("li"));

			$(this).toggleClass("com");
			e.stopPropagation();
		});
			



		$("button").on("click", function(){
			var todo = $("input").val();
			$("input").val("");
			if(todo!=="")
			$("#lst").append("<li><span><i class='fa fa-trash'></i></span> "+todo+"</li>");
				$("span").on("click", function() {
		$(this).parent().remove();
		});
			})

	$("input").keypress(function(ev){
	
		if(ev.which===13){
			var todo = $("input").val();
			$("input").val("");
			if(todo!=="")
			$("#lst").append("<li><span><i class='fa fa-trash'></i></span> "+todo+"</li>")
	
		};



		$("span").on("click", function() {
		$(this).parent().remove();
	});
});
	$(".hide").on("click",function(et){
				$("input").fadeToggle();
				$("button").fadeToggle();
				et.stopPropagation();
			})
