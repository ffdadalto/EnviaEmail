<script lang="ts" setup>

import event from '@/classes/utilitarios/event';
import { AxiosResponse } from 'axios';

import { onMounted, ref, watch } from 'vue';

const props = withDefaults(defineProps<{
    campo?: string,
    apiResponse?: any,
    automatico?: boolean
}>(), { automatico: true });

const emits = defineEmits<{
    (e: 'temErro', value: boolean): void;
}>()

const listaErros = ref<string[]>([]);

const limpaErros = (): void => {
    listaErros.value = [];
}

onMounted(() => {
    if (props.automatico)
        event.on('api-erro-400', erroApi);
});

const erroApi = async (response: AxiosResponse) => {
    limpaErros();
    lerErro(response?.data);
}

const lerErro = async (data: any) => {
    if (!data)
        return;

    if (typeof data === 'string') {
        listaErros.value = [data];
    } else if (typeof data === 'object') {
        if (data instanceof Blob) {
            const json = await (data as Blob).text();
            data = JSON.parse(json);
        }

        if (props.campo) {
            data = [data[props.campo]];
        }

        let keys = Object.keys(data);
        listaErros.value = keys.flatMap((e) => data[e]).filter(e => e != undefined);
    }
}

watch(() => props.apiResponse, (val) => {
    if (val)
        lerErro(val);
});

watch(listaErros, () => {
    emits('temErro', listaErros.value?.length > 0 ?? false);
});

</script>

<template>
    <div>
        <!-- Erro para um campo específico -->
        <ul v-if="listaErros?.length > 0 && campo" class="erro-campo">
            <li v-for="erro in listaErros" class="p-error">{{ erro }}</li>
        </ul>
        <!-- Quando não há campo definido, mostra o sumário de erros -->
        <div class="card erro-sumario" v-else-if="listaErros?.length > 0">
            <div class="card-body" style="background-color: var(--yellow-100)">
                <h5 class="card-title">
                    <i class="fal fa-lightbulb-exclamation" style="color: var(--orange-500)"></i>
                    Verifique os itens a seguir:
                </h5>
                <ul v-if="listaErros">
                    <li v-for="e in listaErros" :key="e">{{ e }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.erro-campo li {
    font-size: 12px;
    margin: 2px;
}

.erro-sumario {
    background-color: var(--yellow-100);
    border-radius: 5px;
    border: 1px solid var(--orange-100);
    margin-bottom: 20px;
}

.erro-sumario ul {
    margin: 0;
}
</style>