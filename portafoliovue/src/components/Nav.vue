<script setup>

import { RouterLink, useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

</script>
<template>
<!-- <header>
    <a href="#" class="logo">Logo</a>
    <ul>
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#" class="">About </a></li>
      <li><a href="#" class="">Work</a></li>
      <li><a href="#" class="">Contact</a></li>
    </ul>
  </header> -->
    <header>
        <RouterLink class="linkNav logo" to="/home" >
            Logo
        </RouterLink>
        <nav class="navContainer">
            
            <div class="router-link">
                <RouterLink class="linkNav" to="/home" exactActiveClass="active">
                    Home
                </RouterLink>
            </div>
            <div class="router-link">
                <RouterLink class="linkNav" to="/about" exactActiveClass="active">
                    About
                </RouterLink>
            </div>
            <div class="router-link">
                <RouterLink class="linkNav" to="/work" exactActiveClass="active">
                    Work
                </RouterLink>
            </div>
            <div class="router-link">
                <RouterLink class="linkNav" to="/contact" exactActiveClass="active">
                    Contact
                </RouterLink>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10000;

    .logo {
        color: #fff;
        font-weight: 700;
        text-decoration: none;
        font-size: 2em;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .navContainer {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navContainer .router-link {
        list-style: none;
        margin-left: 20px;
    }

    .navContainer .router-link .linkNav {
        text-decoration: none;
        padding: 6px 15px;
        color: #fff;
        border-radius: 20px;
    }

    .navContainer .router-link .linkNav:hover,
    .navContainer .router-link .linkNav.active {
        background-color: #fff;
        color: #2b1055;
    }
}

@include MQ(M){
    header{
        .navContainer {
            display: none;
        }  
    }
}
</style>