$(document).ready(function () {

    $('[size]').each(function () {
        var dimensions = $(this).attr('size').split(';')
        var w = dimensions[0]
        var h = dimensions[1]

        if (w != null && w != 0) {
            $(this).width(dimensions[0])
        } 
        if (h != null && h != 0) {
            $(this).height(dimensions[1])
        }
    });

})