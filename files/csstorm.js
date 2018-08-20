$(document).ready(function () {

    $('[size]').each(function () {
        var dimensions = $(this).attr('size').split(';')
        var w = dimensions[0]
        var h = dimensions[1]

        if (h != none && h != 0) {
            $(this).width(dimensions[0])
        } else {
            $(this).height(dimensions[1])
        }
    });

})