// script.js

function showContent(sectionId) {
    document.querySelectorAll(".content-section").forEach((section) => {
        section.style.display = "none"
    })
    document.getElementById(sectionId).style.display = "block"
}

function showActivity(activityId) {
    document.getElementById(activityId).style.display = "block"
}
