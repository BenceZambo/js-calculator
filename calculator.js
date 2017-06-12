function main(){
    var rubbish = []
    var firstNumber = ''
    var secondNumber = ''
    var operator = []
    $('.button').on('click', function() {
        if(operator.length === 1){
            secondNumber += $(this).text();
            $('.Screen').html(secondNumber);
        }
        else {
            firstNumber += $(this).text();
            $('.Screen').html(firstNumber);
        }
    });
    $('.operator').on('click', function() {
        if(operator.length === 1 || firstNumber === ''){
            rubbish.push($(this).text());
            $('.Screen').html('');
        }
        else {
            operator.push($(this).text());
            $('.Screen').html(operator[0]);
        }
    });
    $('.equal').on('click', function() {
        var result = 0
        firstNumber = parseFloat(firstNumber)
        secondNumber = parseFloat(secondNumber)
        if((operator.length === 1) && (firstNumber !== '') && (secondNumber !== '')){
            switch(operator[0]){
                case '+':
                result = firstNumber + secondNumber
                break;
                case '-':
                result = firstNumber - secondNumber
                break;
                case '*':
                result = firstNumber * secondNumber
                break;
                case '/':
                result = firstNumber / secondNumber
                break;
                default:
                break;
            }
            $('.Screen').html(result);
        rubbish = []
        firstNumber = ''
        secondNumber = ''
        operator = []
        result = 0 
        }
    });
    $('.clear').on('click', function() {
        $('.Screen').html('');
        rubbish = []
        firstNumber = ''
        secondNumber = ''
        operator = []
        result = 0 
    });
}
$(document).ready(main);