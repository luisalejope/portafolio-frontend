<script setup>
import { ref, onBeforeUnmount, onMounted, nextTick } from 'vue';
import Skills from '@/components/Skills.vue';
import ContactMe from '@/components/ContactMe.vue';
import MineGeeSvg from '@/components/svg/MineGeeSvg.vue'
import Button from '@/components/global/Button.vue';
import LinkedinSvg from '@/components/svg/LinkedinSvg.vue';
import GithubLittleSvg from '@/components/svg/GithubLittleSvg.vue'
import Icon from '@/components/global/Icon.vue';
import AboutMe from '@/components/AboutMe.vue';
import MainProjects from '@/components/MainProjects.vue';
</script>

<template>
  <!-- <section>
    <img src="https://github.com/pineapplexpres/Images/blob/main/portafolio/clouds.png?raw=true" alt="" id="clouds" ref="clouds" />
    <img src="https://github.com/pineapplexpres/Images/blob/main/portafolio/moon.png?raw=true" alt="profilePhoto" id="moon" ref="moon" />
    <img src="https://github.com/pineapplexpres/Images/blob/main/portafolio/landscape3.png?raw=true" alt="" id="landscape" ref="landscape" />
  </section> -->
  <section class="welcome">
    <div class="welcome-container">
      <div class="welcome-info">
        <div class="welcome-message">
          Hello, I’m
        </div>
        <h2 class="welcome-name">Luis Peña</h2>
        <h1 class="welcome-roles">FRONTEND DEVELOPER | UX/UI ANALYST | COMPUTER ENGINEER</h1>
        <div class="welcome-icons">
          <Icon size='icon-l'>
            <LinkedinSvg />
          </Icon>
          <Icon size='icon-l'>
            <GithubLittleSvg />
          </Icon>
        </div>
      </div>
      <div class="welcome-image">
        <MineGeeSvg />
      </div>
    </div>
    <div class="welcome-button">
      <a href="#main-projects" class="btn-explore"><span class="btn-explore-ball"></span></a>
    </div>
  </section>
  <div id="main-projects">
    <MainProjects />
  </div>
  <AboutMe />
  <Skills />
  <!-- <ContactMe /> -->
</template>

<style lang="scss" scoped>
.welcome {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 100px;

  &-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &-message {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px 40px 40px 0px;
    width: 134px;
    color: $white;
    height: 64px;
    background: linear-gradient(108deg, #FC4A1A -36.03%, #F7B733 128.44%);
    font-size: $fs-s;
    font-style: normal;
    line-height: normal;
    font-weight: 700;
  }

  &-name {
    font-size: $fs-xl;
  }

  &-image {
    height: 347px;
  }

  &-icons {
    display: flex;
    max-width: 140px;
  }

  &-button {
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
}



.btn-explore {
  position: relative;
  display: inline-block;
  text-decoration: none;
  border-radius: 40px;
  width: 45px;
  height: 77px;
  border: 1px solid $yellow-sea-600;
  background: transparent;

  &-ball {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-30%, -50%);
    border-radius: 50%;
    background: linear-gradient(108deg, #FC4A1A -36.03%, #F7B733 128.44%);
    width: 12.95px;
    height: 12.95px;
    animation: bounce 1s infinite alternate;
  }
}

.profile {
  display: flex;
  justify-content: space-between;
}

@include MQ(L){
  .welcome {
    padding: 50px;
    height: min-content;
    &-image {
      display: none;
    }
  }
}
</style>
