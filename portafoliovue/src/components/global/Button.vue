<script setup>
import { ref, computed } from 'vue';
const emit = defineEmits(['action'])

defineProps({
    text: {
        type: String,
        required: true
    },
    buttonType: {
        type: String,
        default: '' 
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        default: ''
    }
})

const handleClick = () => emit('action')

</script>
<template >
    <button id="button" :class="`${buttonType} ${size} ${disabled ? 'disabled' : ''}`" :disabled="disabled" @click="handleClick">{{ text }}</button>
</template>
<style lang="scss" scoped>
#button {
  width: 100%;
  height: 2.5rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-style: none;
  font-size: 1.5em;
  border-radius: 40px;
  display: inline-block;
    &.primary {
        background-color: $yellow-sea-600;
        color: $white;
        &:hover {
            background-color: $white;
            color: $yellow-sea-600;
        }
    }
    &.disabled {
        background-color: rgb(194, 194, 194) !important;
    }

    &.secondary {
        background-color: rgb(160, 160, 160);
        color: rgb(255, 255, 255);
        border-radius: 4px;
        &:hover {
            background-color: rgb(150, 150, 150);
        }
    }
    
    &.link {
        background-color: white;
        color: rgb(0, 75, 173);
        &:hover {
            color: rgb(0, 103, 238);
            text-decoration: underline;
        }
    }
}







</style>