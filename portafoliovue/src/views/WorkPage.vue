
<script setup>
import ImageTextCard from '@/components/global/ImageTextCard.vue';
import Button from '@/components/global/Button.vue';
import mainprojects from '@/components/mainprojects.vue';
const cards = [
    {
        name: 'larrainvial',
        image: {
            src: 'https://github.com/luisalejope/Images/blob/main/portafolio/larainvial.png?raw=true',
            alt: 'Larrainvial website'
        },
        info: {
            title: 'Larrainvial Bank website',
            desc: 'Modyo, Vue, Vuex, SCSS, Js, HTML'
        }
    },
    {
        name: 'gates',
        image: {
            src: 'https://github.com/luisalejope/Images/blob/main/portafolio/gates.png?raw=true',
            alt: 'Gates website'
        },
        info: {
            title: 'Gates B2B website',
            desc: 'Sap Commerce, Jsp, Jquery, Ts, SCSS, HTML'
        }
    },
    {
        name: 'liquidez ya',
        image: {
            src: 'https://github.com/luisalejope/Images/blob/main/portafolio/liquidezya.png?raw=true',
            alt: 'Liquidezya website'
        },
        info: {
            title: 'Liquidezya Factoring website',
            desc: 'Nuxt, Js, Vuex, SCSS, HTML, AWS'
        }
    },
    {
        name: 'pregis',
        image: {
            src: 'https://github.com/luisalejope/Images/blob/main/portafolio/pregis.png?raw=true',
            alt: 'Pregis website'
        },
        info: {
            title: 'Pregis B2B Website',
            desc: 'Sap Commerce, Angular, Ts, SCSS, HTML'
        }
    },
    {
        name: 'fundacion de la mujer',
        image: {
            src: 'https://github.com/luisalejope/Images/blob/main/portafolio/fdlm.png?raw=true',
            alt: 'Fundacion de la mujer website'
        },
        info: {
            title: 'Fundacion de La Mujer Bank website',
            desc: 'Modyo, Vue, Vuex, SCSS, Js, HTML'
        }
    },
    {
        name: 'parque arauco',
        image: {
            src: 'https://github.com/luisalejope/Images/blob/main/portafolio/parquearauco.png?raw=true',
            alt: 'Parque Arauco website'
        },
        info: {
            title: 'Parque Arauco Peru website',
            desc: 'Modyo, Vue, Vuex, SCSS, Js, HTML'
        }
    },
    {
        name: 'consorcio',
        image: {
            src: 'https://github.com/luisalejope/Images/blob/main/portafolio/consorcio.png?raw=true',
            alt: 'consorcio website'
        },
        info: {
            title: 'Consorcio insurance website',
            desc: 'Modyo, Vue, Vuex, SCSS, Js, HTML'
        }
    },
    {
        name: 'lemon',
        image: {
            src: 'https://github.com/luisalejope/Images/blob/main/portafolio/lemon.png?raw=true',
            alt: 'lemon website'
        },
        info: {
            title: 'Lemon Carvajal website',
            desc: 'React, SCSS, Js, HTML'
        }
    },
    {
        name: 'onboarding',
        image: {
            src: 'https://github.com/luisalejope/Images/blob/main/portafolio/onboarding.png?raw=true',
            alt: 'Onboarding website'
        },
        info: {
            title: 'Onboarding Carvajal website',
            desc: 'React, SCSS, Js, HTML'
        }
    },
]

</script>
<template>
    <div class="work-page">
        <h3 class="work-page__title">Real Projects</h3>
        <div class="work-page__cards">
            <ul class="mainprojects-cards">
                <ImageTextCard v-for="card in cards" :key="card.name" :image="card.image" :info="card.info" />
            </ul>
        </div>
        <h3 class="work-page__title">My Projects</h3>
        <div class="work-page__cards"></div>

    </div>
</template>


<style lang="scss">
.work-page{
    display: flex;
    flex-direction: column;
    width: 100%;
}   
</style>