<!-- @format -->

<template>
  <footer class="bg-dark text-center text-white">
    <div class="text-start p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2020 YouCode
    </div>
    <div class="row mol">
      <div class="col-md-1"><i class="fab fa-facebook-f"></i></div>
      <div class="col-md-1"><i class="fab fa-linkedin-in"></i></div>
      <div class="col-md-1"><i class="fab fa-instagram"></i></div>
      <div class="col-md-1"><i class="fab fa-github"></i></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>

footer{
    display: flex !important;
    justify-content: space-between !important;
}
.mol{
    margin: 0!important;
    align-content: center;
}

</style>
