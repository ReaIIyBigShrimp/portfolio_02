

/*
$("#button").click(function() {
    $('#testAnimation').animate({
        left: '100px',
        color: '#123456',
        
    }) 
});
*/
$(document).ready(function () {

    console.log('The webpage is now ready.');
    $('#button').click(function () {
        // alert('Jquery is now working as expected.');
        console.log('Button has been clicked.');
    })
    // console.log('');
    // Movable di
    $(function () {
        $("#cake").draggable();
    });
    // Exandable div
    $(function () {
        $('#cake').resizable();
    })
});