$(function(){



var int = [
    [1140877654, "CC", "Robert", "Lewandowski","PS3"],
    [1196887355, "CC", "Cristiano", "Ronaldo","PS4"],
    [1110899653, "CC", "Leroy", "Sane","PS1"],
    [1150867659, "CC", "Thomas", "Muller","PS5"],
    [1170897658, "CC", "Raheem", "Sterling","PS2"],
    [1130878657, "CC", "Lionel", "Messi","PS Vita"],
    [1120874656, "CC", "Serge", "Gnabry","PSP"]
]

var form;

form="<table class='table'";
form+="<thead>";
form+="<tr>";
form+= "<th>Documento</th><th>Tipo</th><th>Nombre</th><th>Apellido</th><th>Consola de videojuegos</th>";
form+= "</tr>";
form+= "</thead>";
form+= "<tbody>";
for(i=0;i<int.length;i++){

    form+= "<tr>";
    for(j=0;j<5;j++)
{
form+="<td>" + int[i][j] + "</td>";

}
form+= "</tr>";

}

form+= "</tbody>";
form+= "</table>";

$(".tablax").html(form);











});