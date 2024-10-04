var season = prompt("Enter You'r Favourite Season:");
var season1 = "Rainy";
var season2 = "Winter";
var season3 = "Summer";
var season4 = "Autumn";
var season5 = "Spring";
  if(season === season1){
    document.write(`<div class="card" style="width: 18rem; margin-left:500px; margin-top:100px;">
        <img src="./assets/img/Rainy.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color:rgb(74, 74, 238); text-align: center; font-size:30px;">Rainy</h5>
          <p class="card-text">Rainy days fill the air with freshness and the soothing sound of raindrops. Nature thrives in vibrant greens, and the world feels calm and cool. It's a perfect time for quiet reflection or cozy moments indoors.</p>
          <a href="#" class="btn btn-primary" style="background-color:rgb(74, 74, 238) ; margin-left: 60px;">Click Here Now</a>
        </div>
      </div>`)
}
 else if(season === season2){
    document.write(`<div class="card" style="width: 18rem; margin-left: 500px; margin-top:100px;">
        <img src="./assets/img/Winter.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color: blue; text-align: center; font-size:30px;">Winter</h5>
          <p class="card-text">Winter brings chilly air and snow-covered landscapes. Cozy moments by the fire and festive celebrations fill the season. It's a time of quiet beauty and reflection.</p>
          <a href="#" class="btn btn-primary" style="background-color: blue; margin-left: 60px;">Click Here Now</a>
        </div>
      </div>`)
} 
 else if(season === season3){
    document.write(` <div class="card" style="width: 18rem; margin-left: 500px; margin-top:100px;">
        <img src="./assets/img/Summer.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color: green; text-align: center;font-size:30px;">Summer</h5>
          <p class="card-text">Summer brings long, sunny days and vibrant energy to nature. It's a time for outdoor fun, vacations, and enjoying the warmth. The season invites relaxation, adventure, and cherished memories.</p>
          <a href="#" class="btn btn-primary" style="background-color: green; margin-left: 60px;">Click Here Now</a>
        </div>
      </div>`)
}
 else if(season === season4){
  document.write(` <div class="card" style="width: 18rem; margin-left: 500px; margin-top:100px;">
        <img src="./assets/img/Autmn.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color:orangered; text-align: center; font-size:30px;">Autumn</h5>
          <p class="card-text">Autumn paints the world in vibrant hues of red, orange, and yellow. The air turns crisp, and nature prepares for rest. It's a season of cozy warmth and quiet reflection.</p>
          <a href="#" class="btn btn-primary" style="background-color: orangered; margin-left: 60px;">Click Here Now</a>
        </div>
      </div>`)
}
 else if(season === season5){
  document.write(`<div class="card" style="width: 18rem; margin-left: 500px; margin-top:100px;">
        <img src="./assets/img/Spring.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color:rgb(209, 71, 117); text-align: center; font-size:30px;">Spring</h5>
          <p class="card-text">Spring brings blooming flowers and fresh greenery. The air is mild and filled with the scent of new life. It's a season of renewal and vibrant beginnings.</p>
          <a href="#" class="btn btn-primary" style="background-color: rgb(209, 71, 117);margin-left: 60px;">Click Here Now</a>
        </div>
      </div>`)
}
else{
  document.write(`<div class="card" style="width: 18rem; margin-left: 500px; margin-top:100px;">
        <img src="./assets/img/Can't find it.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color:red; text-align: center; font-size:30px;">Opps!</h5>
          <p class="card-text" style="text-align: center;">I can't find it what you wan't. </p>
          <a href="#" class="btn btn-primary" style="background-color: red; margin-left: 80px;">Try Again</a>
        </div>
      </div>`)
}
