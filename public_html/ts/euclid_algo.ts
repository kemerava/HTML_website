function euclid() {
    let A:number;
    let B: number;
    let first: number = Number((<HTMLInputElement>document.getElementById("firstNumber")).value);
    let second: number = Number((<HTMLInputElement>document.getElementById("secondNumber")).value);
    if (first > second){
        A = first;
        B = second;
    }
    else{
        A = second;
        B = first;
    }


    while (B!== 0){

        let remainder: number = A % B;
        A = B;
        B = remainder;

    }
    (<HTMLInputElement>document.getElementById("result")).value = String(A);
    console.log(A);
};
