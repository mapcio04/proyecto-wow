$(function(){

  
    var int = [
        [1140877654, "CC", "Douglas", "Costa","XBOX ONE"],
        [1196887355, "CC", "Duvan", "Zapata","XBOX 360"],
        [1110899653, "CC", "Antoine", "Griezman","XBOX CLASSIC"],
        [1150867659, "CC", "Joshua", "kimmich","XBOX SERIES S"],
        [1170897658, "CC", "David", "Silva","XBOX SERIES X"],
        [1130878657, "CC", "Sergio", "Aguero","XBOX ONE X"],
        [1120874656, "CC", "Kingsley", "Coman","XBOX ONE S"]
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