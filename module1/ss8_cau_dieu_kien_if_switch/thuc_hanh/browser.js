
var browser= prompt('Please type your browser: ',"")
switch (browser) {
    case 'Edge':
        alert("You 've got the Edge!")
        break;
    case 'Chrome':
    case 'Opera':
    case 'Safari':
    case 'FireFox':
        alert("Okay, we support these browsers too.")
        break;
    default:
        alert('We hope that this page looks ok!')
}
