<template>
    <div class="skills">
        <span id="spec-text">My specialisations</span>
        <div class="specialisations">
            <div class="row">
                <div class="item col">
                <i class="fab fa-vuejs"></i>
                <span>Vue</span>
                </div>
                <div class="item col">
                <i class="fab fa-html5"></i>
                <span>HTML</span>
                </div>
                <div class="item col">
                <i class="fab fa-css3-alt"></i>
                <span>(S)CSS</span>
                </div>
                <div class="item col">
                <i class="fab fa-js"></i>
                <span>JavaScript</span>
                </div>
            </div>
        </div>
        <div class="knowledge">
            <span id="know-text">and knowledge of...</span>
            <div class="knowledge-grid">
                <div class="item small">
                    <i class="fab fa-github"></i>
                    <span>Github</span>
                </div>
                <div class="item small">
                    <i class="fab fa-wordpress"></i>
                    <span>WordPress</span>
                </div>
                <div class="item small">
                    <i class="fab fa-laravel"></i>
                    <span>Laravel</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.specialisations {
    display: none;
    flex-direction: row;
    margin: 30px 0 100px 0;
    color: $primairy-color;
    font-size: 4rem;

    span {
        // font-family: "Poppins Medium";
        font-family: "Poppins";
        font-weight: 500;
        font-size: 1.1rem;
        // color: #101010;
        color: #fff;
        margin-top: 5px;
    }

    // i {
    //     font-size: 4rem;
    //     color: #4833EB;
    // }
}

#know-text {
    // font-family: "Poppins Medium";
    font-family: "Poppins";
    font-weight: normal;
    font-size: 1.4rem;
}

.knowledge {
    display: none;
}

.knowledge-grid {
    position: relative;
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    color: $primairy-color;
    font-size: 2.8rem;

    span {
        // font-family: "Poppins Medium";
        font-family: "Poppins";
        font-weight: 500;
        font-size: 0.9rem;
        // color: #101010;
        color: #fff;
        margin-top: 5px;
    }

    .item {
        margin: 0 35px 0 35px;
    }
}

.item {
    display: flex;
    flex-direction: column;
    font-style: normal;
    align-items: center;
    margin: 0 40px 20px 40px;
}
</style>