
$('document').ready(function(){
	
	$('table #ticketStatusEditButton').on('click',function(event){
		event.preventDefault();
			
		var href = $(this).attr('href');
		
		$.get(href, function(ticketStatus, status){
			$('#idEdit').val(ticketStatus.id);
			$('#descriptionEdit').val(ticketStatus.description);
			$('#detailsEdit').val(ticketStatus.details);
		});					
		$('#editModal').modal();
	});
	
	$('.table #ticketStatusDetailsButton').on('click',function(event) {
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(ticketStatus, status){
			$('#idDetails').val(ticketStatus.id);
			$('#descriptionDetails').val(ticketStatus.description);
			$('#detailsDetails').val(ticketStatus.details);
			$('#lastModifiedByDetails').val(ticketStatus.lastModifiedBy);
			$('#lastModifiedDateDetails').val(ticketStatus.lastModifiedDate.substr(0,19).replace("T", " "));
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