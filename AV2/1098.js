var cont = 0;
var I = 0;
var J = 0;

while(cont <= 10) {
    J = 0;
    while(J<3) {
        J++
        if(I === 1 || I.toFixed(1) == 2 || I === 0){ 
            console.log("I="+Math.round(I)+" J="+Math.round(J+I));
        
        } else {
            console.log("I="+I.toFixed(1)+" J="+(J+I).toFixed(1));
        }
    }
    I = I + 0.2;
    cont++;
    console.log(I);
    
}