const grande = document.querySelector('.grande');
const grande2 = document.querySelector('.grande2');
const previus = document.querySelector('.previus');
const next = document.querySelector('.next');
const previus2 = document.querySelector('.previus2');
const next2 = document.querySelector('.next2');
const hamburguesa = document.querySelector('#hamburguesa')
const punto = document.querySelectorAll('.punto');
const punto2 = document.querySelectorAll('.punto2');
const car = document.querySelector('#car');
const box_car = document.querySelector('#box-car');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const button = document.querySelector('#button');
const close = document.querySelector('.close');
const box_mayor = document.querySelector('#box-mayor');
const menu2 = document.querySelector('#menu2');
const contador = document.querySelector('#contador');
const precio = document.querySelector('#preciou');
const btn_add = document.querySelector('#btn-add');
const btn_close = document.querySelector('.btn-close');
const producto_car = document.querySelector('#producto-car');
const empty_producto = document.querySelector('.empty')
const cantidad = document.querySelector('#cantidad');
var value = parseInt(contador.value);
var bdetalle = document.querySelector('#detalle');
var btotal = document.querySelector('#total');
var carrusel2 = document.querySelector('#carrusel2');
// var puntos = document.querySelectorAll('.punto');
var ope = 0;
var cont = 0;



punto.forEach((cadaPunto, j) => {
    punto[j].addEventListener('click', () => {
        let pos = j;
        let operacion = pos * -25;
        grande.style.transform = `translateX(${operacion}%)`;

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('active');
            Carrusel(j);
        })
        punto[j].classList.add('active');
        carrusel2.style.display = "block";
        box_mayor.classList.add('opacity');


    });
});
punto2.forEach((cadaPunto2, i) => {
    punto2[i].addEventListener('click', () => {
        p = i;
        // pos = i;
        ope = p * -25;
        console.log(ope);
        grande2.style.transform = `translateX(${ope}%)`;
        punto2.forEach((cadaPunto2, i) => {
            punto2[i].classList.remove('active');

        })
        punto2[i].classList.add('active');


    });
});

car.addEventListener('click', () => {

    console.log(box_car.style.display);
    if (box_car.style.display == 'none') {
        box_car.style.display = 'block';
        // box_car.style.transform = `translateY(7%)`;

    }
    else {
        box_car.style.display = 'none'
        // box_car.style.transform = `translateY(-50%)`;

    }
})

plus.addEventListener('click', () => {


    value += 1;
    contador.value = value

});

minus.addEventListener('click', () => {

    // let value = parseInt(contador.value);
    value -= 1;
    if (value < 0) {
        value = 0;
    }
    contador.value = value;

});



btn_add.addEventListener("click", () => {
    if (value > 0) {
        let prec = parseFloat(precio.innerHTML.slice(1, 7)).toFixed(2);
        let total = (prec * value).toFixed(2);
        let detalle = "$" + prec + "x" + value;
        bdetalle.innerHTML = detalle;
        btotal.innerHTML = total
        producto_car.style.display = "flex";
        empty_producto.style.display = 'none';
        cantidad.innerHTML = value
        cantidad.style.display = 'block';
        button.style.display = "block";

    } else {
        empty_producto.style.display = 'block';
        cantidad.style.display = 'none';
        button.style.display = "none";



    }





});
close.addEventListener("click", () => {

    carrusel2.style.display = "none";
    box_mayor.classList.remove('opacity');


});

previus.addEventListener("click", () => {


    for (let s = 0; s < punto2.length; s++) {
        if (punto2[s].classList.contains('active')) {
            pos = s;
            punto2[pos].classList.remove('active');
            pos -= 1;
            if (pos <= 0) pos = 0;
            punto2[pos].classList.add('active');
            ope = -25 * pos;


            grande2.style.transform = `translateX(${ope}%)`;


        }



    }








});
previus2.addEventListener('click', () => {
    cont--;
    if (cont < 0) cont = 0;
    let oper = cont * -25;
    grande.style.transform = `translateX(${oper}%)`;


})
next2.addEventListener('click', () => {
    cont++;
    if (cont > 3) cont = 3;
    let oper = cont * -25;
    grande.style.transform = `translateX(${oper}%)`;


})

next.addEventListener("click", () => {


    for (let s = 0; s < punto2.length; s++) {
        if (punto2[s].classList.contains('active')) {
            pos = s;
            console.log(pos);
            punto2[pos].classList.remove('active');

        }


    }
    pos += 1;
    console.log(pos);
    if (pos >= 3) pos = 3;
    punto2[pos].classList.add('active');
    ope = -25 * pos;
    grande2.style.transform = `translateX(${ope}%)`;


});

hamburguesa.addEventListener('click', () => {
    menu2.style.display = "block";
})
btn_close.addEventListener('click', () => {
    menu2.style.display = "none";

})
function Carrusel(pos) {
    for (let a = 0; a < punto2.length; a++) {
        punto2[a].classList.remove('active');

    }
    punto2[pos].classList.add('active');
    let calculo = pos * -25;
    grande2.style.transform = `translateX(${calculo}%)`;

}