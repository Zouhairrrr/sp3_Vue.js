<template>
  <div id="app">
      <Home/>
      <About/>
      <Experience/>
      <Skills/>
      <MyProject/>
      <Footer/> 
  </div>
</template>

<script>
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import MyProject from "./components/MyProject";
import Footer from "./components/Footer";



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