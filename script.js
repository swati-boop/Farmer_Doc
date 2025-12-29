/* ------------------------------------------
   FARMERS SUPPORT PORTAL - FULL SCRIPT.JS
------------------------------------------- */

// 🔥 PAGE LOAD NOTIFICATION
document.addEventListener("DOMContentLoaded", () => {
    const notify = document.createElement("div");
    notify.className = "page-alert";
    notify.innerText = "Page Loaded Successfully!";
    document.body.appendChild(notify);

    setTimeout(() => notify.classList.add("show"), 200);  
    setTimeout(() => notify.classList.remove("show"), 3000);
});

    



