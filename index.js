function cal() {
    let studentName = document.getElementById("sn").value;
    let totalMarks = document.getElementById("stm").value;
    let obtainMarks = document.getElementById("sobt").value;



    let res = (obtainMarks / totalMarks) * 100;

    
    document.getElementById("percentage").innerHTML = studentName + ", your percentage " + res + "%";


    if (res >= 90) {
        document.getElementById("grade").innerHTML = "You got an A grade";
    } else if (res >= 80) {
        document.getElementById("grade").innerHTML = "You got a B grade";
    } else if (res >= 70) {
        document.getElementById("grade").innerHTML = "You got a C grade";
    } else if (res >= 60) {
        document.getElementById("grade").innerHTML = "You got a D grade";
    } else {
        document.getElementById("grade").innerHTML = "You got an F grade and need more effort";
    }
}