
function printDate(){
    console.log(new Date().toLocaleDateString());
}

function printTime(id){
    console.log(new Date().toLocaleTimeString());
    clearTimeout(id)
}


id = setTimeout(printDate, 3000);

setInterval(printTime, id, 1000);
