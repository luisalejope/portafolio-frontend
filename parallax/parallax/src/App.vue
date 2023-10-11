<script setup>
import { ref, onBeforeUnmount, onMounted, nextTick } from 'vue';
import VueSvg from '@/components/svg/VueSvg.vue';
import ReactSvg from '@/components/svg/ReactSvg.vue';
import JsSvg from '@/components/svg/JsSvg.vue';
import HtmlSvg from '@/components/svg/HtmlSvg.vue';
import FigmaSvg from '@/components/svg/FigmaSvg.vue';
import CssSvg from '@/components/svg/CssSvg.vue';
import BootstrapSvg from '@/components/svg/BootstrapSvg.vue';
import GithubSvg from '@/components/svg/GithubSvg.vue';
import Icon from '@/components/global/Icon.vue';

const clouds = ref(null);
const moon = ref(null)

const skills = [
    {
        icon: 'VueSvg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptas ipsa aliquid error vitae dolorem esse possimus quos ducimus quis! Quasi quo voluptates recusandae veritatis similique enim reprehenderit ab quidem?',
    },
    {
        icon: 'ReactSvg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptas ipsa aliquid error vitae dolorem esse possimus quos ducimus quis! Quasi quo voluptates recusandae veritatis similique enim reprehenderit ab quidem?',
    },
    {
        icon: 'JsSvg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptas ipsa aliquid error vitae dolorem esse possimus quos ducimus quis! Quasi quo voluptates recusandae veritatis similique enim reprehenderit ab quidem?',
    },
    {
        icon: 'HtmlSvg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptas ipsa aliquid error vitae dolorem esse possimus quos ducimus quis! Quasi quo voluptates recusandae veritatis similique enim reprehenderit ab quidem?',
    },
    {
        icon: 'FigmaSvg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptas ipsa aliquid error vitae dolorem esse possimus quos ducimus quis! Quasi quo voluptates recusandae veritatis similique enim reprehenderit ab quidem?',
    },
    {
        icon: 'CssSvg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptas ipsa aliquid error vitae dolorem esse possimus quos ducimus quis! Quasi quo voluptates recusandae veritatis similique enim reprehenderit ab quidem?',
    },
    {
        icon: 'BootstrapSvg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptas ipsa aliquid error vitae dolorem esse possimus quos ducimus quis! Quasi quo voluptates recusandae veritatis similique enim reprehenderit ab quidem?',
    },
    {
        icon: 'GithubSvg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptas ipsa aliquid error vitae dolorem esse possimus quos ducimus quis! Quasi quo voluptates recusandae veritatis similique enim reprehenderit ab quidem?',
    }
]

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
  <header>
    <a href="#" class="logo">Logo</a>
    <ul>
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#" class="">About </a></li>
      <li><a href="#" class="">Work</a></li>
      <li><a href="#" class="">Contact</a></li>
    </ul>
  </header>
  <section>
    <img src="./assets/clouds.png" alt="" id="clouds" ref="clouds" />
    <img src="./assets/moon.png" alt="profilePhoto" id="moon" ref="moon" />
    <h2 id="text">Hello I'm Luis</h2>
    <a href="#sec" id="btn">Explore</a>
    <img src="./assets/landscape3.png" alt="" id="landscape" ref="landscape" />
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
      <img src="./assets/graduated.png" alt="" />
    </div>
  </div>
  <div id="skills">
    <h2>My skills</h2>
    <div class='skills-container'>
        <template v-for="(skill, index) in skills" :key="index">
            <div  class="skill">
                <Icon size='icon-xxl'>
                    <component
                         :is="skill.icon" 
                         :key="index"
                    />
                </Icon>
                <p>
                {{skill.description}}
                </p>
            </div>
        </template>
    </div>
    <!-- Development skills -->

    <div class="skillsContainer">
      <div class="skill">
        <h2>UX/UI</h2>
        <h3>
          I prioritize user pain points to improve their experience through
          clean design patterns or innovative ideas.
        </h3>
        <div class="dataContainer">
          <h4>Things I like to design</h4>
          <h3>Web, Mobile, Apps, UX, Prototypes</h3>
        </div>
        <div class="dataContainer">
          <h4>Tools</h4>
          <h3>Marvel App</h3>
          <h3>Figma</h3>
          <h3>FlowMapp</h3>
        </div>
        <div class="dataContainer">
          <h4>What I do</h4>
          <h3>1. Investigtion</h3>
          <h3>2. Ideation</h3>
          <h3>3. Prototyping / Design</h3>
        </div>
      </div>
      <div class="skill separator">
        <h2>Front-end developer</h2>
        <h3>
          Interest in code from scratch innovative products and services that
          makes an easier life for users
        </h3>
        <div class="dataContainer">
          <h4>Languages</h4>
          <h3>Javascript, Html, Sass and CSS</h3>
        </div>
        <div class="dataContainer">
          <h4>Libraries</h4>
          <h3>Vuejs, Reactjs, Bootstrap, Vuetify, Material-ui</h3>
        </div>
        <div class="dataContainer">
          <h4>Frameworks</h4>
          <h3>Nuxt and Next</h3>
        </div>
        <div class="dataContainer">
          <h4>Dev Tools</h4>
          <h3>Visual studio code, Codepen,Github, GitlabTerminal</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
