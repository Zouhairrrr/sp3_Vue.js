<template>
  
   <div id="app">
    <div class=" bg-image" style="height:100vh;">
      <div class="text-center text-white name ">
        <h1>YOUR NAME</h1> 
       <h3>Full-Stack Devlepor </h3>
      </div>
              
    </div>
  </div>

</template>

<script>
export default {
    name : "Home"
}
</script>

<style>
   .bg-image{
       height: 100 vh ;
background-image:url(../assets/bg.jpg);
 background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;


 
   
 
   }
   .name{
     display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 flex-direction: column;
 
 
 
  
 
   }

</style>