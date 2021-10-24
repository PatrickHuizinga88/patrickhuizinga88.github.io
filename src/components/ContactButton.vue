<template>
    <a href="https://www.linkedin.com/in/patrick-huizinga-3957b914b/detail/contact-info/" target="_blank" class="contact-button">
        <i class="far fa-envelope"></i>
        <span>Contact me</span>
    </a>
</template>

<style>
    .contact-button {
        display: flex;
        align-items: center;
        position: fixed;
        width: 50px;
        height: 50px;
        right: 40px;
        bottom: 40px;
        padding: 0 15px 0 15.5px;
        background-color: #fff;
        box-shadow: 0px 2px 10px rgb(0,0,0,0.15) ;
        border-radius: 50px;
        color: #4833EB !important;
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
        color: #101010;
        transition-duration: 0.5s;
        transition-delay: 0.3s;
    }

    .contact-button span {
        padding-left: 15px;
        color: #fff;
        font-size: 0.9rem;
        transition-duration: 0.5s;
    }
</style>