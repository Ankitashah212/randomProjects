
//console.log(process.argv[2] + process.argv[3] + process.argv[4] );
var operations = process.argv[2];
//console.log(operations);
if (process.argv.length < 5) {
    console.log("insufficient data");
}
var oper1 = parseFloat(process.argv[3]);
var oper2 = parseFloat(process.argv[4]);

switch (operations) {
    case 'add':
    case 'addition':
    case '+':
        console.log("Ans add " + (oper1 + oper2));
        break;

    case 'sub':
    case 'subtractions':
    case '-':
        console.log("Ans sub " + (oper1 - oper2));
        break;

    case 'mul':
    case 'multiplication':
    case '*':
        console.log("Ans mul " + (oper1 * oper2));
        break;

    case 'div':
    case 'division':
    case '/':
        console.log("Ans div " + (oper1 / oper2));
        break;

    case 'rem':
    case 'mod':
    case '%':
        console.log("Ans mod " + (oper1 % oper2));
        break;

    case 'pow':
    case 'power':
        console.log("Ans sub " + Math.pow(oper1, oper2));
        break;

    case 'alg':
        //lets assume that x y  or what ever is always in first position 
        // 4x - 2 = 18
        var unknown = process.argv[3];
        var airOper = process.argv[4];
        var known = parseFloat(process.argv[5]);
        //ignore argv 6 as it's = 
        var result = parseFloat(process.argv[7]);
        var numericPart = parseFloat(unknown.substr(0, (unknown.length - 1)));
        var variable = unknown.substr(unknown.length - 1);

        // console.log(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7]);

        if (airOper == '+') {

            result = result - known;
            result = result / numericPart;
            console.log("value of " + variable + " = " + result);

        }
        else if (airOper == '-') {
            result = result + known;
            result = result / numericPart;
            console.log("value of " + variable + " = " + result);
        }
        else if (airOper == '*') {
            result = result / known;
            result = result / numericPart;
            console.log("value of " + variable + " = " + result);
        }
        else if (airOper == '/') {
            result = result * known;
            result = result / numericPart;
            console.log("value of " + variable + " = " + result);
        }
        break;

    default:
    
        break;

}
