/* if else
Entre  0 - 11 - bom dia
entre 12 - 17 - boa tarde
Entre 18 - 23 - Boa noite
*/
const hora = 50;
if(hora >= 0 && hora<=11){
    console.log('bom dia');
}else if(hora>=12 && hora <= 17){
    console.log('Boa Tarde');
}else if(hora>= 18 && hora <=23){
    console.log('Boa Noite');
}else{
    console.log('hora errada');
}
