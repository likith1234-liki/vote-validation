
function vote(){
    
    var name = document.getElementById("name").Value;
    var age  = document.getElementById("age").value;

    if(age>=18){
        alert("eligible to vote");
    }
    else{
        alert("still child");
    }
}