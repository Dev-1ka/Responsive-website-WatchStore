const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-wrapper");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

function goToEnquiry(code, name, price, image) {
  localStorage.setItem("pCode", code);
  localStorage.setItem("pName", name);
  localStorage.setItem("pPrice", price);
  localStorage.setItem("pImage", image);

  window.location.href = "enquiry.html";
}

document.getElementById("enquiryForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  document.getElementById("successMsg").style.display = "block";
});


document.getElementById("enquiryForm").addEventListener("submit", function(e) {
  e.preventDefault();

  localStorage.setItem("uName", document.getElementById("name").value);
  localStorage.setItem("uEmail", document.getElementById("email").value);
  localStorage.setItem("uPhone", document.getElementById("phone").value);
  localStorage.setItem("uMsg", document.getElementById("message").value);

  window.location.href = "enquiry-submit.html";
});
