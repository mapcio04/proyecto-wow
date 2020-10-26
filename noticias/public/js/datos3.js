$(function(){

   
    var int = [
        [1140877654, "CC", "Mikel", "Merino","SWITCH"],
        [1196887355, "CC", "Paulo", "dibala","3DS"],
        [1110899653, "CC", "karim", "Benzema","WII"],
        [1150867659, "CC", "Corentin", "Tolisso","NINTENDO 64"],
        [1170897658, "CC", "Alphonso", "Davies","SUPER NINTENDO"],
        [1130878657, "CC", "Bouna", "Sarr","GAMECUBE"],
        [1120874656, "CC", "Leon", "Goretzka","GBA"]
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