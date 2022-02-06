
$('document').ready(function(){
	
	$('table #transactionTypeEditButton').on('click',function(event){
		event.preventDefault();
			
		var href = $(this).attr('href');
		
		$.get(href, function(transactionType, status){
			$('#idEdit').val(transactionType.id);
			$('#descriptionEdit').val(transactionType.description);
			$('#detailsEdit').val(transactionType.details);
		});					
		$('#editModal').modal();
	});
	
	$('.table #transactionTypeDetailsButton').on('click',function(event) {
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(transactionType, status){
			$('#idDetails').val(transactionType.id);
			$('#descriptionDetails').val(transactionType.description);
			$('#detailsDetails').val(transactionType.details);
			$('#lastModifiedByDetails').val(transactionType.lastModifiedBy);
			$('#lastModifiedDateDetails').val(transactionType.lastModifiedDate.substr(0,19).replace("T", " "));
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