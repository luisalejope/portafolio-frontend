<script setup>
defineProps({
    size: {
        type: String,
        required: true,
    }
})
</script>

<template>

    <div class="icon">
        <div :class="size">
            <slot></slot>
        </div>
    </div>
  
</template>

<style scoped>

    .icon {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .icon-xxs{
        width: 20px;
        height: 20px;
    }
    .icon-xs{
        width: 30px;
        height: 30px;
    }
    .icon-s{
        width: 40px;
        height: 40px;
    }
    .icon-ms{
        width: 50px;
        height: 50px;
    }
    .icon-m{
        width: 60px;
        height: 60px;
    }
    .icon-l{
        width: 70px;
        height: 70px;
    }
    .icon-xl{
        width: 80px;
        height: 80px;
    }
    .icon-xxl{
        width: 90px;
        height: 90px;
    }
</style>