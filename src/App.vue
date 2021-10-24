<template>
  <div id="app">
    <div class="wrapper revert"></div>
    <custom-nav></custom-nav>
    <div class="container">
      <span class="toptext" v-parallax.centerX="0.4">CREATIVITY</span>
      <section id="home">
        <div class="media responsive">
          <img src=".\assets\images\me_blob_trans_2.png" id="me_blob_small" draggable="false">
        </div>
        <div class="content">
          <span class="header">
            Hi, I am 
            <span class="name">Patrick Huizinga</span>
          </span>
          <span class="subheader">
            A front-end developer that loves to enrich the web by building good-looking websites.
          </span>
          <div class="navigate-buttons">
            <a href="#aboutme" class="nav-button btnFillup liquidbg">Learn about me</a>
            <span class="spacing">or</span>
            <a href="https://github.com/PatrickHuizinga88" class="nav-button btnFillup liquidbg" target="_blank">View projects</a>
          </div>
        </div>
        <div class="media">
          <!-- <img src=".\assets\images\blob_gradient.png" id="blob" draggable="false"> -->
          <!-- <img src=".\assets\images\me_cutout.png" id="me" draggable="false"> -->
          <img src=".\assets\images\me_blob_trans.png" id="me_blob" draggable="false">
        </div>
        <!-- onContextMenu="return false;" -->
        <!-- <div class="go-down">
          <a href="#aboutme" class="scroll-down"><i class="fas fa-chevron-down"></i></a>
        </div> -->
      </section>
      <section id="aboutme">
        <div class="bio">
          <img id="hidden-portrait" src=".\assets\images\me_portrait.jpg" draggable="false">
          <div class="about-text">
            <span id="about-header">ABOUT 
              <span id="hidden-text">ME</span> 
            </span>
            <span id="about-description">During my Application- and mediadeveloper education which included internships and creating projects through teamwork, I've grown a passion for front-end development. Creating and improving the visualization of websites is my mission.</span>
          </div>
          <div class="about-image">
            <span>ME</span>
            <img id="portrait" src=".\assets\images\me_portrait.jpg" draggable="false">
          </div>
        </div>
        <skills></skills>
      </section>
      <contact-button></contact-button>
    </div>
  </div>
</template>

<script>
import CustomNav from './components/CustomNav.vue'
import Skills from './components/Skills.vue'
import ContactButton from './components/ContactButton.vue'

export default {
  name: 'App',
  metaInfo: {
      title: 'Portfolio | Patrick Huizinga'
  },
  components: {
    CustomNav, 
    Skills,
    ContactButton
  }
}
</script>

<style lang="scss">
@import './assets/styles/style.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222222;
  font-family: "Poppins", Helvetica, Arial;
}
</style>
