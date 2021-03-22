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

    if (parent == 'bulgar') {
        const bulgarObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('bulgar', JSON.stringify(bulgarObj));
        var bulgar = JSON.parse(sessionStorage.getItem('bulgar'));
    } else if(parent == 'bulgur') {
        const bulgurObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('bulgur', JSON.stringify(bulgurObj));
        var bulgur = JSON.parse(sessionStorage.getItem('bulgur'));
    } else if(parent == 'corn') {
        const bulgurObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('corn', JSON.stringify(bulgurObj));
        var corn = JSON.parse(sessionStorage.getItem('corn'));
    } else if(parent == 'oats') {
        const oatsObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('oats', JSON.stringify(oatsObj));
        var oats = JSON.parse(sessionStorage.getItem('oats'));
    } else if(parent == 'quinoa') {
        const quinoaObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('quinoa', JSON.stringify(quinoaObj));
        var quinoa = JSON.parse(sessionStorage.getItem('quinoa'));
    } else if(parent == 'rice') {
        const riceObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('rice', JSON.stringify(riceObj));
        var rice = JSON.parse(sessionStorage.getItem('rice'));
    } else if(parent == 'wheat') {
        const wheatObj = {
            quantity: quantity.val(),
        }
        sessionStorage.setItem('wheat', JSON.stringify(wheatObj));
        var wheat = JSON.parse(sessionStorage.getItem('wheat'));
    }
});

var bulgar = JSON.parse(sessionStorage.getItem('bulgar'));
var bulgur = JSON.parse(sessionStorage.getItem('bulgur'));
var corn = JSON.parse(sessionStorage.getItem('corn'));
var oats = JSON.parse(sessionStorage.getItem('oats'));
var quinoa = JSON.parse(sessionStorage.getItem('quinoa'));
var rice = JSON.parse(sessionStorage.getItem('rice'));
var wheat = JSON.parse(sessionStorage.getItem('wheat'));

if(bulgar) $('.bulgarDiv').find('input.quantity').val(bulgar.quantity);
if(bulgur) $('.bulgurDiv').find('input.quantity').val(bulgur.quantity);
if(corn) $('.cornDiv').find('input.quantity').val(corn.quantity);
if(oats) $('.oatsDiv').find('input.quantity').val(oats.quantity);
if(quinoa) $('.quinoaDiv').find('input.quantity').val(quinoa.quantity);
if(rice) $('.riceDiv').find('input.quantity').val(rice.quantity);
if(wheat) $('.wheatDiv').find('input.quantity').val(wheat.quantity);

// Accordion
$('p.product_description').css('display', 'none');
$('button.accordion').on('click', function() {
	$('p.product_description').slideToggle('slow', function() {

	});
});