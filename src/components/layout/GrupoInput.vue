<script lang="ts" setup>
import { ref, computed } from 'vue';
import Erros from '@/utils/Erros.vue'

const props = defineProps<{
    classTitulo?: string,
    classSlot?: string,
    class?: string,
    titulo?: string,
    icone?: string,
    informacao?: string,
    campoErro?: string | string[],
    carregando?: boolean,
}>();

const carregando = computed(() => props.carregando ?? false);

// Controle de erros
const listaCamposErro = computed(() => props.campoErro && props.campoErro instanceof Array);
const temErros = ref<[string, boolean][]>([['', false]]);
const mostraErros = computed((): boolean => temErros?.value?.some(e => e[1] == true) ?? false);

</script>

<template>
    <div :class="['grupo-input', mostraErros ? 'tem-erro' : '', props.class]">
        <h6 :class="['fw-light', props.classTitulo]">
            <i v-if="props.icone" :class="['pe-1', props.icone]"></i>
            <span>{{ props.titulo }}</span>
            <i v-if="informacao" class="ps-1 fa-light fa-circle-info text-warning"
                v-tooltip.bottom="props.informacao"></i>
        </h6>
        <div :class="[!props.classSlot ? 'p-inputgroup' : props.classSlot]" v-show="!carregando">
            <slot></slot>
        </div>
        <!-- Placeholder/Skeleton de loading -->
        <div v-if="carregando" class="placeholder-glow">
            <h1 class="placeholder col-12 mt-1"></h1>
        </div>
        <!-- Erros -->
        <Erros v-if="!listaCamposErro && props.campoErro" :campo="(props.campoErro as string)" class="erro"
            @tem-erro="temErros[0] = [props.campoErro as string, $event]"></Erros>
        <div v-if="listaCamposErro && props.campoErro" class="erros">
            <Erros v-for="c, i in props.campoErro" :campo="c" @tem-erro="temErros[i] = [c, $event]"></Erros>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tem-erro {
    background: var(--yellow-50);
    border-radius: 5px;
    padding: 5px;
    border: 1px solid var(--yellow-200);

    h6 span {
        color: var(--bs-danger);
        font-weight: 400;
    }
}

.placeholder {
    border-radius: 5px;
}

:deep(.erros ul),
:deep(.erro ul) {
    margin: 0;
}
</style>
<style lang="scss">
// .tem-erro input, .tem-erro textarea {
//     border-color: var(--bs-danger);
//     background-color: #f7e0e0;

// }
</style>