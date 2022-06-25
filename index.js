const calc = () => {
    // let tel1 = document.getElementById("tel").onkeyup = function () {
    //     var input = parseInt(this.value);
    //     if (input < 0 || input > 100)
    //         alert("Value should be between 0 - 100");
    //     return;
    // }

    let tel = document.getElementById('tel').value;
    let hin = document.getElementById('hin').value;
    let eng = document.getElementById('eng').value;
    let mat = document.getElementById('mat').value;
    let sci = document.getElementById('sci').value;
    let soc = document.getElementById('soc').value;

    let totalMarks = parseFloat(tel) + parseFloat(hin) + parseFloat(eng) + parseFloat(mat) + parseFloat(sci) + parseFloat(soc)

    let totalPer = ((totalMarks / 600) * 100).toFixed(2);
    // alert(totalPer)

    document.getElementById('percentage').innerHTML = `${totalMarks}`




    let telGrades = ''
    let telper = (tel / 100) * 100;
    if (telper <= 100 && telper >= 75) {
        telGrades = 'A'
    }
    else if (telper <= 74 && telper >= 65) {
        telGrades = 'B'
    }
    else if (telper <= 64 && telper >= 45) {
        telGrades = 'C'
    }
    else if (telper <= 44 && telper >= 35) {
        telGrades = 'D'
    }
    else {
        telGrades = 'F'
    }

    let hinGrades = ''
    let hinper = (hin / 100) * 100;
    if (hinper <= 100 && hinper >= 75) {
        hinGrades = 'A'
    }
    else if (hinper <= 74 && hinper >= 65) {
        hinGrades = 'B'
    }
    else if (hinper <= 64 && hinper >= 45) {
        hinGrades = 'C'
    }
    else if (hinper <= 44 && hinper >= 35) {
        hinGrades = 'D'
    }
    else {
        hinGrades = 'F'
    }

    let engGrades = ''
    let engper = (eng / 100) * 100;
    if (engper <= 100 && engper >= 75) {
        engGrades = 'A'
    }
    else if (engper <= 74 && engper >= 65) {
        engGrades = 'B'
    }
    else if (engper <= 64 && engper >= 45) {
        engGrades = 'C'
    }
    else if (engper <= 44 && engper >= 35) {
        engGrades = 'D'
    }
    else {
        engGrades = 'F'
    }


    let matGrades = ''
    let matper = (mat / 100) * 100;
    if (matper <= 100 && matper >= 75) {
        matGrades = 'A'
    }
    else if (matper <= 74 && matper >= 65) {
        matGrades = 'B'
    }
    else if (matper <= 64 && matper >= 45) {
        matGrades = 'C'
    }
    else if (matper <= 44 && matper >= 35) {
        matGrades = 'D'
    }
    else {
        matGrades = 'F'
    }

    let sciGrades = ''
    let sciper = (sci / 100) * 100;
    if (sciper <= 100 && sciper >= 75) {
        sciGrades = 'A'
    }
    else if (sciper <= 74 && sciper >= 65) {
        sciGrades = 'B'
    }
    else if (sciper <= 64 && sciper >= 45) {
        sciGrades = 'C'
    }
    else if (sciper <= 44 && sciper >= 35) {
        sciGrades = 'D'
    }
    else {
        sciGrades = 'F'
    }


    let socGrades = ''
    let socper = (soc / 100) * 100;
    if (socper <= 100 && socper >= 75) {
        socGrades = 'A'
    }
    else if (socper <= 74 && socper >= 65) {
        socGrades = 'B'
    }
    else if (socper <= 64 && socper >= 45) {
        socGrades = 'C'
    }
    else if (socper <= 44 && socper >= 35) {
        socGrades = 'D'
    }
    else {
        socGrades = 'F'
    }


    let grades = "";
    if (totalPer <= 100 && totalPer >= 75) {
        grades = 'A'
    } else if (totalPer <= 74 && totalPer >= 65) {
        grades = 'B'
    } else if (totalPer <= 64 && totalPer >= 45) {
        grades = 'C'
    }
    else if (totalPer <= 44 && totalPer >= 35) {
        grades = 'D'
    }
    else {
        grades = 'F'
    }

    // let finalGrade = ''
    if (telGrades == 'F' || hinGrades == 'F' || engGrades == 'F' || matGrades == 'F' || sciGrades == 'F' || socGrades == 'F') {
        grades = 'F'
    }

    document.getElementById('grade').innerHTML = `${grades}`
    // document.getElementById('grade').innerHTML = `${finalGrade}`


    document.getElementById('telPer').innerHTML = `${telGrades}`
    document.getElementById('hinPer').innerHTML = `${hinGrades}`
    document.getElementById('engPer').innerHTML = `${engGrades}`
    document.getElementById('matPer').innerHTML = `${matGrades}`
    document.getElementById('sciPer').innerHTML = `${sciGrades}`
    document.getElementById('socPer').innerHTML = `${socGrades}`


    document.getElementById('showdata').innerHTML = `You Score = ${totalMarks}/600 <br> Percentage = ${totalPer}% <br> Grade = ${grades}`

}
