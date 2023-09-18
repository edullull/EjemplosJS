function plus (a, b){
    return a+ b;
}

test('Suma dos numeros', () =>{
    expect(plus(6,8)).toBe(14);
});