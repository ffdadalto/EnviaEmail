<script lang="ts" setup>

import { ref, onMounted, computed } from 'vue';
import { CHAcompanhamentoClient, CHChamadoClient, FCHAcompanhamento, VCHProduto, 
    FCHChamado, VCHAcompanhamento, VCHAcompanhamentoCompleto, VCHChamadoItemLista, CHProdutoClient} from '@/classes/api/API';
import { descricao as descricaoSituacao, cor as corSituacao } from '@/classes/enums/TSituacaoChamado';

import { Console } from 'console';

const props = defineProps<{
    filtro: FCHChamado
}>();

const clientCHProduto = new CHProdutoClient();
let listaProdutos = ref<VCHProduto[]>();
const emits = defineEmits(['concluido']);
const client = new CHChamadoClient();
const chamadosFiltrados = ref<VCHChamadoItemLista[]>();

const carregarProdutoChamado = async () => {
    chamadosFiltrados.value = await client.postFiltroLista(props.filtro);
    var aux = chamadosFiltrados.value?.map(c => c.idCHProduto!);

    listaProdutos.value = (await clientCHProduto.getAll(aux!)).where(p => p.emUso!);
};



onMounted( () => {
    const p1 = carregarProdutoChamado();
    Promise.all([p1]).then(() => {emits('concluido');} );
     
});

</script>
<template>
    <div class="container">
        <div v-for="Produto in listaProdutos">   
            <h5>{{ Produto.nome }}</h5>
            <table class="table table-sm table-striped align-middle">
                <colgroup>
                    <col style="width: 6%;">
                    <col style="width: 10%;">
                    <col style="width: 10%;">
                    <col style="width: 13%;">
                    <col style="width: 13%;">
                    <col style="width: 8%;">
                    <col style="width: 8%;">
                    <col style="width: 32%;">
                </colgroup>
                <thead>
                    <th>Numero</th>
                    <th>Data</th>
                    <th>Solicitante</th>
                    <th>Técnico</th>
                    <th>Assunto</th>
                    <th>Situação</th>
                    <th>Ultimo Acomp.</th>
                    <th>Descrição Acomp.</th>
                </thead>
                <tbody>
                    <tr v-for="chamado in chamadosFiltrados">
                        <div v-if="chamado.produtoNome == Produto.nome">
                            <td>
                                {{chamado.numero?? " Não informado "}}
                            </td>
                            <td>
                                {{$formatar.data(chamado.data) || " Não informado "}}
                            </td>
                            <td v-if="chamado.setorSigla">
                                {{chamado.clienteNome}}({{chamado.setorSigla}})
                            </td>
                            <td v-else>
                                {{chamado.clienteNome}}
                            </td> 
                            <td>
                                {{chamado.tecnicoNome?? " Não informado "}}
                            </td>
                            <td>
                                {{chamado.assuntoDescricao?? " Não informado "}}
                            </td>
                            <td>
                                {{descricaoSituacao(chamado?.situacao!)|| " Não informado "}}
                            </td>
                            <td>
                                {{$formatar.data(chamado.ultimaAtualizacao)|| " Não informado "}}
                            </td>
                            <td style="word-wrap: break-word; max-width: 150px;">
                                {{chamado.ultimoAcompanhamento?? " Não informado " }}
                            </td>
                        </div>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style lang="scss" scoped>
table * {
    font-size: 12px;
    margin: 0 auto;
}

</style>