const form = document.querySelector('.form');
const inputNumber = document.querySelector('.input-number');

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    if(inputNumber.value.trim() === ''){
        console.log('el campo debe contener almenos 1 caracter')
    }
    if(Number(inputNumber.value.trim()) > 10){
        console.log('el campo debe ser menor a 10')
    }
    if(Number){
        subirMastil(inputNumber)
    }
})
/*
function subirMastil(valor){
    for(let i = 1; i <= valor; i++){
        if(i < inicio){
            console.log(`subo ${i} metro`)
        }else{
            console.log(`subo hasta ${i} metros`)
        }
    }
}
*/