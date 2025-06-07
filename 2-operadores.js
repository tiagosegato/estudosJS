//Aritméticos: + - * / % **
n = 7 + 3  // 10
n = 7 - 3  // 4
n = 7 * 3  // 21
n = 7 / 3  // 2.3
n = 7 % 3  // 1
n = 7 ** 3 // 343


//Atribuição: = ; Autoatribuição += -= *= /= %= **= ; e Incremento ++ --
n = 7 //atribuição
n = n + 3 //auto atribuição: n = 10
n += 3 //simplificação da autoatribuição
n++ // ou ++n incrementando 1 => n = n + 1


//Relacionais: < > <= >= == === (idêntico) != !==
7 > 3     //true
7 < 3     //false
7 >= 3    //true
7 <= 3    //false
7 == 7    //true
7 === '7' //false
7 != 3    //true
7 !== 3   //true


//Lógicos: && (conjunção) || (disjunção) ! (negação)
true && true //true
true && false //false
false && true //false
false && false //false

true || true //true
true || false //true
false || true //true
false || false //false

!true //false 
!false //true  


//Ternário: condição ? verdadeiro : falso

media >=6 ? 'Aprovado' : 'Reprovado';


//PRECEDÊNCIAS

//Quanto é 3 + 4 * 2 ? 

/*
()
**
* / %
+ -

< > <= >= == === !=

!
&&
||
*/