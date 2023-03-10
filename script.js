let submit = () => {
    var english = parseInt(document.querySelector(".english").value);
    var urdu = parseInt(document.querySelector(".urdu").value);
    var maths = parseInt(document.querySelector(".maths").value);
    var computer = parseInt(document.querySelector(".computer").value);
    var islamiyat = parseInt(document.querySelector(".islamiyat").value);
    var obtainedMarks = (english) + (urdu) + (maths) + (computer) + (islamiyat);
    var totalMarks = 500;
    var percentage = ((obtainedMarks / totalMarks) * 100).toFixed(1);
    if (percentage < 0) {
        document.querySelector(".demo").innerHTML = "Enter Valid Value❓";
    } else if (percentage >= 0 && percentage < 50) {
        document.querySelector(".demo").innerHTML = percentage + "% " + "you are fail better luck next time";
    } else if (percentage >= 50 && percentage < 60) {
        document.querySelector(".demo").innerHTML = percentage + "% " + "you are pass but your grade is C";
    } else if (percentage >= 60 && percentage < 70) {
        document.querySelector(".demo").innerHTML = percentage + "% " + "you are pass but your grade is B";
    } else if (percentage >= 70 && percentage < 80) {
        document.querySelector(".demo").innerHTML = percentage + "% " + "Not bad your grade is A";
    } else if (percentage >= 80 && percentage <= 100) {
        document.querySelector(".demo").innerHTML = percentage + "% " + "congratulations your grade is A+";
    }
}
let remove = () => {
    document.querySelector(".demo").innerHTML = "";
    document.querySelectorAll('input').forEach(e => {
        e.value = ""
    })
}
// for(var i = 0; i < data.length; i++){
//     data[i].value = ""
//   }