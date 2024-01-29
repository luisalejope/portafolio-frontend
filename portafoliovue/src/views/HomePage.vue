<script setup>
import { ref, onBeforeUnmount, onMounted, nextTick } from 'vue';
import Skills from '@/components/Skills.vue';
import ContactMe from '@/components/ContactMe.vue';
import MineGeeSvg from '@/components/svg/MineGeeSvg.vue'
</script>

<template>
  <!-- <section>
    <img src="https://github.com/pineapplexpres/Images/blob/main/portafolio/clouds.png?raw=true" alt="" id="clouds" ref="clouds" />
    <img src="https://github.com/pineapplexpres/Images/blob/main/portafolio/moon.png?raw=true" alt="profilePhoto" id="moon" ref="moon" />
    <img src="https://github.com/pineapplexpres/Images/blob/main/portafolio/landscape3.png?raw=true" alt="" id="landscape" ref="landscape" />
  </section> -->
  <section>
    <h2 id="text">Hello I'm Luis</h2>
    <a href="#sec" id="btn">Explore</a>
  </section>
  <div class="sec" id="sec">
    <div class="profile">
      <div id="information">
        <h2>Computer Engineer</h2>
        <h3>Front-end developer</h3>
        <p>
          As an adept developer, I have a well-rounded skill set in programming
          and honed talents in UX/UI updates and software testing, making me an
          ideal fit for the Front End Developer position. Further, I am a
          recognized expert in teamwork and a communicative collaborator. My
          previous roles have strengthened my capabilities in innovation and
          motivation, including a keen attention to detail and accuracy. I am
          excited at the prospect of bringing my talents to you.
        </p>
      </div>
      <div class="w-xl">
        <MineGeeSvg />
      </div>
    </div>
  </div>
  <Skills />
  <ContactMe />
</template>

<style lang="scss" scoped>
section {
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(to top, #1c0522, transparent);
        z-index: 1000;
    }
}

#text {
    position: absolute;
    color: #fff;
    white-space: nowrap;
    font-size: 7vw;
    z-index: 9;
    
}

#btn {
    text-decoration: none;
    display: inline-block;
    padding: 8px 30px;
    border-style: none;
    border-radius: 40px;
    background: #fff;
    color: #2b1055;
    font-size: 1.5em;
    z-index: 9;
    transform: translateY(100px);
}

.sec {
    position: relative;
    padding: 100px;
    background: #1c0522;
    max-height: 580px;

    h2 {
        font-size: 3.5em;
        margin-bottom: 10px;
        color: #fff;
    }

    h3 {
        font-size: 2.5em;
        margin-bottom: 10px;
        color: #fff;
    }

    p {
        font-size: 1.2em;
        color: #fff;
    }
}

.profile {
    display: flex;
    justify-content: space-between;
}
</style>
