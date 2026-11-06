function calculateLove() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var loveScore = Math.floor(Math.random() * 101);
    document.getElementById("result").innerHTML = name1 + " and " + name2 + " have a " + loveScore + "% love match!";
}