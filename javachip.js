function dark() {
    var x =  document.getElementById("toggle");
    if(x.style.display === "none")
    {
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    } 

}
function toggleDarkLight()
{
    var body=document.getElementById("body");
    var currentClass=body.className;
    body.className=currentClass == "light-mode" ? "dark-mode" : "light-mode" ;
}