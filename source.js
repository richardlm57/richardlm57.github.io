function calculate(){
	var days=$("#numberDays").val();
	var startDate = new Date($("#startDate").val());
	var endDate = new Date();
	endDate.setTime(startDate.getTime() + days * 86400000 );
	console.log(startDate)
	console.log(endDate)
	$("#output").datepicker({
	    minDate: startDate,
	    maxDate: endDate
	});
	$.datepicker.setDefaults( $.datepicker.regional[ $("#countryCode").val() ] );

}