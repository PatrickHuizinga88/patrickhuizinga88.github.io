<template>
    <a href="https://www.linkedin.com/in/patrick-huizinga-3957b914b/overlay/contact-info/" target="_blank" class="contact-button">
        <i class="far fa-envelope"></i>
        <span>Contact me</span>
    </a>
</template>

<style lang="scss">
$primairy-color: #24D4CD;

.contact-button {
    display: flex;
    align-items: center;
    position: fixed;
    width: 60px;
    height: 60px;
    right: 40px;
    bottom: 40px;
    padding: 0 15px 0 20.5px;
    /* background-color: #fff; */
    background-color: #000;
    box-shadow: 0px 2px 10px rgb(0,0,0,0.75) ;
    border-radius: 50px;
    color: $primairy-color !important;
    font-size: 1.3rem;
    overflow: hidden;
    transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    /* transition-delay: 1.5s;
    -webkit-transition-delay: 1.5s; */
    white-space: nowrap;
    z-index: 2;
}

.contact-button:hover {
    width: 160px;
    padding: 0 20px 0 20px;
    transition-delay: 0s;
    -webkit-transition-delay: 0s;

}

.contact-button:hover span {
    /* color: #101010; */
    color: #fff;
    transition-duration: 0.5s;
    transition-delay: 0.3s;
}

.contact-button span {
    padding-left: 15px;
    /* color: #fff; */
    color: #1a1a1a;
    font-size: 0.9rem;
    transition-duration: 0.5s;
}
</style>