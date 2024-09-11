$(function() {
    $('.terminal').on('click', function() {
        $('#input').focus();
    });

    $('#input').on('keydown', function search(e) {
        if (e.keyCode == 13) {
            $('#history').append($(this).val() + '<br/>');
            if ($(this).val().substring(0, 3) === 'cd ') {
                $('#path').html($(this).val().substring(3) + '&nbsp;>&nbsp;');
            }
            $('#input').val('');
        }
    });
});