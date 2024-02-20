<script setup>

import Icon from '@/components/global/Icon.vue';
import WhiteLogoSvg from './svg/WhiteLogoSvg.vue';
</script>
<template>
    <footer class="footerContainer">
        <div class="footerContent">
            <div class="socialContainer">
                <Icon size='icon-l'>
                    <WhiteLogoSvg />
                </Icon>
            </div>
            <p>Handcrafted by me © Luis Alejandro Peña</p>
            <p>
                Inspired Toons by
                <span>
                    <a href="https://www.figma.com/community/file/874561187582459048/GEE!-ME-100-Characters-Pack" target="_blank" class="linkWindow">
                        GEE! ME 100 Characters Pack
                    </a>
                </span>
            </p>
        </div>
    </footer>
</template>

<style lang="scss">
.footerContainer {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    background-color: $bunker-950;

}

.footerContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.footerContent>p {
    margin-top: 1rem !important;
    color: white
}

.linkWindow {
    border: none;
    background-color: transparent;
    text-decoration: none;
    color: white;
    cursor: pointer
}

.logos {
    color: white;
    margin: 0 1rem;
}

.socialContainer {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>