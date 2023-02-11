<script lang="ts" setup>
import { computed, onMounted, PropType, ref, watch } from "vue";
import Paginator, { PageState } from "primevue/paginator";

interface Props {
  itensAtivos?: any[],
  itens: any[];
  porPagina?: number;
  porPaginaOpcoes?: number[];
}

const props = withDefaults(defineProps<Props>(), {
  porPaginaOpcoes: () => [10, 50, 100],
  porPagina: 20,
});

const emits = defineEmits<{
  (e: 'update:itens-ativos', value?: any[]): void
}>()

const porPaginaInterno = ref(0);
const paginaAtual = ref(1);

onMounted(() => {
  porPaginaInterno.value = props.porPagina;
});

const itensPaginados = computed((): any[] => {
  return props.itens.slice(
    porPaginaInterno.value * (paginaAtual.value - 1),
    porPaginaInterno.value * paginaAtual.value
  );
});

const onPage = (event: PageState) => {
  porPaginaInterno.value = event.rows;
  paginaAtual.value = event.page + 1;
};

watch(itensPaginados, (val) => {
  emits("update:itens-ativos", val);
}, { deep: true })
</script>

<template>
  <template v-if="itens.length">
    <div class="mx-lg-2 d-none d-lg-block">
      <Paginator :paginator="true" :rows="porPagina" :totalRecords="itens.length" :rowsPerPageOptions="porPaginaOpcoes"
        @page="onPage($event)">
        <template #start>
          <span class="opacity-75">Mostrando {{ porPaginaInterno * (paginaAtual - 1) + 1 }} - {{
          Math.min(porPaginaInterno * paginaAtual, itens.length) }} de {{ itens.length }} itens encontrados</span>
        </template>
      </Paginator>
    </div>
    <div class="d-block d-lg-none paginacao-fixa">
      <Paginator :paginator="true" :rows="porPagina" :totalRecords="itens.length" :rowsPerPageOptions="porPaginaOpcoes"
        @page="onPage($event)" template="FirstPageLink PrevPageLink RowsPerPageDropdown NextPageLink LastPageLink">
      </Paginator>
    </div>
    <slot :itens="itensPaginados"></slot>
    <div class="mx-lg-2 d-none d-lg-block">
      <Paginator :paginator="true" :rows="porPagina" :totalRecords="itens.length" :rowsPerPageOptions="porPaginaOpcoes"
        @page="onPage($event)">
        <template #start>
          <span class="opacity-75">Mostrando {{ porPaginaInterno * (paginaAtual - 1) + 1 }} - {{
          Math.min(porPaginaInterno * paginaAtual, itens.length) }} de {{ itens.length }} itens encontrados</span>
        </template>
      </Paginator>
    </div>
  </template>
  <div class="text-center opacity-50 p-5 d-flex flex-column justify-content-center" style="min-height: 350px;" v-else>
    <h1 class="display-2 mb-4">
      <i class="fad fa-empty-set"></i>
    </h1>
    <h1 class="display-6">Nenhum item encontrado para o filtro aplicado.</h1>
  </div>
</template>

<style lang="scss" scoped>
.paginacao-fixa {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgb(255, 255, 255);
  width: 100%;
  border-top: 2px solid #ddd;
}

.paginacao-fixa * {
  font-size: 2px !important;
}
</style>