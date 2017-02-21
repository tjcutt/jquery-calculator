$(document).ready(function() {

    // Variables
    let screen = $('#screen')
    let newN = ''
    let fullString = '('
    let op = ''
    let numOrOp = false

    $('span').click(function(event) {

        // Clicking number buttons only
        if (!$(this).hasClass('operator')) {
            numOrOp = true
            newN = $(this).text()
            fullString += newN
            screen.append(newN)
        }

        // Clicking clear button
        if ($(this).is('#clear')) {
            $(screen).text('');
            fullString = ''
            newN = ''
        }

        // Clicking operators
        if ($(this).hasClass('operator') && numOrOp && !$(this).attr('id')) {
            op = $(this).text().replace(/÷/, '/')
            screen.append(op)
            fullString += op
            numOrOp = false
        }

        // Error message for dividing by zero
        if (fullString.match(/\/0/)) {
            screen.text('ERROR')
        }
        //Clicking equals
        if (($(this).is('#equals'))) {
            let result = eval(fullString)
            $(screen).text(result);

            //Work on not using an eval
        }
    })

})

//Still issues with mutiple multiplication and division operators
