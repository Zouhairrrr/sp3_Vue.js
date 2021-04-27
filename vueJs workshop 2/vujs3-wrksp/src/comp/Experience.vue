<template>
  <div class="container-fluid bg-dark">
      <div class="heading ">
          <h1 class="text-center">Experience</h1>
          <p class="text-center">PROFESSIONEL AND ACADEMIC</p>
        <hr style="width: 14%;border-bottom: 2px solid white;">
      </div>
      <div class="row">
          <div class="col-md-6 left">
            <h3>EDUCATION</h3>
            <p>From September 2001</p>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>2017 - 2020</p>
            <h4>IT License</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>2013 - 2017</p>
            <h4>IT License</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="lol"></div>
          <div class="col-md-6" >
            <h3>PROFESSIONAL</h3>
            <p>01.2020 - 05.2001</p>
            <h4>Urbalog LAER Project</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>07.2019</p>
            <h4>IT License</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse!</p>
            <p>07.2018</p>
            <h4>Pfiffer Vacuum SAS, Annecy</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name :"Experience"
}
</script>

<style>


.container-fluid{
    min-height: 100vh !important;
   
    padding: 2rem;
}
.row{
    margin-top: 40px;
}
.heading h1{
    color: white;
    font-size: 3.3rem  !important;
}
p{
    color: white;
    opacity: .8;
}
h4,h3{
     color: white;
}
.lol{
    border-left: 2px solid white;
    height: 70vh;
    position: absolute;
    left: 50%;
}
.left{
    text-align: end;
}
</style>

