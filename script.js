 type="text/javascript">
  $('#save').on('click', function() {
  var first_name=$('#first_name').val();
  var last_name=$('#last_name').val();
  var Address=$('#Address').val();
  var gender=$('#gender').val();
  var Choose_Of_Foods=$('#Choose_Of_Foods').val();
  var State=$('#State').val();
  var Country=$('#Country').val();
  var count = $('#myTable tr').length;
  if(first_name!="" && last_name !="" && Address!=""){
  $('#myTable tbody').append('<tr class="child"><td>'+count+'</td><td>'+first_name+'</td><td>'+last_name+'</td><td>'+Address+'</td><td>'+gender+'</td><td>'+Choose_Of_Foods+'</td><td>'+State+'</td><td><td>'+Country+'</td><a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">Remove</a></td></tr>');
  }
  });
  $(document).on('click','.remCF1',function(){
  $(this).parent().parent().remove();
  $('#myTable tbody tr').each(function(i){            
   $($(this).find('td')[0]).html(i+1);          
  });
  });
  