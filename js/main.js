var salesDetails = $('.2013');

var sales2013 = $('.sales2013');

var buttonClickHandler = function () {
	var isActive = salesDetails.attr('data-state');
	
	if (isActive == 'active') {
			salesDetails.attr('data-state', 'inactive');
			alert('active');
			

	} else {
			salesDetails.attr('data-state', 'active');
			alert('deactivated');
	}
};

sales2013.on('click', buttonClickHandler);


var salesDetails = $('.2014');

var sales2014 = $('.sales2014');

var buttonClickHandler = function () {
	var isActive = salesDetails.attr('data-state');
	
	if (isActive == 'active') {
			salesDetails.attr('data-state', 'inactive');
			alert('active');
			

	} else {
			salesDetails.attr('data-state', 'active');
			alert('deactivated');
	}
};

sales2014.on('click', buttonClickHandler);