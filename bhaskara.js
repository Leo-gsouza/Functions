function bhaskara(a,b,c){
    let deltaX = ((b*b) - (4*a*c))
    var x1 = ((-b + Math.sqrt(deltaX)) / (2*a))
    var x2 = ((-b - Math.sqrt(deltaX)) / (2*a)) 
    return resultado = [x1,x2]   
 }

bhaskara(1,14,5)

console.log (resultado)