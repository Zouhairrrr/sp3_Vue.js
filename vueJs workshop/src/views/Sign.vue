<template>
  <div class="container col-md-4" style="margin-top: 20px">
    <h1 class="text-center">Sign Up</h1>
    <form style="margin-top: 60px">
      <div class="form-group">
        <label for="text">Full Name:</label>
        <input type="text" class="form-control" id="text" name="text" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" name="email" />
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" name="pswd" />
      </div>
      <router-link to="/" class="btn btn-primary form-control">Sing Up</router-link>
      <div>
        <router-link class="float-right" to="/login"> SingIn ?</router-link>
        <span class="">Already registered </span>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  
}
</script>