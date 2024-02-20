<script setup>

import { RouterLink, useRoute, useRouter } from 'vue-router'
import {ref} from 'vue'
import LogoSvg from '@/components/svg/LogoSvg.vue';
import Icon from '@/components/global/Icon.vue'
const route = useRoute();
const router = useRouter();

let mobileNav = ref(false)

const mobileNavHandler = () => {
    mobileNav.value = !mobileNav.value
} 


</script>
<template>
    <header>
        <RouterLink class="linkNav logo" to="/home" >
            <Icon size='icon-l'>
                <LogoSvg />
            </Icon>
        </RouterLink>

        <button class="menuToggle" :class="mobileNav ? 'active' : ''" @click="mobileNavHandler">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav class="navContainer">
            
            <div class="router-link">
                <RouterLink class="linkNav" to="/home" exactActiveClass="active">
                    Home
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

        <nav class="mobileNavContainer" v-show="mobileNav">
            
            <div class="router-link">
                <RouterLink class="linkNav" to="/home" exactActiveClass="active">
                    Home
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
    position: relative;
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
    .mobileNavContainer {
        display: none;
    }

    .menuToggle {
        display: none;
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
        
        padding: 30px 50px;
    
        .navContainer {
            display: none;
        }

        .mobileNavContainer{
            position: fixed;
            display: flex;
            flex-direction: column;
            gap: 5rem;
            padding: 4rem 20vw;  
            z-index: 100;
            top: 0;
            left: 0;
            height: 100vh;
            background-color: $bunker-950;
            width: 100%;
            overflow-x: hidden;
            overflow-y: auto;
    
            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

            .router-link {
                list-style: none;
            }

            .router-link .linkNav {
                text-decoration: none;
                padding: 6px 15px;
                color: #fff;
                border-radius: 20px;
            }

            .router-link .linkNav:hover,
            .router-link .linkNav.active {
                background-color: #fff;
                color: #2b1055;
            }
        }

        .menuToggle {
            display: block;
            position: relative;
            z-index: 1000;
            background-color: transparent;
            border: none;

            span {
                display: block;
                width: 33px;
                height: 4px;
                margin-bottom: 5px;
                position: relative;
                
                background: $yellow-sea-600;
                border-radius: 3px;
                
                z-index: 1;
                
                transform-origin: 4px 0px;
                
                transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                            background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                            opacity 0.55s ease;

                &:first-child{
                    transform-origin: 0% 0%;
                }
                &:nth-last-child(2){
                    transform-origin: 0% 100%;
                }
            }

        }
        .menuToggle.active{
            span {
                opacity: 1;
                transform: rotate(45deg) translate(-4px, -18px);

                &:first-child{
                    transform-origin: 0% 0%;
                }
                &:nth-last-child(3){
                    opacity: 0;
                    transform: rotate(0deg) scale(0.2, 0.2);
                }

                &:nth-last-child(2){
                    transform: rotate(-45deg) translate(0, 17px);
                }
            }
        }
    }
}
</style>