/*-----------------------------------Callback Functions------------------------------------*/
function check(e){
    if(e.target == rpass){
        if(pass.value != rpass.value){
            const error = document.querySelectorAll(".error");
            error.forEach((i)=>{
                i.setAttribute("style","opacity:100%;");
            });
            pass.style.borderColor = "red";
            rpass.style.borderColor = "red";

            window.setTimeout(()=>{
                error.forEach((i)=>{
                    i.setAttribute("style","opacity:0%;");
                })
            },2000);
        }
        else{
            pass.style.borderColor = "#596D48";
            rpass.style.borderColor = "#596D48";
        }
    }
    else if(e.target == pass){
        if(pass.value == rpass.value){
            pass.style.borderColor = "#596D48";
            rpass.style.borderColor = "#596D48";
        }
    }
}

function action(e){
    if(rpass.value != pass.value){
        e.preventDefault();
        const error = document.querySelectorAll(".error");
        error.forEach((i)=>{
            i.setAttribute("style","opacity:100%;");
        });
        window.setTimeout(()=>{
            error.forEach((i)=>{
                i.setAttribute("style","opacity:0%;");
            })
        },2000);
    }
}


/*-------------------------------Variable Declarations-----------------------------------*/
const pass = document.querySelector("input[name = 'password']");
const rpass = document.querySelector("input[name = 'confirm']");
const key = document.querySelector("button");
console.log(key);

/*----------------------------------Event Listeners--------------------------------------*/
rpass.addEventListener("focusout",check);
pass.addEventListener("focusout",check);
key.addEventListener("click",action);