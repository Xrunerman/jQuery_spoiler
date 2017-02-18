'use strict';

$(document).ready(function(){

	$('.spoiler > .spoiler-box:first-child > .spoiler-content').addClass('spoiler-content-hide');
	$('.spoiler-heading span').html('[подробнее]');
	$('.spoiler > .spoiler-box:first-child > .spoiler-heading span').html('[скрыть]');

	$('body').click(function(event){
		
		var target = $(event.target).closest(".spoiler-heading")

		if(target.length == 1){

			$(target).siblings('.spoiler-content').toggleClass('spoiler-content-hide');

			if($(target).siblings('.spoiler-content').hasClass('spoiler-content-hide')){
				$(target).children('span').html('[скрыть]');
			}else{
				$(target).children('span').html('[подробнее]');
			};

		}else{

			$('.spoiler-content').removeClass('spoiler-content-hide');
			$('.spoiler-heading span').html('[подробнее]');
		}

	});

});





