<script setup>
import { ref } from 'vue';
import Input from "@/components/global/Input.vue";
import Button from "@/components/global/Button.vue"
const name = ref('')
const email = ref('')
const myServices = ref({
    css: { name: "css", checked: false, label: "CSS" },
    html: { name: "html", checked: false, label: "HTML" },
    vue: { name: "vue", checked: false, label: "Vue js" },
    react: { name: "react", checked: false, label: "React Js" },
    js: { name: "js", checked: false, label: "JS" },
    ux: { name: "ux", checked: false, label: "UX" },
})
 
const message = ref('')

const handleButton = ()=>console.log('hola boton send')



</script>
<template>

  <div id="contactContainer">
    <h3>Let's discuss on something <span>cool</span> together</h3>
    <div class="allContentContact">
      <form class="formContainer">
        <div id="interest">
          <h4>I'm interested in...</h4>
          <div class="services">
            <template v-for="(service, key) in myServices" :key="key">
              <div class="service">
                <label :for="service.name">{{service.name}}</label>
                <Input class="check-box-button" v-model="myServices[service.name].checked" type="checkbox" :title="service.name"/>
              </div>
            </template>
          </div>
        </div>

          <Input v-model="name" type="text"  :disabled='false' :title="inputName"/>
          <Input v-model="email" type="email" :disabled='false' :title="inputName"/>
        

        <Input v-model="message" type="text" :disabled='false' title="inputMessage"/>
        
        <div class="">
          <Button text='Send' buttonType="primary" @action="handleButton"/>
        </div>
      </form>
    </div>
    
  </div>
  
</template>


<style lang="scss" scoped>
#contactContainer {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 150px;
    //background: #1c0522;

    span {
      color: #ff6c40;
    }

    .allContentContact{
      background-color: white;
      padding: 20px;
      border-radius: 24px;
      width: 50%;
    }

    #interest{
      .services{
        display: flex;
        label {
          color: gray;
        }
        .service{
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 159px;
          margin: 0 16px;
          border-radius: 8px;
          border: 2px solid rgba(46, 2, 73, 0.30);
        }
      }
    }

    .service:last-child{
      margin-left: 0;
    }

    .service:first-child{
      margin-right: 0;
    }

    .check-box-button{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0;
    }
}
</style>