<template>
  <div class="container-fluid">
    <nav class="ab navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand abc" href="#">YouCode YOUSSOUFIA</a>
      <div class="a collapse navbar-collapse" id="navbarSupportedContent">
          <router-link class="btn btn-outline-success my-2 my-sm-0" to="/">Sign Up</router-link>
          <router-link class="btn btn-outline-success my-2 my-sm-0" to="/Login">Sign In</router-link>
      </div>
    </nav>
  </div>
  <router-view/>
  <Sign/>
</template>

<style scoped>
.ab {
  margin-top: 20px;
}
.a {
  display: flex !important;
  justify-content: flex-end !important;
}
.b {
  width: 30%;
  display: flex !important;
  justify-content: space-evenly !important;
}
.btn {
  color: rgb(0, 0, 0) !important;
}
.btn:hover {
  background-color: rgb(0, 0, 0) !important;
  color: white !important;
}
.abc {
  color: blue !important;
}
.btn-primary{
  background-color:#544848 !important;
  border-color: #544848 !important;
}
</style>
