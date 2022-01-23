<template>
<div class="skills">
  <span id="spec-text">My specialisations</span>
  <div class="skills-grid">
    <div class="box">
      <span class="medium-label">HTML</span>
      <i class="fab fa-html5 medium-icon"></i>
    </div>
    <div class="box">
      <span class="large-label">VUE</span>
      <i id="vue" class="fab fa-vuejs large-icon"></i>
    </div>
    <div class="box">
      <span class="medium-label">CSS</span>
      <i id="css" class="fab fa-css3 medium-icon"></i>
    </div>
    <div class="box">
      <span class="medium-label">JAVASCRIPT</span>
      <i id="js" class="fab fa-js medium-icon"></i>
    </div>
    <div class="box">
      <span class="medium-label">GIT</span>
      <i id="github" class="fab fa-github medium-icon"></i>
    </div>
    <div class="box">
      <span class="small-label">LARAVEL</span>
      <i id="laravel" class="fab fa-laravel small-icon"></i>
    </div>
    <div class="box">
      <span class="small-label">WORDPRESS</span>
      <i id="wordpress" class="fab fa-wordpress small-icon"></i>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.skills {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 15vh 0;

  #spec-text {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 2.2rem;
    margin-bottom: 40px;
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, .3fr);
  grid-gap: 15px;
  width: 80%;
}

.skills-grid > .box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;
  background-color: #383838;
  padding: 0 10px 25px 10px;
  transition: 0.3s ease;
  border-radius: 0.75em;
  min-width: 176px;

  &:hover {
    transform: scale(1.05);
    // box-shadow: 0px 0px 15px rgba($color: #fff, $alpha: .4);
    transition: 0.3s ease;
  }

  &:hover span {
    opacity: 1;
    transition: .3s ease;
    transition-delay: .3s;
    color: #24D4CD;
  }
}

.skills-grid > .box > span {
  font-weight: bolder;
  margin-top: 5px;
  opacity: 0.20;
  transition: .3s ease;
}

.skills-grid > .box > svg {
  margin: 0.5em 0 5px 0;
}

.skills-grid > :nth-child(1),
.skills-grid > :nth-child(3),
.skills-grid > :nth-child(4),
.skills-grid > :nth-child(5) {
  grid-row: span 3;
}

.skills-grid > :nth-child(2) {
  grid-column: 2 / span 2;
  grid-row: 1 / span 4;
}

.skills-grid > :nth-child(6),
.skills-grid > :nth-child(7) {
  grid-row: span 2;
}

.large-label {
  font-size: 2rem;
}

.medium-label {
  font-size: 1.6rem;
}

.small-label {
  font-size: 1.2rem;
}

.small-icon {
  height: 45px;
  width: auto;
}

.medium-icon {
  height: 75px;
  width: auto;
}

.large-icon {
  height: 125px;
  width: auto;
}

@media only screen and (max-width: 1000px){
  .skills-grid {
    width: auto;
  }
}

@media only screen and (max-width: 790px){
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 0,2fr);
    grid-gap: 10px;
    width: 100%;
  }

  .skills-grid > .box {
    padding: 0 10px 10px 10px;
    min-width: auto;
  }

  .skills-grid > .box > span {
    font-weight: bolder;
    margin-top: 5px;
    opacity: 0.5;
    transition: .3s ease;
  }

  .skills-grid > :nth-child(1) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  .skills-grid > :nth-child(2) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  .skills-grid > :nth-child(3) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }

  .skills-grid > :nth-child(4) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  .skills-grid > :nth-child(5) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }

  .skills-grid > :nth-child(6) {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }

  .skills-grid > :nth-child(7) {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }

  .large-label {
    font-size: 1.8rem;
  }

  .medium-label {
    font-size: 1.4rem;
  }

  .small-label {
    font-size: 1rem;
  }

  .small-icon {
    height: 40px;
  }

  .medium-icon {
    height: 65px;
  }

  .large-icon {
    height: 105px;
  }
}
</style>