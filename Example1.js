function largeMoreWord(cadena){
    const word = cadena.split(" ");

    let largeWord= "";

    for(let i=0 ; i < word.length; i++){
        if(word[i].length > largeWord.length){
            largeWord = word[i];
        }
    }

    // esto es una prueba 
    return largeWord;
}

console.log(largeMoreWord("Esto es una prueba maravillosa y fuertementePosible"));