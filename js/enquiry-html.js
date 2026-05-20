document.getElementById("cImg").src = localStorage.getItem("pImage");
document.getElementById("cCode").textContent = "Code: " + localStorage.getItem("pCode");
document.getElementById("cName").textContent = localStorage.getItem("pName");
document.getElementById("cPrice").textContent = "Price: ₹" + localStorage.getItem("pPrice");

document.getElementById("cUser").textContent = localStorage.getItem("uName");
document.getElementById("cEmail").textContent = localStorage.getItem("uEmail");
document.getElementById("cPhone").textContent = localStorage.getItem("uPhone");
document.getElementById("cMsg").textContent = localStorage.getItem("uMsg");
