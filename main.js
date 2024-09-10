// const addMoreSkillsBtn = document.getElementById('addMoreSkillsBtn ') as HTMLButtonElement;
// const addMoreSkills = document.getElementById('addMoreSkills') as HTMLElement;
// addMoreSkillsBtn.addEventListener('click', () => {
//     if (addMoreSkills.style.display === 'none') {
//         addMoreSkills.style.display = 'block';
//     } else {
//         addMoreSkills.style.display = 'none';
//     }
// });
// function addMore(): void {
//     // Get the element by its ID
//     let addMoreSkills = document.getElementById("addMoreSkills");
//     // Check if the element exists
//     if (addMoreSkills) {
//         // Access the style display property and toggle its value
//         if (addMoreSkills.style.display === "none") {
//             addMoreSkills.style.display = "block";
//         } else {
//             addMoreSkills.style.display = "none";
//         }
//     }
// }
document.addEventListener("DOMContentLoaded", function () {
    function addMore() {
        var addMoreSkills = document.getElementById("addMoreSkills");
        // Check if element exists
        if (addMoreSkills) {
            if (addMoreSkills.style.display === "none") {
                addMoreSkills.style.display = "block";
            }
            else {
                addMoreSkills.style.display = "none";
            }
        }
    }
    // Attach the function to a button click or any event
    var button = document.getElementById("toggleButton");
    if (button) {
        button.addEventListener("click", addMore);
    }
});
