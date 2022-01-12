$("#btnSend").click(function () {

    finalGrade = ($("#assignments").val() * .55) +
        ($("#groupProjects").val() * .05) +
        ($("#quizzes").val() * 0.1) +
        ($("#exams").val() * .2) +
        ($("#intex").val() * 0.1)

    roundedGrade = finalGrade.toFixed(2)

    if (roundedGrade >= 94.00) {
        letterGrade = "A"
    } else if (roundedGrade >= 90.00) {
        letterGrade = "A-"
    } else if (roundedGrade >= 87.00) {
        letterGrade = "B+"
    } else if (roundedGrade >= 84.00) {
        letterGrade = "B"
    } else if (roundedGrade >= 80.00) {
        letterGrade = "B-"
    } else if (roundedGrade >= 77.00) {
        letterGrade = "C+"
    } else if (roundedGrade >= 74.00) {
        letterGrade = "C"
    } else if (roundedGrade >= 70.00) {
        letterGrade = "C-"
    } else if (roundedGrade >= 67.00) {
        letterGrade = "D+"
    } else if (roundedGrade >= 64.00) {
        letterGrade = "D"
    } else if (roundedGrade >= 60.00) {
        letterGrade = "D-"
    } else {
        letterGrade = "E"
    }


    alert("Grade: " + roundedGrade + "\n" + "Letter Grade: " + letterGrade)


})