import { validAge, permitAge} from "./funtions.js";
document.addEventListener("DOMContentLoaded", () => {
    const botonVerificar = document.getElementById("bt")

    botonVerificar.addEventListener("click",function(){
        const fechaInput=new Date(document.getElementById("birthday").value)
        validAge(fechaInput);
        permitAge(fechaInput);
        
    });
});


