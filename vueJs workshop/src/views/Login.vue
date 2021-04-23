<template>
  <div class="container col-md-4" style="margin-top: 20px">
    <h1 class="text-center">Sign In</h1>
    <form style="margin-top: 60px">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" name="email" required />
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" name="pswd" required/>
      </div>
      <router-link to="/" class="btn btn-primary form-control">Sing In</router-link>
      <div>
        <router-link class="float-right" to="/Forgot"> Forgot ?</router-link>
        <span class="">Already registered </span>
      </div>
    </form>
    <Icons/>

  </div>
</template>




<script>
import Icons from "../components/Icons";
export default {
  name : Icons,
  components:{
    Icons
  }
}
</script>