document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        let errors = [];

       
        if (email.value.trim() === "") {
            errors.push("Email is required.");
        } else if (!email.value.includes("@") || !email.value.includes(".")) {
            errors.push("Enter a valid email.");
        }

        if (password.value.trim() === "") {
            errors.push("Password is required.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }
        window.location.href = "Userhomefolder/userhome.html";
    });

});
