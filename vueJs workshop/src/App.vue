<template>
  <div class="container-fluid">
    <navBar />
    <sign />
  </div>
</template>

<script>
import navBar from "./components/navBar";
import sign from "./views/sign";
export default {
  name: "App",
  components: {
    navBar,
    sign,
  },
};
</script>
