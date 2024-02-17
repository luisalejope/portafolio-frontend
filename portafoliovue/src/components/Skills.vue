<script setup>
import VueSvg from '@/components/svg/VueSvg.vue';
import ReactSvg from './svg/ReactSvg.vue';
import JsSvg from '@/components/svg/JsSvg.vue';
import HtmlSvg from '@/components/svg/HtmlSvg.vue';
import FigmaSvg from '@/components/svg/FigmaSvg.vue';
import CssSvg from '@/components/svg/CssSvg.vue';
import BootstrapSvg from '@/components/svg/BootstrapSvg.vue';
import AngularSvg from '@/components/svg/AngularSvg.vue';
import GithubSvg from '@/components/svg/GithubSvg.vue';
import Icon from '@/components/global/Icon.vue';
import InfoCard from '@/components/global/InfoCard.vue';

const skills = {
    VueSvg: 
        'I have worked with Vue 2 and 3 for 2.5 years, developing web apps for fintech, ecommerce, and banking. Some projects used Nuxt, Scss, Vue-router, Vuex, Pinia, and Modyo. Find my work on Github.',
    ReactSvg: 
        'I\'ve worked with React for 2 years, creating scalable UIs with Context API, Redux, and React Router. I prioritize documented hooks and custom hooks for project development and scalability. Explore my work on Github.',
    JsSvg:
        'I\'ve worked with JavaScript for nearly 4 years, developing and supporting sites, apps, and pages. I emphasize best practices, performance, and code optimization. Discover more on Github.',
    HtmlSvg: 
        'I\'ve worked with HTML for 4 years, considering it the foundation of everything. I ensure its correct implementation, focusing on website architecture, accessibility, and SEO. Examples on Github.',
    CssSvg: 
        'CSS is where the magic happens. I\'ve specialized in its functioning for 4 years, ensuring UX and design fidelity. I\'ve worked with preprocessors like Sass and Scss. See examples on Github.',
    GithubSvg: 
        'I\'ve used Github since my degree, with repositories for university, work, and hobby projects. I\'ve also used Bitbucket and Gitlab. Explore my Github to see more.'
}

const skills2 = [
    {
        id: 'vue',
        svg: VueSvg,
        desc: '',
        color: '#41b883',
    },
    {
        id: 'react',
        svg: ReactSvg,
        desc: '',
        color: '#00d8ff'
    },
    {
        id: 'angular',
        svg: AngularSvg,
        desc: '',
        color: '#b52e31'
    },
    {
        id: 'js',
        svg: JsSvg,
        desc: '',
        color: '#ffd600'
    },
    {
        id: 'html',
        svg: HtmlSvg,
        desc: '',
        color: '#e44d26'
    },
    {
        id: 'css',
        svg: CssSvg,
        desc: '',
        color: '#0277bd'
    },
    {
        id: 'github',
        svg: GithubSvg,
        desc: '',
        color: '#6e40c9'
    },
    {
        id: 'figma',
        svg: FigmaSvg,
        desc: '',
        color: '#0acf83'
    },
    {
        id: 'bootstrap',
        svg: BootstrapSvg,
        desc: '',
        color: '#673ab7'
    },
]

</script>


<template>
    <div id="skills">
        <h2>My skills</h2>
        <div class="skills-container">
            <InfoCard v-for="{id, svg, desc, color} of skills2" :key="id" :color="color">
                <Icon size='icon-s'>
                    <component :is="svg"></component>
                </Icon>
            </InfoCard>
        </div>
  </div>
</template>

<style lang="scss" scoped>
#skills {
    position: relative;
    padding: 0 150px;
    // background: $revolver-950;

    h2 {
        font-size: 3.5em;
        margin-bottom: 20px;
        color: #fff;
    }
    
    .skill {
        font-size: 1.2em;
        color: #fff;
    
        p {
            margin: 10px 0;
            text-align: justify;
        }
    }

    .skills-container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;

        padding: 50px 0;
    }
}

@include MQ(M) {
    #skills {
        padding: 0 50px;
    }
}
</style>