
<script setup lang="ts">
import logo from "./assets/flowscope-logo2.png";
import Button from 'primevue/button';

</script>

<template>
    
  <div class="container">
     <Button label="Hello from PrimeVue!" />
    <img :src="logo" alt="FlowScope Logo" class="logo" />
    <h1>FlowScope</h1>
 
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}
.logo {
  width: 110px;   /* ajusta el tamaño a gusto */
  margin-bottom: 32px;
}
h1 {
  font-size: 3rem;
  color: #42b883;
  letter-spacing: 2px;
}
</style>
