<script setup>
import { ref, computed } from 'vue';
const emit = defineEmits(['update:modelValue'])

defineProps({
    modelValue: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        default: ""
    }
})

</script>

<template>
  <div class="input-container">
            <input :name="name" :type="inputType" class='input' :disabled='disabled' :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
            <i id="icon-eye">
                
            </i>
        </div>
</template>


<style lang="scss" scoped>

.input-container {
    display: flex;
    width: 70%;
    height: 40px;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #D6D6D6;
    align-items: center;
}

.input {
    border: none;
    width: 100%;
    font-size: 1rem;
}
.input:focus {
    outline: none;
}

#icon-eye {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: rgb(159, 160, 160);
}

#icon-eye:hover {
    color: rgb(112, 112, 112);
}
</style>