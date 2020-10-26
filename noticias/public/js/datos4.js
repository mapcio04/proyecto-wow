$(function(){

    var int = [
        [1140877654, "CC", "Benjamin", "Pavard","PC"],
        [1196887355, "CC", "Lucas", "Hernandez","PC"],
        [1110899653, "CC", "Jamal", "Musiala","PC"],
        [1150867659, "CC", "Sadio", "Mane","PC"],
        [1170897658, "CC", "Mohamed", "Salah","PC"],
        [1130878657, "CC", "Roberto", "Firmino","PC"],
        [1120874656, "CC", "Thiago", "Alcantara","PC"]
    ]
    
    var form;
    
    form="<table class='table'";
    form+="<thead>";
    form+="<tr>";
    form+= "<th>Documento</th><th>Tipo</th><th>Nombre</th><th>Apellido</th><th>Dispositvo de juegos</th>";
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