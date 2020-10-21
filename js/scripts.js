$(document).ready(function() {
    $("#survey").submit(function(e) {
        
        let qOne, qTwo, qThree, qFour;
        qOne = $("#feelings").val();
        qTwo = $("input:radio[name=expressions]:checked").val();
        qThree = $("#rant").val();
        qFour = $("#date").val();
        
        console.log(qOne, qTwo, qThree, qFour);
        
        e.preventDefault();
    });
});