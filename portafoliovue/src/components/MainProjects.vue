<script setup>
import ImageTextCard from './global/ImageTextCard.vue';
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
]

</script>
<template>
    <div class="mainprojects">
        <h2 class="mainprojects-title">
            Main Projects
        </h2>
        <ul class="mainprojects-cards">
            <ImageTextCard v-for="card in cards" :key="card.name" :image="card.image" :info="card.info" />
        </ul>
        <div class="mainprojects-btn">
            <Button text="See more" buttonType="link"/>
        </div>
    </div>
</template>

<style lang="scss">
.mainprojects {
    padding-top: 40px;
    &-title {
        font-size: $fs-l;
        text-align: center;
    }
    &-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin: 4rem 5vw;
        padding: 0;
        list-style-type: none;
    }

    &-btn{
        display: flex;
        justify-content: center;

        :first-child {
            max-width: 130px;
        }
    }
}
</style>