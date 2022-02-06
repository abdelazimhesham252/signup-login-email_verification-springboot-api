
$('document').ready(function(){
	
	$('table #projectTypeEditButton').on('click',function(event){
		event.preventDefault();
			
		var href = $(this).attr('href');
		
		$.get(href, function(projectType, status){
			$('#idEdit').val(projectType.id);
			$('#descriptionEdit').val(projectType.description);
			$('#detailsEdit').val(projectType.details);
		});					
		$('#editModal').modal();
	});
	
	$('.table #projectTypeDetailsButton').on('click',function(event) {
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(projectType, status){
			$('#idDetails').val(projectType.id);
			$('#descriptionDetails').val(projectType.description);
			$('#detailsDetails').val(projectType.details);
			$('#lastModifiedByDetails').val(projectType.lastModifiedBy);
			$('#lastModifiedDateDetails').val(projectType.lastModifiedDate.substr(0,19).replace("T", " "));
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