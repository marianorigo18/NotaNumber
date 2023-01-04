const form = document.querySelector('.form');
const inputNumber = document.querySelector('.input-number');
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(inputNumber.value.trim() == ''){
       return console.log('El campo esta vacio')
    }
    if(!Number(inputNumber.value.trim())){
        return console.log('El valor no es numerico')
    }
    if(inputNumber.value.trim() > 10){
        return console.log('El campo no debe ser mayor a 10')
    }
    subirMastil(Number(inputNumber.value.trim()));

})
function subirMastil(valor){
    for(let i = 1; i <= valor; i++){
            if(i < valor){
                    console.log(`subo ${i} metro`)
            }else{
                    console.log(`subio hasta ${i} metros`)
                }
            }
}
