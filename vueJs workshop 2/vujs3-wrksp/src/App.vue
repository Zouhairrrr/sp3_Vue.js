<template>
  <div id="active">
      <Home/>
      <About/>
      <Experience/>
      <Skills/>
      <MyProject/>
      <Footer/> 
  </div>
</template>

<script>
import Home from "./comp/Home";
import About from "./comp/About";
import Experience from "./comp/Experience";
import Skills from "./comp/Skills";
import MyProject from "./comp/MyProject";
import Footer from "./comp/Footer";



export default {
  name: "App",
  components: {
    Home,
    About,
    Experience,
    Skills,
    MyProject,
    Footer
  }
};
</script>

<style scoped>
#active{
  overflow: hidden;
}
</style>