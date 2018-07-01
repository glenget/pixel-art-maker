
  $(function(){

  function makeGrid() {
    var height,width,table,color;

    height=$('#h').val();
    width=$('#w').val();
    table=$('#artFrame');
    colour=$('#colorPicker');

    //removing without
    table.children().remove();

    //making grid
    for (let r=0; r<height; r++) {
      table.append('<tr></tr>');
      for (let c=0; c<width; c++) {
        $('tr').last().append('<td></td>');
      }
    }

    //on clicking a cell to apply color
    table.on('click', 'td', function(){
        $(this).css('background-color', colour.val());
    });

  }

//on hitting submit
$("#btn").click(function() {
  event.preventDefault();
  makeGrid();
  });
});
