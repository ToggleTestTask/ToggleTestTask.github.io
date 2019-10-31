$(document).ready(function () {
    var links = {
        'Gua' : 'http://www.internal-displacement.org/countries/guatemala ',
        'Hon' : 'http://www.internal-displacement.org/countries/honduras',
        'El' : 'http://www.internal-displacement.org/countries/el-salvador',
    };
    $( "#Gua, #Hon, #El" )
    .on('mouseenter',function (e) {
        $(e.target).removeClass('invisible').addClass('visible');
    })
    .on('mouseleave', function (e) {
        $(e.target).removeClass('visible').addClass('invisible');
    })
    .on('click',function (e) {
        var id = e.target.id;
        if(id && links[id]){
            window.open(links[id]);
        }
    })
});
