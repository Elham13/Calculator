const txtBox = document.querySelector(".value");

txtBox.addEventListener("keypress", function (event) {
    // console.log(event.which);
    switch (event.which) {
        case 48:
            txtBox.value += 0;
            break;
        case 49:
            txtBox.value += 1;
            break;
        case 50:
            txtBox.value += 2;
            break;
        case 51:
            txtBox.value += 3;
            break;
        case 52:
            txtBox.value += 4;
            break;
        case 53:
            txtBox.value += 5;
            break;
        case 54:
            txtBox.value += 6;
            break;
        case 55:
            txtBox.value += 7;
            break;
        case 56:
            txtBox.value += 8;
            break;
        case 57:
            txtBox.value += 9;
            break;
        case 47:
            txtBox.value += '/';
            break;
        case 42:
            txtBox.value += '*';
            break;
        case 45:
            txtBox.value += '-';
            break;
        case 43:
            txtBox.value += '+';
            break;
        case 46:
            txtBox.value += '.';
            break;
        // Issue-1 When backspace is pressed I need the txtBox value to be deleted by one digit
        case 8:
            txtBox.value -= txtBox.value;
            break;
        // Issue-2 When I press enter I need to display the evaluated result in txtbox, but
        // instead when I press enter, it shows the result for about 500ms and then disapears.
        case 13:
            let val = eval(txtBox.value);
            txtBox.value = val;
            break;
        default:
            txtBox.value += '';
    }
})