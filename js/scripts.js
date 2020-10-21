$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const whereFrom = $("input#whereFrom").val();

    $(".person1").text(person1Input);
    $(".whereFrom").text(whereFrom);
    
   
    $("#story").show();

    event.preventDefault();
  });
});