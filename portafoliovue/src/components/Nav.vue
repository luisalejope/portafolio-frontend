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

<style scoped>
/* .wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 3.5rem;
    background-color: rgb(233, 232, 232);
    -webkit-box-shadow: 0px 3px 13px -5px rgba(0, 0, 0, 0.42);
    -moz-box-shadow: 0px 3px 13px -5px rgba(0, 0, 0, 0.42);
    box-shadow: 0px 3px 13px -5px rgba(0, 0, 0, 0.42);
}

.backwards-container {
    width: 120px;
    animation: move-left 2s linear reverse;

}

.backwards-container>h2 {
    margin-left: 1rem;
}

.logout-container {
    width: 70px;
}

.navContainer {
    width: 90%;
    display: flex;
}

.router-links,
.backwards-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.routes {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.linkNav {
    font-size: 25px;
    margin-left: 1rem;
    font-size: large;
    text-decoration: none;
    color: #323232;
}

.linkNav:hover {
    color: rgb(0, 75, 173);
}

.active {
    color: rgb(0, 75, 173);
}

@keyframes move-left {
  from {
    left: 0;
  }
  to {
    left: 100%;
  }
} */
</style>