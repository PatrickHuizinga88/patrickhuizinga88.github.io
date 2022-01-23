<template>
    <nav class="top-nav" id="myTopnav">
        <div class="container">
            <div class="items-container">
                <a class="nav-item" href="#aboutme">About me</a>
                <!-- <a class="nav-item" href="#projects">Projects</a> -->
                <!-- <a class="nav-item" href="#contact">Contact</a> -->
            </div>
            <!-- <a href="javascript:void(0);" class="icon" @click="myFunction">
                <i class="fa fa-bars"></i>
            </a> -->
            <!-- <a class="logo" href="#home"><img src="../assets/images/PH_bodoni_v1.png"></a> -->
            <a class="logo" href="#home"><img src="../assets/images/PH_bodoni_v1_white.png"></a>
            <div class="social-container">
                <a class="social-button" href="https://www.linkedin.com/in/patrick-huizinga-3957b914b/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">

$primairy-color: #24D4CD;
$secondary-color: #A200FF;

nav {
    position: absolute;
    overflow: hidden;
    top: 0;
    width: 100%;
    /* background: #fff; */
    background: #000;
    /* border-bottom: 1px solid #101010; */
    border-bottom: 1px solid #000;
    /* border-bottom: 1px solid lightgray; */
    /* box-shadow: 0px 2px 5px #dddddd; */
    z-index: 100;
}

nav .container {
    text-align: center !important;
}

.items-container {
    display: block;
    float: left;
    width: 40%;
    height: 60px;
    line-height: 50px;
}

a {
    /* color: #101010 !important; */
    color: #fff !important;
    text-decoration: none !important;
}

.nav-item {
    position: relative;
    float: left;
    margin-right: 25px;
    padding-top: 5px;
    border: 0;
    transition: padding 0s, border 0.3s;
}

.nav-item:hover {
    /* box-shadow: 0 0 12px rgba(70,150,240,0.7) inset; */
    /* box-shadow: inset 0 7px 13px -13px rgba(255, 0, 85, 1); */
    position: relative;
    padding: 0;
    border-top: 5px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to left, $primairy-color, $secondary-color);
    transition: 0.3s;
}

.logo {
    opacity: 1;
    transition: 0.3s;
    margin: auto;
}

.logo:hover {
    opacity: 0.75;
    transition: 0.3s;
}

.logo img {
    height: 40px;
    margin: 10px;
    transition: 0.3s;
}

.social-container {
    float: right;
    width: 40%;
    line-height: 60px;
}

.social-button {
    float: right;
    opacity: 1;
    transition: 0.3s;
}

.social-button:hover {
    opacity: 0.75;
    transition: 0.3s;
}

.icon {
  display: none;
}

/* @media screen and (max-width: 600px) {
  .top-nav a:not(:first-child) {display: none;}
  .top-nav a.icon {
    float: left;
    display: block;
  }
}*/

@media screen and (max-width: 600px) {
  /* .top-nav.responsive {position: relative;}
  .top-nav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .top-nav.responsive a {
    float: none;
    display: block;
    text-align: left;
  } */

    .items-container {
        display: none;
    }

    nav .container {
        text-align: left !important;
    }

    .logo img {
        margin: 10px 0 10px 0
    }

}


</style>

<script>
    export default {
        data: function () {
            return {

            }
        },
        methods: {
            myFunction: function () {
                let nav = document.getElementById("myTopnav");
                if (nav.className === "top-nav") {
                    nav.className += " responsive";
                } else {
                    nav.className = "top-nav";
                }
            }
        }
    }
</script>

