document.getElementById("pImage").src = localStorage.getItem("pImage");
document.getElementById("pCode").textContent =
  "Code: " + localStorage.getItem("pCode");
document.getElementById("pName").textContent =
  localStorage.getItem("pName");
document.getElementById("pPrice").textContent =
  "Price: ₹" + localStorage.getItem("pPrice");


document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const inputs = document.querySelectorAll("#form input, #form textarea");

  localStorage.setItem("uName", inputs[0].value);
  localStorage.setItem("uEmail", inputs[1].value);
  localStorage.setItem("uPhone", inputs[2].value);
  localStorage.setItem("uMsg", inputs[3].value);

  window.location.href = "enquiry-submit.html";
});
