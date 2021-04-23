<template>
 <div class="container col-md-4" style="margin-top: 20px">
    <h1 class="text-center">Forgot Password</h1>
    <form style="margin-top: 60px">
      <div class="form-group">
        <label for="email">Email Address:</label>
        <input type="email" class="form-control" id="email" name="email" required />
      </div>
      <router-link to="/" class="btn btn-primary form-control">Reset Password</router-link>
    </form>
  </div>
</template>

<script>
export default {

}
</script>