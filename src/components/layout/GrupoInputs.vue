<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    classTitulo: String,
    class: { type: String, default: "py-3 my-3" },
    titulo: String,
    icone: String,
    informacao: String,
    opcoes: Object,
})

interface OpcaoGrupo {
    icone: string,
    nome: string,
    acao: any
}

const opcoes = computed(() => props.opcoes as OpcaoGrupo[]);

</script>

<template>
    <div :class="['grupo-inputs', props.class]">
        <h5 v-if="titulo" :class="['py-1 pb-2 d-flex justify-content-between align-items-center', props.classTitulo]">
            <i v-if="props.icone" :class="['me-2', props.icone]"></i>
            <span class="me-auto">{{ props.titulo }} <i v-if="informacao" class="fa-light fa-circle-info text-warning"
                    v-tooltip.bottom="props.informacao"></i></span>
            <slot name="opcoes"></slot>
            <i type="button" label="Toggle" v-for="opcao in opcoes" :class="['ms-2 ms-1', opcao.icone]"
                v-tooltip.bottom="opcao.nome" @click.prevent="opcao.acao">
            </i>
        </h5>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
h5 {
    font-weight: 400;
}

.grupo-inputs {
    ::v-deep(.row:first-child) {
        padding-top: 0;
    }

    ::v-deep(.row) {
        padding: 7px 0;
    }
}

h5 {
    border-bottom: 2px dotted #dee2e6;
}
</style>