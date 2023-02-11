<script lang="ts" setup>

import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
// import { TabItem } from "@/classes/utilitarios/outros";

class TabItem {
    id?: number;
    label?: string;
    icon?: string;
    route?: string;
    visible?: boolean
    constructor(id: number, label: string, icon: string, route: string, visible: boolean) {
        this.id = id;
        this.label = label;
        this.icon = icon;
        this.route = route;
        this.visible = visible;
    }
}

const route = useRoute();

// Propriedades
const props = defineProps<{
    itens: TabItem[];
}>();

// const opcoesVisualizacao = computed(() => [
//     { id: 1, label: 'Visão Geral', icon: 'fad fa-info-circle', route: 'contrato-detalhes' },
//     { id: 2, label: 'Detalhes Financeiro', icon: 'fad fa-sack-dollar', route: 'contrato-detalhes-financeiro' },
//     { id: 3, label: 'Execução Contratual', icon: 'fad fa-list-check', route: 'contrato-execucao' },
//     { id: 4, label: 'Linha do Tempo', icon: 'fad fa-timeline', route: 'contrato-detalhes-historico' },
// ]);

</script>

<template>
    <div class="menu-opcoes mb-lg-4 pt-3">
        <div class="container ">
            <div class="d-flex">
                <template v-for="opcao in itens" v-if="itens">
                    <router-link :to="{ name: opcao.route }" v-if="opcao.visible == undefined || opcao.visible"
                        class="d-flex px-4 py-3 me-4 justify-content-center item-visualizacao"
                        :class="[route.name == opcao.route ? 'ativo' : '']">
                        <i :class="[opcao.icon]" class="fs-4 me-3"></i>
                        <h6 class="fw-normal m-0">{{ opcao.label }}</h6>
                    </router-link>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.menu-opcoes {
    background: #e9e9e9;
    border-top: 1px solid #ddd;
    border-bottom: 2px solid #ddd;
}

.item-visualizacao {
    color: rgb(240, 8, 8);
    border-bottom: 2px solid transparent;
    cursor: pointer;
    min-width: 225px;
    margin-bottom: -2px;

    &.ativo,
    &:hover {
        color: inherit;
        border-bottom-color: #436085;
        color: #436085;
    }

    &.ativo {
        border-bottom-color: #f3f2f1;
        background: #f3f2f1;
        border-radius: 5px 5px 0 0px;
        box-shadow: 0px -1px 1px 1px #ddd;
    }
}
</style>