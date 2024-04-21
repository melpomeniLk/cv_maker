document.addEventListener("DOMContentLoaded", function() {
    var editBtn = document.getElementById("edit-btn");
    var sections = document.querySelectorAll(".section");

    editBtn.addEventListener("click", function() {
        sections.forEach(function(section) {
            var paragraphs = section.querySelectorAll("p");
            paragraphs.forEach(function(paragraph) {
                paragraph.contentEditable = "true";
            });
        });
    });
});