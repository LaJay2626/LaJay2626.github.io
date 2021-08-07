
document.getElementById("button-1").onclick = function () {
  document.getElementById("janet").style.display="";
  document.getElementById("kamala").style.display="none"; 
  document.getElementById("michelle").style.display="none"; 
  document.getElementById("lajay").style.display="none";
};

document.getElementById("button-2").onclick = function () {
  document.getElementById("janet").style.display="none";
  document.getElementById("kamala").style.display=""; 
  document.getElementById("michelle").style.display="none"; 
  document.getElementById("lajay").style.display="none";
};

document.getElementById("button-3").onclick = function () {
  document.getElementById("janet").style.display="none";
  document.getElementById("kamala").style.display="none"; 
  document.getElementById("michelle").style.display=""; 
  document.getElementById("lajay").style.display="none";
};


document.getElementById("button-4").onclick = function () {
  document.getElementById("janet").style.display="none";
  document.getElementById("kamala").style.display="none"; 
  document.getElementById("michelle").style.display="none"; 
  document.getElementById("lajay").style.display="";
};