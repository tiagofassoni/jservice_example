my_global = undefined;
my_clues = undefined;
console.clear();
$('#btn-jservice').on('click', function() {
    $.getJSON('https://jservice.io/api/categories', 
    {count: 10},
    function(data){
        my_global = data;
        console.table(my_global);
    })
})

$("#btn-get-clues").on('click', function() {
    $.getJSON('https://jservice.io/api/clues',
    {category: 61},
    function(data) {
        my_clues = data;
        console.log(my_clues);
        console.table(Object.values(my_clues).map(x=>stdlib.utils.flattenObject(x)))

    }
    )
})