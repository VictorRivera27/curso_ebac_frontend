$(document).ready(function () {
    $('.task-form-content button').click(function (e) {
        e.preventDefault();

        const taskContent = $('#taskDescription').val();
        const newTask = $('<li style="display: none"></li>');
        $(`<p>${taskContent}</p>`).appendTo(newTask);
        $('<input type="checkbox"/>').appendTo(newTask);
        $(newTask).appendTo('ul');
        $(newTask).fadeIn(1000);
        $('#taskDescription').val('');
    })

    $(document).on('click', '.list-content input', function () {
        if ($(this).is(':checked')) {
            $(this).siblings('.list-content p').css('text-decoration', 'line-through');
        } else {
            $(this).siblings('.list-content p').css('text-decoration', 'none');
        }
    })
})