function UserResult(){
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    let agree = document.getElementById("agree").radio;
    let question = document.getElementById("Question").value

    if (name.value == "write your name" && pass.value == "write your password" && question.value == "0") {
        alert('please, write your data')
    }
    else{
        alert(name + "\n" + pass + "\n" + question)
    }
}