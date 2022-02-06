
$('document').ready(function(){
	
	$('table #employeeStatusEditButton').on('click',function(event){
		event.preventDefault();
			
		var href = $(this).attr('href');
		
		$.get(href, function(employeeStatus, status){
			$('#idEdit').val(employeeStatus.id);
			$('#descriptionEdit').val(employeeStatus.description);
			$('#detailsEdit').val(employeeStatus.details);
		});					
		$('#editModal').modal();
	});
	
	$('.table #employeeStatusDetailsButton').on('click',function(event) {
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(employeeStatus, status){
			$('#idDetails').val(employeeStatus.id);
			$('#descriptionDetails').val(employeeStatus.description);
			$('#detailsDetails').val(employeeStatus.details);
			$('#lastModifiedByDetails').val(employeeStatus.lastModifiedBy);
			$('#lastModifiedDateDetails').val(employeeStatus.lastModifiedDate.substr(0,19).replace("T", " "));
		});			
		$('#detailsModal').modal();		
	});	
	
	$('table #deleteButton').on('click', function(event){
		event.preventDefault();
		
		var href= $(this).attr('href');
		
		$('#confirmDeleteButton').attr('href', href);
		
		$('#deleteModal').modal();
	});
		
});