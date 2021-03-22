// Update product quantity
$('button.update').on("click", function () {
	var quantity = $(this).closest('div').find('input.quantity');
	if ($(this).data('type') == 'plus') {
	    var new_quantity = Number(quantity.val()) + 1;
	} else {
	    if (quantity.val() > 1) {
	        var new_quantity = Number(quantity.val()) - 1;
	    } else {
	        new_quantity = 1;
	    }
	}
	quantity.val(new_quantity);

	var parent = $(this).data('parent');
	console.log(parent);

    if (parent == 'baguette') {
        const baguetteObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('baguette', JSON.stringify(baguetteObj));
        var baguette = JSON.parse(sessionStorage.getItem('baguette'));
    } else if(parent == 'bagels') {
        const bagelsObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('bagels', JSON.stringify(bagelsObj));
        var bagels = JSON.parse(sessionStorage.getItem('bagels'));
    } else if(parent == 'carrotcake') {
        const carrotcakeObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('carrotcake', JSON.stringify(carrotcakeObj));
        var carrotcake = JSON.parse(sessionStorage.getItem('carrotcake'));
    } else if(parent == 'croissant') {
        const croissantObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('croissant', JSON.stringify(croissantObj));
        var croissant = JSON.parse(sessionStorage.getItem('croissant'));
    } else if(parent == 'loaf') {
        const loafObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('loaf', JSON.stringify(loafObj));
        var loaf = JSON.parse(sessionStorage.getItem('loaf'));
    } else if(parent == 'muffins') {
        const muffinsObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('muffins', JSON.stringify(muffinsObj));
        var muffins = JSON.parse(sessionStorage.getItem('muffins'));
	}
});

var baguette = JSON.parse(sessionStorage.getItem('baguette'));
var bagels = JSON.parse(sessionStorage.getItem('bagels'));
var carrotcake = JSON.parse(sessionStorage.getItem('carrotcake'));
var croissant = JSON.parse(sessionStorage.getItem('croissant'));
var loaf = JSON.parse(sessionStorage.getItem('loaf'));
var muffins = JSON.parse(sessionStorage.getItem('muffins'));


if(baguette) $('.baguetteDiv').find('input.quantity').val(baguette.quantity);
if(bagels) $('.bagelsDiv').find('input.quantity').val(bagels.quantity);
if(carrotcake) $('.carrotcakeDiv').find('input.quantity').val(carrotcake.quantity);
if(croissant) $('.croissantDiv').find('input.quantity').val(croissant.quantity);
if(loaf) $('.loafDiv').find('input.quantity').val(loaf.quantity);
if(muffins) $('.muffinsDiv').find('input.quantity').val(muffins.quantity);


// Accordion
$('p.product_description').css('display', 'none');
$('button.accordion').on('click', function() {
	$('p.product_description').slideToggle('slow', function() {

	});
});