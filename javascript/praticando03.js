var idade = 18
    if(idade < 16){
        console.log('Menor de idade. Não vota!.')
    } else if (idade > 18 || idade > 60){
        console.log('Voto opcional!');
    } else {
        console.log('Voto obrigatório!');
    }