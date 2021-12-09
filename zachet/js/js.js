var btn = document.querySelector('.btn'),
    check1 =document.querySelector('.check1'),
    check2 =document.querySelector('.check2'),
    check3 =document.querySelector('.check3'),
    kolvo1 =document.querySelector('.kolvo1'),
    kolvo2 =document.querySelector('.kolvo2'),
    vivod =document.querySelector('.vivod'),
    skid = document.querySelector('.skid'),
    clear = document.querySelector('.clear'),
    kolvo3 =document.querySelector('.kolvo3');
     let kolg = 120;
     let nosk = 100;
     let fut = 350;
     let viv;
     let viv2;
     let viv3;
     let viv4;
     let viv5;
     let viv6;
     let viv7;
     let sk1 = 3;
     let sk2 = 5;
    btn.onclick=function() {
if(check1.checked != false || check2.checked != false || check3.checked != false){

 if(kolvo1.value >= 2 && kolvo1.value < 4) {  
    if(check1.checked == true )
    {
        viv = (kolg * kolvo1.value) - ((kolg * kolvo1.value) * 0.03) ;
        skid.value = sk1;
        vivod.value = viv;
    } 
}
      if( kolvo1.value >= 4) {  
        if(check1.checked == true )
        {
            viv = (kolg * kolvo1.value) - ((kolg * kolvo1.value) * 0.05) ;
            skid.value = sk2;
            vivod.value = viv;
            
        } 
  }

  if(kolvo2.value >= 2 && kolvo2.value < 4){
  
     if(check2.checked == true)
    {
        viv2 = (nosk * kolvo2.value) - ((nosk * kolvo2.value) *0.03) ;
        skid.value = sk1;
        vivod.value = viv2;
    }
}

if( kolvo2.value >= 4){
  
    if(check2.checked == true)
   {
       viv2 = (nosk * kolvo2.value) - ((nosk * kolvo2.value) *0.05) ;
       skid.value = sk2;
       vivod.value = viv2;
   }
}

if(kolvo3.value >= 4 && kolvo3.value >= 4){
     if (check3.checked == true)
     {
        viv3 = (fut * kolvo3.value)- ((fut * kolvo3.value)*0.03) ;
        skid.value = sk1;
        vivod.value = viv3;
     }
    }
    if( kolvo2.value < 4){
        if (check3.checked == true)
        {
           viv3 = (fut * kolvo3.value)- ((fut * kolvo3.value)*0.05);
           skid.value = sk2;
           vivod.value = viv3;
        }
       }


     if(kolvo1.value >= 2 && kolvo1.value < 4 || kolvo2.value >= 2 && kolvo2.value < 4 ){
      if ( check1.checked == true && check2.checked == true)
     {
        viv4 = (kolg * kolvo1.value + nosk * kolvo2.value) - ((kolg * kolvo1.value + nosk * kolvo2.value)*0.03) ;
        skid.value = sk1;
        vivod.value = viv4;

     }
    }
    if(kolvo1.value  >= 4 ||  kolvo2.value >= 4 ){
        if ( check1.checked == true && check2.checked == true)
       {
          viv4 = (kolg * kolvo1.value + nosk * kolvo2.value) - ((kolg * kolvo1.value + nosk * kolvo2.value)*0.05) ;
          skid.value = sk2;
          vivod.value = viv4;
  
       }
      }




    if(kolvo1.value >= 2 && kolvo1.value < 4 || kolvo3.value >= 2 && kolvo3.value < 4 ){
      if (check1.checked == true && check3.checked == true)
     {
        viv5 = (kolg * kolvo1.value + fut * kolvo3.value) - ((kolg * kolvo1.value + fut * kolvo3.value)*0.03);
        skid.value = sk1;
        vivod.value = viv5;
     }
    }
    if( kolvo1.value >= 4 ||  kolvo3.value >= 4 ){
        if (check1.checked == true && check3.checked == true)
       {
          viv5 = (kolg * kolvo1.value + fut * kolvo3.value) - ((kolg * kolvo1.value + fut * kolvo3.value)*0.05);
          skid.value = sk2;
          vivod.value = viv5;
       }
      }

    if(kolvo2.value >= 2 && kolvo2.value < 4 || kolvo3.value >= 2 && kolvo3.value < 4 ){
     if (check2.checked == true && check3.checked == true)
     {
        viv6 = (nosk * kolvo2.value + fut * kolvo3.value) - ((nosk * kolvo2.value + fut * kolvo3.value)*0.03);
        skid.value = sk1;
        vivod.value = viv6;
     }
    }
    if( kolvo2.value >= 4 ||  kolvo3.value >= 4 ){
        if (check2.checked == true && check3.checked == true)
        {
           viv6 = (nosk * kolvo2.value + fut * kolvo3.value) - ((nosk * kolvo2.value + fut * kolvo3.value)*0.05);
           skid.value = sk2;
           vivod.value = viv6;
        }
       }

    if((kolvo1.value >= 2 && kolvo1.value < 4) || (kolvo2.value >= 2 && kolvo2.value < 4) || (kolvo3.value >= 2 && kolvo3.value < 4)){
     if (check1.checked == true && check2.checked == true && check3.checked == true)
     {
        viv7 = (kolg * kolvo1.value + nosk * kolvo2.value + fut * kolvo3.value)-((kolg * kolvo1.value + nosk * kolvo2.value + fut * kolvo3.value)*0.03);
        vivod.value = viv7;
        skid.value = sk1;
        
     }
    }
    if(kolvo1.value >= 4 ||   kolvo2.value >= 4 || kolvo3.value >= 4){
        if (check1.checked == true && check2.checked == true && check3.checked == true)
        {
           viv7 = (kolg * kolvo1.value + nosk * kolvo2.value + fut * kolvo3.value)-((kolg * kolvo1.value + nosk * kolvo2.value + fut * kolvo3.value)*0.05);
           vivod.value = viv7;
           skid.value = sk2;
           
        }
       }

    

}
else{
   alert("Вы не выбрали товар!");
}
    }
    clear.onclick = function() {
      check1.checked = false;
      check2.checked = false;
      check3.checked = false;
      kolvo1.value = "1";
      kolvo2.value = "1";
      kolvo3.value = "1";
      vivod.value = "";
      skid.value = "";
    }