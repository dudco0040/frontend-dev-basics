var TabBox = {
	__onTabClicked: function(){
		$('.tab-box li.selected').removeClass('selected');
		$(this).addClass('selected');
	},
	
	init: function() {
		$(function() {
			$('.tab-box li').click(TabBox.__onTabClicked);
		});

	}
}	
