var heroiXP = 1200;
var heroiName = 'vardelei';
var bronze = 1200;
var prata = 5000;
var ferro = 1000;
var Ouro = 7000;
var platina = 8000;
var ascendente = 9000;
var imortal = 10000;

if (heroiXP <= ferro) {
    console.log('o heroi de nome' + heroiName + 'está no nivel de ferro')}

else if(heroiXP <= bronze) 
    console.log('o heroi de nome' + heroiName + 'está no nivel de bronze')

else if(heroiXP <= prata) 
    console.log('o heroi de nome' + heroiName + 'está no nivel de prata')

else if(heroiXP <= Ouro) 
    console.log('o heroi de nome' + heroiName + 'está no nivel de Ouro')

else if(heroiXP <= platina) 
    console.log('o heroi de nome' + heroiName + 'está no nivel de platina')

else if(heroiXP <= ascendente) 
    console.log('o heroi de nome' + heroiName + 'está no nivel de ascendente')

else if(heroiXP <= imortal) 
    console.log('o heroi de nome' + heroiName + 'está no nivel de imortal')

else if(heroiXP > imortal) 
    console.log('o heroi de nome' + heroiName + 'está no nivel de radiante')
