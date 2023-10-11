<script setup>

</script>

<template>
  <div className="input-container">
            <input name="password" type= 'password'  class='input-pass'/>
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

.input-pass {
    border: none;
    width: 100%;
    font-size: 1rem;
}
.input-pass:focus {
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