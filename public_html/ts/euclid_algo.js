function euclid() {
    var A;
    var B;
    var first = Number(document.getElementById("firstNumber").value);
    var second = Number(document.getElementById("secondNumber").value);
    if (first > second) {
        A = first;
        B = second;
    }
    else {
        A = second;
        B = first;
    }
    while (B !== 0) {
        var remainder = A % B;
        A = B;
        B = remainder;
    }
    document.getElementById("result").value = String(A);
    console.log(A);
}
;
