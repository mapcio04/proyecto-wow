$(function(){

    var int = [
        [1140877654, "CC", "Romelu", "Lukaku","ANDROID"],
        [1196887355, "CC", "Lautaro", "Martinez","IOS"],
        [1110899653, "CC", "Diego", "Godin","ANDROID"],
        [1150867659, "CC", "Radamel", "Falcao","IOS"],
        [1170897658, "CC", "Adrian", "Rabiot","IOS"],
        [1130878657, "CC", "Marco", "Reus","ANDROID"],
        [1120874656, "CC", "Jadon", "Sancho","ANDROID"]
    ]
    
    var form;
    
    form="<table class='table'";
    form+="<thead>";
    form+="<tr>";
    form+= "<th>Documento</th><th>Tipo</th><th>Nombre</th><th>Apellido</th><th>Plataforma Movil</th>";
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