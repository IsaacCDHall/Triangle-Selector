function nTriangle(side1, side2, side3) {
  if((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)) {
    return true
  } else {
    return false
  }
}

function equilateral(side1, side2, side3) {
  if(side1 === side2 && side2 === side3) {
    return true
  } else {
    return false
  }
}

function isosceles(side1, side2, side3) {
  if(side1 === side2 || side1 === side3 || side2 === side3) {
    return true
  } else {
    return false
  }
}

function scalene(side1, side2, side3) {
  if(side1 !== side2 && side1 !== side3 && side2 !== side3) {
    return true
  } else {
    return false
  }
}


//jQuery shit

$(document).ready(function () {
  $("#forms").submit(function(event){
    event.preventDefault();
    let side1 = parseInt($('#side1Length').val());
    let side2 = parseInt($('#side2Length').val());
    let side3 = parseInt($('#side3Length').val());

    let result = isosceles(side1, side2, side3);

    $("#output-nTriangle").text(result);
  });
});
