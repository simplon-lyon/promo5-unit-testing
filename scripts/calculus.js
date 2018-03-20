class Calculus {

    operation(a,b,operand){
        if(typeof(a) !== 'number' || typeof(b) !== 'number') {
            return NaN;
        }
        switch (operand) {
            case "+": 
                return a + b;
            case "-": 
                return a - b;
            case "*": 
                return a * b;
            case "/": 
                return a / b;
            default:
                throw new Error('wrong operand given');
                break;
        }
    }
}