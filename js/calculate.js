$("#form").submit(function(e) {
    e.preventDefault();
    const firstNumber = $('#firstNumber').val();
    const secondNumber = $('#secondNumber').val();
    let calculatedPrice;

    calculatedPrice = 12 * ((firstNumber * secondNumber) - (firstNumber * secondNumber / 5));

    $('#price').html(calculatedPrice.toFixed(0) + " zł").addClass('active-price');
});

