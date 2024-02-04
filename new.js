const calculate = (op, num1, num2) => {
    let answer;
    switch (op) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
        case "/":
            answer = num1 / num2;
            break;
        default:
            answer = undefined;
            break;
    }
    return answer;
}