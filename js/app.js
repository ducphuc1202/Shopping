//$('.b').css('height',$('.a').css('height'));

$('#navi').on('click','li',function(evt) {
    $('.active').removeClass('active');
    $(this).addClass('active');
    evt.preventDefault();
})

/* Set height for item-row */
var $item_row = $('.item-row');
console.log($item_row);
var height = 1;
var max = 0;
for(var i = 0; i < $item_row.length; i++) {
    var itemrow = $item_row[i];
    var str_height = $(itemrow).css('height');
    height = parseInt(str_height);
    if(height > max) max = height;
}
for(var i = 0; i < $item_row.length; i++) {
    var itemrow = $item_row[i];
    height = $(itemrow).css('height', max);
}