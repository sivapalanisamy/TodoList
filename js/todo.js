// JavaScript Document
$(document).ready(function(){	
		
		//ToDO	
		var row = $(".block").find(".row").length;
		$(".count").text("" + row + "");	
		
		$(".btn").on('click',function(){			 
			var txtval = $("input.txt").val();			
			$(".block form").append("<div class='row'><input name='' type='checkbox' value='' /><label> "+ txtval +"</label></div>");
			var rows = $(".block").find(".row").length;
			$(".count").text("" + rows + "");
			$("input.txt").val("");
		});
		
		$(".remi > a").click(function(){
			$(".block").find(".row").remove();
			var row = $(".block").find(".row").length;
			$(".count").text("" + row + "");
			var check = $("input[type=checkbox]:checked").length;
			$(".comp").text("" + check + "");
		});	
		
		$(document).on('click','input[type=checkbox]',function(){
			//alert("checked");	
			var check = $("input[type=checkbox]:checked").length;
			var row = $(".block").find(".row").length;
			$(".comp").text("" + check + "");
			var n = row - check;
			$(".count").text("" + n + "");
		});
		
});