<script lang="ts" setup>
import { onMounted, ref } from "vue";
import router from "@/router";
import { EsGestorClient, VesGestor } from "@/classes/api/API";

const opcoes = ref([
    {
        icon: "fal fa-file-contract",
        label: "Novo Contrato",
        command: () => router.push('cadastro')
    },
    {
        icon: "fal fa-list",
        label: "Lista de Contratos",
        command: () => router.push('lista')
    }
]);

onMounted(async () => {
    await carregaGestores();
    console.log(listaGestores.value);
});

const clientGestores = new EsGestorClient();
const listaGestores = ref<VesGestor[]>([])
const carregaGestores = (async () => {
    listaGestores.value = await clientGestores.getAll(null);
});

</script>
<template>
    <div class="container">
        <p>Hello World!</p>
    </div>
</template>

<style scoped>
.banner {
    /* background-color: #436085 !important; */
    background-color: #535353;
}

/*
Enter and leave animations can use different
durations and timing functions.
*/
.slide-fade-enter-active {
    transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
    transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}


.slide-fade-leave-to {
    transform: translateX(-1200px);
    opacity: 0;
}

.slide-fade-enter-from {
    transform: translateX(1200px);
    opacity: 0;
}
</style>

