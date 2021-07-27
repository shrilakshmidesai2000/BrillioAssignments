//pyramid printing
for(var i=0;i<=5;i++){
    var x="";
    for(var j=0;j<=i;j++){
        x+="*"
    }
     console.log(x)
}

//inverse pyramid
for(var i=5;i>=0;i--){
    var x="";
    for(var j=0;j<=i;j++){
        x+="*"
    }
     console.log(x)
}

//pyramid starting from middle
var n=5;
var m = "";
for(var i=1;i<n;i++){
    for(var j=1;j<n-1;j++){
        m+=" "
    }
    for(var k=0;k<2*i-1;k++){
        m+="*";
    }
    m+="\n";
}
console.log(m)