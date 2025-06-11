<script setup lang="ts">
import { ref } from 'vue';
// IMPORTA LOS COMPONENTES DE PRIMEVUE DESDE primevue
import PanelMenu from 'primevue/panelmenu';
import Textarea from 'primevue/textarea';

// Define los ítems del menú lateral (sidebar)
const items = ref([
  {
    label: 'Dashboard',
    icon: 'pi pi-fw pi-home'
  },
  {
    label: 'Signals',
    icon: 'pi pi-fw pi-chart-bar'
  },
  {
    label: 'Console',
    icon: 'pi pi-fw pi-terminal'
  }
]);

// Simula la salida de consola
const consoleOutput = ref('Welcome to FlowScope!\n\nServer output will appear here...');
</script>

<template>
  <div class="dashboard-container">
    <!-- SIDEBAR IZQUIERDA -->
    <aside class="sidebar">
      <PanelMenu :model="items" />
    </aside>
    <!-- CONTENIDO PRINCIPAL -->
    <main class="main-content">
      <div class="drawing-area">
        <!-- Aquí pondrás un gráfico o dibujo después -->
        <h3>Drawing Area</h3>
      </div>
      <div class="console-area">
        <!-- Consola de texto para mostrar la salida del server -->
        <Textarea v-model="consoleOutput" autoResize rows="6" cols="60" readonly class="console-text" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.dashboard-container {
  display: flex;
  min-height: 100vh;
  background: #f6f8fa;
}
.sidebar {
  min-width: 210px;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  padding: 24px 0 0 0;
  box-shadow: 2px 0 8px #f2f2f2;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 30px;
}
.drawing-area {
  flex: 1;
  background: #fff;
  border-radius: 10px;
  min-height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px #e8eaf6;
}
.console-area {
  margin-top: 24px;
  background: #1a1a1a;
  border-radius: 8px;
  padding: 12px;
}
.console-text {
  width: 100%;
  background: #1a1a1a;
  color: #39ff14;
  border: none;
  font-family: "Fira Mono", monospace;
  font-size: 1rem;
  resize: none;
}
</style>
