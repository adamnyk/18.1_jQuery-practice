$("form").on('submit', (e) => {
    e.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();
    $(`<tr><td>${title}</td><td>${rating}</td></tr>`).appendTo('table')
    .append('<button class="delete">x</button>')
    $('input').val('')
})

$('table').on('click', '.delete', (e)=> {
    $(e.target).closest('tr').remove();
})