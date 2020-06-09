//POR LES BALises qui n'ont pas de balise de fermeture
document.getElementById("txt").value = "Adam";
document.getElementById("txt2").value = "Hamdi";
//innerHTML button h1 h2 p <a ></a> pour les balises qui ont une balise de fermeture
document.getElementById("btn").innerHTML = "login";
document.getElementById("btn2").innerHTML = "Register";
// variables
var name = "adam";
var age = 27;
var v = true;
document.write(typeof(name));
var person = { num: 1, name: "adam", salary: 2500 };
document.write("<br>");
document.write(person.salary + " " + name);

function marriage() {
    var m = window.txt.value;
    var m1 = window.txt2.value;
    document.getElementById('lbl').innerHTML = (m + " " + "will" + " " +
        "marry" + " " + m1);


}

function showdata(name, textbox) {
    document.getElementById('lbl').innerHTML = 'hello' + "  " + name;
    textbox.value = 'done';
}

function showinfo(id, name, address) {
    var msg = "your ID: " + id + "<br> your Name is : " + name + "<br> your address is :" + address;
    window.lbl2.innerHTML = msg;

}