function calcBonus() {
    let box1 = document.getElementById("box1").value;
    let box2 = document.getElementById("box2").value;
    var sum = (Number(box1) / (1 + (Number(box2) / 100)));
    var sum = sum.toFixed(0);
    document.getElementById("b").value = sum;
}
function calcRight() {
    let box3 = document.getElementById("box3").value;
    let box4 = document.getElementById("box4").value;
    let box5 = document.getElementById("box5").value;
    var sum = (Number(box3) + (Number(box5) * (Number(box4) / 100))) / (1 + (Number(box4) / 100));
    var sum = sum.toFixed(0);
    document.getElementById("r").value = sum;
}
function calcPay() {
    let box6 = document.getElementById("box6").value;
    let box7 = document.getElementById("box7").value;
    var multiply = (Number(box6) * Number(box7));
    if (multiply > 10000000) {
        var sum = multiply * (1 + 0.0027 + 0.00015);
        var total = sum + 25;
        var total = total.toFixed(2);
        document.getElementById("c").value = total;
    } else if (multiply >= 2000000 && multiply < 10000000) {
        var sum = multiply * (1 + 0.0030 + 0.00015);
        var total = sum + 25;
        var total = total.toFixed(2);
        document.getElementById("c").value = total;
    } else if (multiply >= 500000 && multiply < 2000000) {
        var sum = multiply * (1 + 0.0034 + 0.00015);
        var total = sum + 25;
        var total = total.toFixed(2);
        document.getElementById("c").value = total;
    } else if (multiply >= 50000 && multiply < 500000) {
        var sum = multiply * (1 + 0.0037 + 0.00015);
        var total = sum + 25;
        var total = total.toFixed(2);
        document.getElementById("c").value = total;
    } else {
        var sum = multiply * (1 + 0.0040 + 0.00015);
        var total = sum + 25;
        var total = total.toFixed(2);
        document.getElementById("c").value = total;
    }
}
function calcSell() {
    let box8 = document.getElementById("box8").value; //quantity
    let box9 = document.getElementById("box9").value; // Purchase price
    let box10 = document.getElementById("box10").value; // Selling price
    var income = Number(box8) * Number(box10);
    var invest = Number(box8) * Number(box9);
    if (income > 10000000) {
        var nettotal = income * (1 - 0.0027 - 0.00015) - 25;
        var cgt = (nettotal - invest) * (1 - 0.95);
        var total = nettotal - cgt;
        var total = total.toFixed(2);
        document.getElementById("d").value = total;
    } else if (income >= 2000000 && income < 10000000) {
        var nettotal = income * (1 - 0.0030 - 0.00015) - 25;
        var cgt = (nettotal - invest) * (1 - 0.95);
        var total = nettotal - cgt;
        var total = total.toFixed(2);
        document.getElementById("d").value = total;
    } else if (income >= 500000 && income < 2000000) {
        var nettotal = income * (1 - 0.0034 - 0.00015) - 25;
        var cgt = (nettotal - invest) * (1 - 0.95);
        var total = nettotal - cgt;
        var total = total.toFixed(2);
        document.getElementById("d").value = total;
    } else if (income >= 50000 && income < 500000) {
        var nettotal = income * (1 - 0.0037 - 0.00015) - 25;
        var cgt = (nettotal - invest) * (1 - 0.95);
        var total = nettotal - cgt;
        var total = total.toFixed(2);
        document.getElementById("d").value = total;
    } else {
        var nettotal = income * (1 - 0.0040 - 0.00015) - 25;
        var cgt = (nettotal - invest) * (1 - 0.95);
        var total = nettotal - cgt;
        var total = total.toFixed(2);
        document.getElementById("d").value = total;
    }
}
function invest()  {
    let box11 = document.getElementById("box11").value;
    let box12 = document.getElementById("box12").value;
    let box13 = document.getElementById("box13").value;
    var eps = Number(box11) / Number(box12);
    var eps = eps.toFixed(2);
    document.getElementById("eps").value= eps;
    var sum = 22.5 * Number(box13) * eps;
    var sum = Math.sqrt(sum);
    var sum = sum.toFixed(0);
    document.getElementById("v").value = sum;
}
// Close of modal or card
document.querySelector('.close').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'none';
    });

document.querySelector('.close1').addEventListener('click',
    function () {
        document.querySelector('.bg-modal1').style.display = 'none';
    });
document.querySelector('.close2').addEventListener('click',
    function () {
        document.querySelector('.bg-modal2').style.display = 'none';
    });
document.querySelector('.close3').addEventListener('click',
    function () {
        document.querySelector('.bg-modal3').style.display = 'none';
    });
document.querySelector('.close4').addEventListener('click',
    function () {
        document.querySelector('.bg-modal4').style.display = 'none';
    });

//Open Modal
document.getElementById('button').addEventListener('click',
    function () {
        document.querySelector('.bg-modal1').style.display = 'flex';
    });
//selling Stocks
document.getElementById('button1').addEventListener('click',
    function () {
        document.querySelector('.bg-modal2').style.display = 'flex';
    });
    
//bonus Adjustment
    document.getElementById('button2').addEventListener('click',
    function () {
        document.querySelector('.bg-modal3').style.display = 'flex';
    });
   
//right Adjustment
     document.getElementById('button3').addEventListener('click',
     function () {
         document.querySelector('.bg-modal3').style.display = 'flex';
     });
   
//value Investing
     document.getElementById('button4').addEventListener('click',
     function () {
         document.querySelector('.bg-modal4').style.display = 'flex';
     });
    
