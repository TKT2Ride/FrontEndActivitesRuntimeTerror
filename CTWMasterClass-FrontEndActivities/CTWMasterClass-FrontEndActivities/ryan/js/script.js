const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let num;
var img;
let win = 0;
let lose = 0;
let tie = 0

function rNum() {
    ctx.clearRect(0, 0, 300, 300);
    num = Math.floor((Math.random() * 3) + 1);
    console.log(num);
    img = document.getElementById(num);
    if (num == 1) {
        ctx.drawImage(img, 88, 0, 132, 300);
    }
    else if (num == 2) {
        ctx.drawImage(img, 89, 0, 101, 300);
    }
    else {
        ctx.drawImage(img, 60, 0, 171, 300);
    }
    var rock = document.getElementById("rock")
    var paper = document.getElementById("paper")
    var scissors = document.getElementById("scissors")

    if ((rock.checked == true) && (num == 2)) {
        document.getElementById("demo").innerHTML = "You win! Good job!"
        win++;
    }
    else if ((paper.checked == true) && (num == 1)) {
        document.getElementById("demo").innerHTML = "You win! Good job!"
        win++;
    }
    else if ((scissors.checked == true) && (num == 3)) {
        document.getElementById("demo").innerHTML = "You win! Good job!"
        win++;
    } else if ((scissors.checked == true) && (num == 2)) {
        document.getElementById("demo").innerHTML = "Tie :/"
        tie++;
    } else if ((rock.checked == true) && (num == 1)) {
        document.getElementById("demo").innerHTML = "Tie :/"
        tie++;
    } else if ((paper.checked == true) && (num == 3)) {
        document.getElementById("demo").innerHTML = "Tie :/"
        tie++;
    }
    else {
        document.getElementById("demo").innerHTML = "You Lose! Sorry :("
        lose++;
    }

    document.getElementById("total").innerHTML = win + " win(s)"
    document.getElementById("sec").innerHTML = lose + " lose(s)"
    document.getElementById("es").innerHTML = tie + " tie(s)"
}

//.src="img/rps/" + num + ".png"