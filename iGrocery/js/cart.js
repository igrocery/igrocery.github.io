$(document).ready(function() {
    $('button.update').click();
});

$('button.update').on('click', function () {
    updateCart($(this));
});

$('input.quantity').on('input', function(){
    updateCart($(this));
});

function updateCart(argument) {
    var quantity = argument.closest('div').find('input.quantity');
    var price = argument.closest('div').find('input.price');
    var sub_total = argument.closest('div.cart_card').find('span.sub_total');

    if (argument.data('type') == 'plus') {
        var new_quantity = Number(quantity.val()) + 1;
    } else {
        if (quantity.val() > 1) {
            var new_quantity = Number(quantity.val()) - 1;
        } else {
            new_quantity = 1;
        }
    }
    quantity.val(new_quantity);
    sub_total.text(Number(price.val() * new_quantity));

    var parent = argument.data('parent');

    if (parent == 'wheat') {
        const wheatObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('wheat', JSON.stringify(wheatObj));
        var wheat = JSON.parse(sessionStorage.getItem('wheat'));
    } else if(parent == 'oats') {
        const oatsObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('oats', JSON.stringify(oatsObj));
        var oats = JSON.parse(sessionStorage.getItem('oats'));
    } else {
        const quinoaObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('quinoa', JSON.stringify(quinoaObj));
        var quinoa = JSON.parse(sessionStorage.getItem('quinoa'));
    }

    grand_total = 0;
	$('span.sub_total').each(function() {
	    grand_total += parseFloat($(this).text());
	});
	$('#grand_total').text(grand_total);

	$('#total').text(grand_total + Number($('#qst').text()) + Number($('#gst').text()));
}
var wheat = JSON.parse(sessionStorage.getItem('wheat'));
var oats = JSON.parse(sessionStorage.getItem('oats'));
var quinoa = JSON.parse(sessionStorage.getItem('quinoa'));
$('.wheatDiv').find('input.quantity').val(wheat.quantity);
$('.oatsDiv').find('input.quantity').val(oats.quantity);
$('.quinoaDiv').find('input.quantity').val(quinoa.quantity);

$('button.remove_item').on('click', function() {
	var cart_card = $(this).closest('div.cart_card');
	var sub_total = Number(cart_card.find('span.sub_total').text());
	var old_grand_total = Number($('#grand_total').text());
	var total = Number($('#total').text());
	$('#grand_total').text(old_grand_total - sub_total);
	$('#total').text(total - sub_total);

	cart_card.fadeOut(500, function(){$(this).remove();});
});