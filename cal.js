function display(num){
    result.value += num
}

function clearAll(){
    result.value = ""
}

function back(){
    result.value = result.value.slice(0, -1)
}

function equal(){
    try{
    result.value = eval(result.value)
    setTimeout(() => {
        result.value = ""
        }, 1000);
    }
    catch(error){
        result.value = 'Error'
        setTimeout(() => {
        result.value = ""
        }, 1000);
    }
}