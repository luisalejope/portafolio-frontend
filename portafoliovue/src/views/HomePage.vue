<script setup>
import { ref, onBeforeUnmount, onMounted, nextTick } from 'vue';
import Skills from '@/components/Skills.vue';
import ContactMe from '@/components/ContactMe.vue';
import MineGeeSvg from '@/components/svg/MineGeeSvg.vue'

const clouds = ref(null);
const moon = ref(null)

const handleScroll = () => {
    let value = window.scrollY;
    nextTick(() => {
        if (clouds.value) {
          clouds.value.style.left = value * 0.25 + 'px';
        }
        if (moon.value) {
          moon.value.style.top = value + 'px';
        }
    });
};

onMounted(() => {
    
        window.addEventListener('scroll', handleScroll);
    
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section>
    <img src="https://github.com/pineapplexpres/Images/blob/main/portafolio/clouds.png?raw=true" alt="" id="clouds" ref="clouds" />
    <img src="https://github.com/pineapplexpres/Images/blob/main/portafolio/moon.png?raw=true" alt="profilePhoto" id="moon" ref="moon" />
    <h2 id="text">Hello I'm Luis</h2>
    <a href="#sec" id="btn">Explore</a>
    <img src="https://github.com/pineapplexpres/Images/blob/main/portafolio/landscape3.png?raw=true" alt="" id="landscape" ref="landscape" />
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

<style scoped>

</style>
