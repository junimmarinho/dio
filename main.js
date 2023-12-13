/******************************************************************************
Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
var saudoVitorias = 12;
var saudoDerrotas = 2;
var saudoGeral = saudoVitorias - saudoDerrotas;

function nivelup(saudo) {
    var classificacao;

    if (saudo < 10) {
        classificacao = 'ferro'
    } 
    else if (11<= saudo <= 20) {
        classificacao = 'bronze'
    } 
    else if ( 21<= saudo <= 50) {
        classificacao = 'prata'
    }
    else if ( 51<= saudo <= 80) {
        classificacao = 'ouro'
    }
    else if ( 81<= saudo <= 90) {
        classificacao = 'Diamante'
    } 
    else if ( 91 <= saudo <=100) {
        classificacao = 'Lendario'
    }
    else if (saudo >= 101) {
        classificacao = 'imortal'
    }

    return classificacao;
}

var nivel = nivelup(saudoGeral);


print('o heroi possui um saudo de vitórias de ' + saudoGeral + 'está no nível de ' + nivel)