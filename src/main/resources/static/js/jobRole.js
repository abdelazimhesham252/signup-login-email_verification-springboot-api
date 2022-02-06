
$('document').ready(function(){
	
	$('table #jobRoleEditButton').on('click',function(event){
		event.preventDefault();
			
		var href = $(this).attr('href');
		
		$.get(href, function(jobRole, status){
			$('#idEdit').val(jobRole.id);
			$('#descriptionEdit').val(jobRole.description);
			$('#detailsEdit').val(jobRole.details);
		});					
		$('#editModal').modal();
	});
	
	$('.table #jobRoleDetailsButton').on('click',function(event) {
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(jobRole, status){
			$('#idDetails').val(jobRole.id);
			$('#descriptionDetails').val(jobRole.description);
			$('#detailsDetails').val(jobRole.details);
			$('#lastModifiedByDetails').val(jobRole.lastModifiedBy);
			$('#lastModifiedDateDetails').val(jobRole.lastModifiedDate.substr(0,19).replace("T", " "));
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