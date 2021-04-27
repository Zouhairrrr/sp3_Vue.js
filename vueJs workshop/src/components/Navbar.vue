<template>
  <div class="about">
    <nav class="ab navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand abc" href="#">YouCode YOUSSOUFIA</a>
      <div class="a collapse navbar-collapse" id="navbarSupportedContent">
        <form class="b form-inline my-2 my-lg-0">
          <router-link
            to="/"
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            >Sign Up</router-link
          >
          <router-link
            to="/login"
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            >Sign In</router-link
          >
        </form>
      </div>
    </nav>
  </div>
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
  color: blue !important;
}
.abc {
  color: blue !important;
}

</style>
