console.log("linked");

function removeAllContent() {

	$('.dash-content1').removeClass('active');
	$('.dash-content2').removeClass('active');
	$('.dash-content3').removeClass('active');
	$('.dash-content4').removeClass('active');
	$('.dash-content5').removeClass('active');

	$('.tab1').removeClass('active');
	$('.tab2').removeClass('active');
	$('.tab3').removeClass('active');
	$('.tab4').removeClass('active');
	$('.tab5').removeClass('active');
}


$(document).ready(function(){

	$('.tab1').click(function(){
		removeAllContent();

		$('.dash-content1').addClass('active');
		$('.tab1').addClass('active');
	});

	$('.tab2').click(function(){
		removeAllContent();

		$('.dash-content2').addClass('active');
		$('.tab2').addClass('active');
	});

	$('.tab3').click(function(){
		removeAllContent();

		$('.dash-content3').addClass('active');
		$('.tab3').addClass('active');
	});

	$('.tab4').click(function(){
		removeAllContent();

		$('.dash-content4').addClass('active');
		$('.tab4').addClass('active');
	});

	$('.tab5').click(function(){
		removeAllContent();

		$('.dash-content5').addClass('active');
		$('.tab5').addClass('active');
	});

	$('.click-target').click(function(){
		$('.toggle').slideToggle();
		playVideoToPercentage(.8);
		startCount(685, 35);
	});

});




