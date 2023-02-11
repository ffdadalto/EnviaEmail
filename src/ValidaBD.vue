<script lang="ts" setup>
import { ValidaBD, ValidaBDClient } from "@/classes/api/API";
import { computed, onMounted, ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";
import InputSwitch from "primevue/inputswitch";
import Banner from "@/components/layout/Banner.vue";
import { copyToClipboard } from "@/classes/utilitarios/outros";
import { useToast } from "primevue/usetoast";
import Card from "./components/layout/Card.vue";

const toast = useToast();
const client = new ValidaBDClient();
const erros = ref();
const carregando = ref(false);
const nulidade = ref(false);
const filtro = ref<{
  tabelaInexistente: boolean;
  colunaInexistente: boolean;
  tipoIncompativel: boolean;
  nulidadeIncompativel: boolean;
}>({
  tabelaInexistente: true,
  colunaInexistente: true,
  tipoIncompativel: false,
  nulidadeIncompativel: false,
});

onMounted(async () => {
  carregando.value = true;
  erros.value = await client.get();
  carregando.value = false;
});

const copiar = (sql: string) => {
  copyToClipboard(sql);
  toast.add({
    severity: "success",
    summary: "SQL copiado para a área de transferência",
    life: 5000,
    detail: sql,
  });
};

const filtroErros = computed(() => {
  // return erros.value.filter((e: ValidaBD) => nulidade.value == true ? true : e.nulidade == undefined);

  return erros.value.filter(
    (e: ValidaBD) =>
      (filtro.value.tabelaInexistente ? e.tabelaInexistente : false) ||
      (filtro.value.colunaInexistente ? e.colunaInexistente : false) ||
      (filtro.value.tipoIncompativel ? e.tipoIncompativel : false) ||
      (filtro.value.nulidadeIncompativel ? e.nulidadeIncompativel : false)
  );
});
</script>

<template>
  <div>
    <Banner titulo="ValidaBD™ 2.0" sub-titulo="Validação da estrutura do EF Core contra o schema do BD"
      icone="fa-solid fa-database" :cor-fundo="'var(--bs-red)'">
    </Banner>

    <div class="container-fluid p-4">
      <div class="row">
        <div class="col">
          <Card titulo="Parâmetros de filtragem" icone="fa-light fa-filter">
            <div class="container-fluid">
              <div class="row mb-3">
                <div class="col d-flex align-items-center">
                  <span class="me-2">Tabela Inexistente</span>
                  <InputSwitch v-model="filtro.tabelaInexistente"></InputSwitch>
                </div>
                <div class="col d-flex align-items-center">
                  <span class="me-2">Coluna Inexistente</span>
                  <InputSwitch v-model="filtro.colunaInexistente"></InputSwitch>
                </div>
                <div class="col d-flex align-items-center">
                  <span class="me-2">Tipo Incompatível</span>
                  <InputSwitch v-model="filtro.tipoIncompativel"></InputSwitch>
                </div>
                <div class="col d-flex align-items-center">
                  <span class="me-2">Nulidade Incompatível</span>
                  <InputSwitch v-model="filtro.nulidadeIncompativel"></InputSwitch>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Card v-if="erros" titulo="Inconsistências" icone="fa-light fa-triangle-exclamation"
            :texto-badge="erros.length"
            sub-titulo="Inconsistências identificadas entre o a estrutura de banco e a estrutura de classes"
            class-badge="bg-warning">
            <DataTable :value="filtroErros" :rowHover="true" :loading="carregando">
              <Column field="tabela" header="Tabela" :sortable="true"></Column>
              <Column field="coluna" header="Coluna" :sortable="true"></Column>
              <Column field="tipoEF" header="Tipo (EF)" :sortable="true"></Column>
              <Column field="tipoBD" header="Tipo (BD)" :sortable="true"></Column>
              <Column field="nulidadeEF" header="Nulidade (EF)"></Column>
              <Column field="nulidadeBD" header="Nulidade (BD)"></Column>
              <Column field="erro" header="Erro"></Column>
              <Column field="sql">
                <template #header>SQL<i v-tooltip.left="'ATENÇÃO: Alteração de banco tendo como referência o EF'"
                    class="fa-light fa-circle-question text-warning ms-2"></i></template>
                <template #body="{ data }">
                  <Button v-if="data.sql" icon="fa-solid fa-clipboard-check" @click="copiar(data.sql)"
                    class="p-button-link" v-tooltip.left="data.sql" />
                </template>
              </Column>
            </DataTable>
          </Card>
          <div v-else>
            <ProgressBar mode="indeterminate" style="height: 0.5em" class="mt-3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.banner .container) {
  max-width: initial;
  padding: 0;
}
</style>
