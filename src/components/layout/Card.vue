<script lang="ts" setup>
const props = defineProps({
  titulo: String,
  subTitulo: String,
  icone: {
    type: String,
    default: "",
  },
  textoBadge: {
    type: String,
    default: "",
  },
  classBadge: {
    type: String,
    default: "",
  },
  acaoIcone: {
    type: Function,
  },
  textoLink: {
    type: String,
    default: "",
  },
  iconeLink: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title d-flex align-items-center" v-if="titulo">
        <i class="me-2" :class="icone" v-if="icone"></i>{{ titulo }}
        <span
          :class="[
            'badge rounded-pill bg-secondary mx-2',
            classBadge ? classBadge : '',
          ]"
          v-if="textoBadge"
          >{{ textoBadge }}</span
        >
        <a class="ms-auto" v-if="acaoIcone" @click.prevent="acaoIcone!()"
          ><i
            :class="iconeLink"
            type="button"
            label="Toggle"
            v-tooltip.top="textoLink"
          ></i
        ></a>
      </h5>
      <h6 class="card-subtitle mb-3 text-muted" v-if="subTitulo">
        {{ subTitulo }}
      </h6>
      <slot name="body"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
/* Para colocar o texto branco com o card tem o CSS de text-light (para quando o fundo é escuro) */
.text-light .text-muted {
  color: white !important;
}
</style>
