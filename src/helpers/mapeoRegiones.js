import data from '../db/data.json';

export const mapeoRegiones = () => {

     //separamos por regiones
     const africa = [];
     const americas = [];
     const asia = [];
     const europe = [];
     const oceania = [];
 
     for (const objeto of data) {
         
         switch (objeto.region) {
             case 'Africa':
                 africa.push(objeto)
                 break;
             case 'Americas':
                 americas.push(objeto)
                 break;
             case 'Asia':
                 asia.push(objeto)
                 break;
             case 'Europe':
                 europe.push(objeto)
                 break;
             case 'Oceania':
                 oceania.push(objeto)
                 break;
             default:
                 break;
         }
 
     }

     
    console.log(africa)
    console.log(americas)
    console.log(asia)
    console.log(europe)
    console.log(oceania)


}
