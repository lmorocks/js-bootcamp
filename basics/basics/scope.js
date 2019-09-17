//Lexical Scope (Static Scope)

//In a scope you can access variables defined in that scope, or in any parent/ancestor scope

//Global Scope (varOne)
    //Local Scope(varTwo)

let varOne = 'varOne'

if (true){
    console.log(varOne);
    let varTwo = 'varTwo';
    console.log(varTwo);
    if(true){
        let varFour = 'varFour'
    }
    //console.log(varFour);
}

if(true){
    let varThree = 'varThree'
    console.log("2nd if block\'s varFour: "+varFour);
}