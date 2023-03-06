function Funcao() {

    var nome = document.getElementById("nome").value;
    var res =  "Prazer em conhece-lo!   "
    document.getElementById("respon").innerHTML = res + nome;

}

function cor() {

    var ren = document.getElementById("r2").value;
    var res =  "Legal futebol é um esporte muito legal !!! ";
    var pt = "Você tem problema?";
    var N = "Não entendi";
    if(ren =="S"||ren =="s"||ren =="Sim"||ren =="sim"){

        document.getElementById("rer").innerHTML = res;
        
    }else if(ren =="N"||ren =="n"||ren =="Não"||ren =="Nao"||ren =="nao"){
        document.getElementById("rer").innerHTML = pt;
    }
    else{document.getElementById("rer").innerHTML = N;}
    
}

function time() {

    var re = document.getElementById("r3").value;
    var j = "Cara, Você é foda";
    var i = "Você é um incel cara!!";
    var N = "Não entendi";
    if(re =="S"||re =="s"||re =="Sim"||re =="sim"){

        document.getElementById("mat").innerHTML = j;
        
    }else if(re =="N"||re =="n"||re =="Não"||re =="Nao"||re =="nao"){
        document.getElementById("mat").innerHTML = i;
    }
    else{document.getElementById("mat").innerHTML = N;
    }

}



