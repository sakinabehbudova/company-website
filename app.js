// Dark Mode

$('#checkbox').on('change', function() {

    localStorage.clear();

    if ($('#checkbox').prop('checked')) {
        localStorage.setItem('class', 'dark')
        $('body').addClass('dark')
        $('#checkbox').prop('checked', true);

    } else {
        $('body').removeClass('dark');
        localStorage.setItem('class', '')
        $('#checkbox').prop('checked', false);
    }

});



if (localStorage.getItem('class') == 'dark') {
    $('#checkbox').prop('checked', true);

} else {
    $('#checkbox').prop('checked', false);

}

let storg = localStorage.getItem('class');

$('body').addClass(storg)




/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
