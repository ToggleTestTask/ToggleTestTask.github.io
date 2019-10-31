$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('#collapseSsa').on('hide.bs.collapse', function () {
        $('#background').addClass('dark-bg');
    });
    $('#collapseSsa').on('show.bs.collapse', function () {
        $('#background').removeClass('dark-bg');
    })
});
