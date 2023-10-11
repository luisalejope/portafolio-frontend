<script setup>
defineProps({
    size: {
        type: String,
        required: true,
    }
})
</script>

<template>

    <div id="icon">
        <div :class="size">
            <slot />
        </div>
    </div>
  
</template>

<style scoped>

    #icon {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .icon-xxs{
        width: 20px;
    }
    .icon-xs{
        width: 30px;
    }
    .icon-s{
        width: 40px;
    }
    .icon-ms{
        width: 50px;
    }
    .icon-m{
        width: 60px;
    }
    .icon-l{
        width: 70px;
    }
    .icon-xl{
        width: 80px;
    }
    .icon-xxl{
        width: 90px;
    }
</style>