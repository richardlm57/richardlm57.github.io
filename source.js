function calculate(){
	var days=$("#numberDays").val();
	var startDate = new Date($("#startDate").val());
	var endDate = new Date();
	endDate.setTime(startDate.getTime() + days * 86400000 );
	$(function() {
        $("#output").datepicker({
		    startDate: startDate,
		    endDate: endDate, 
		    autoclose: true
		});
    });
}