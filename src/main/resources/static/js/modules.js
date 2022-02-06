
$('document').ready(function(){
	
	$('table #moduleEditButton').on('click',function(event){
		event.preventDefault();
			
		var href = $(this).attr('href');
		
		$.get(href, function(modules, status){
			$('#idEdit').val(modules.id);
			$('#descriptionEdit').val(modules.description);
			$('#detailsEdit').val(modules.details);
		});					
		$('#editModal').modal();
	});
	
	$('.table #moduleDetailsButton').on('click',function(event) {
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(modules, status){
			$('#idDetails').val(modules.id);
			$('#descriptionDetails').val(modules.description);
			$('#detailsDetails').val(modules.details);
			$('#lastModifiedByDetails').val(modules.lastModifiedBy);
			$('#lastModifiedDateDetails').val(modules.lastModifiedDate.substr(0,19).replace("T", " "));
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