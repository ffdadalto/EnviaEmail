<script setup lang="ts">
import { useRouter } from "vue-router";

import Toast from 'primevue/toast';
import event from '@/classes/utilitarios/event';
import { useToast } from "primevue/usetoast";
import { ref } from "vue";
import Rodape from "./components/layout/Rodape.vue";
import ConfirmDialog from 'primevue/confirmdialog';

const router = useRouter();
const toast = useToast();

const msgAtiva = ref<{ [key: string]: boolean }>({});

const geraErro = (tipo: string, titulo: string, mensagem: string, group?: string) => {
    if (!msgAtiva.value[tipo]) {
        msgAtiva.value[tipo] = true;

        toast.add({
            severity: 'error',
            summary: titulo,
            detail: mensagem,
            group: group,
            life: 15000,
        });

        setTimeout(() => {
            msgAtiva.value[tipo] = false;
        }, 15000);
    }
}

const lerErro = async (data: any): Promise<string | undefined> => {
    if (!data)
        return undefined;

    if (typeof data === 'string') {
        return data?.toString();
    } else if (typeof data === 'object') {
        if (data instanceof Blob) {
            const json = await (data as Blob).text();
            data = JSON.parse(json);
        }

        return data?.toString();
    }
}

event.on("api-erro-conexao", () => {
    geraErro('api-erro-conexao', 'Erro de Comunicação', 'Verifique sua internet e tente novamente.');
});

event.on("api-erro-500", () => {
    geraErro('api-erro-500', 'Erro Interno', 'Houve um problema ao tentar processar sua requisição. Por favor, tente novamente mais tarde. Caso a situação persista, entre em contato com o responsável pelo sistema.');
});

event.on("api-erro-403", async (response: any) => {
    const msg = await lerErro(response?.data);
    geraErro('api-erro-403', 'Permissão Insuficiente', msg ?? '', 'tc');
});
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
        <div class="container">
            <router-link class="navbar-brand" to="/">
                <div class="text-5xl nome-sistema">
                    <i>Envia</i><span class="font-bold">Email</span>
                </div>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
    <ConfirmDialog></ConfirmDialog>
    <Toast></Toast>

    <router-view></router-view>
    <Rodape></Rodape>
</template>
