function myAccFunc(evt, accName) {
    var x = document.getElementById(accName);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-blue", "");
    }
}
function openSubject(evt, subjectName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("w3-bar-item w3-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(subjectName).style.display = "block";
    evt.currentTarget.className += " active";
}
function openSideBar() {
    document.getElementById("sidebar").style.display = "block";
}
function closeSideBar() {
    document.getElementById("sidebar").style.display = "none";
}