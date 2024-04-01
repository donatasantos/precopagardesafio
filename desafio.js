/* 
- A vista Débito, 10% de desconto.
- A vista no Dinheiro ou PIX, recebe 15% de desconto.
-Em duas vezes, preço normal de etiqueta sem juros.
-Acima de duas vezes, preço normal de etiqueta mais juros de 18%.
*/

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else{
    console.log(precoEtiqueta + (precoEtiqueta + 0.1));
}
