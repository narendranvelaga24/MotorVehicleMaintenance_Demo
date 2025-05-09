document.addEventListener("DOMContentLoaded", () => {
    const editBtn = document.getElementById("edit-btn");
    const saveBtn = document.getElementById("save-btn");
    const editableFields = ["name", "email", "membership"];

    editBtn.addEventListener("click", () => {
        editableFields.forEach(id => {
            /* cspell:disable-next-line */
            document.getElementById(id).setAttribute("contenteditable", "true");
        });
        editBtn.style.display = "none";
        saveBtn.style.display = "inline-block";
    });

    saveBtn.addEventListener("click", () => {
        editableFields.forEach(id => {
            /* cspell:disable-next-line */
            document.getElementById(id).setAttribute("contenteditable", "false");
        });
        saveBtn.style.display = "none";
        editBtn.style.display = "inline-block";

        // Add a success highlight animation
        document.querySelector(".profile-container").style.boxShadow = "0 0 10px #28a745";
        setTimeout(() => {
            document.querySelector(".profile-container").style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        }, 800);
    });
});
