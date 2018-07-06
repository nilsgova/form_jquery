$(document).ready(function () {


    $("#button").click(function () {
        var BTWexcl = $('#btwExcl').val();
        var BTWincl = ((parseInt(BTWexcl) * 1.21) * 1.25) / 25;
        var totaal = (Math.ceil(BTWincl)) * 25;
        $("#result").val(totaal);
    });


});
