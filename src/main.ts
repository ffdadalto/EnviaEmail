import InstanceFormatar, { Formatar } from "./classes/utilitarios/formatar";
import "./classes/utilitarios/datetime";
import "./classes/utilitarios/array";
import "./classes/utilitarios/moment-ptbr";


import './assets/main.css'
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { createApp } from "vue";
import router from './router/index'

import App from "./App.vue";

import Badge from "primevue/badge";
import ProgressBar from "primevue/progressbar";

const app = createApp(App);
app.component("Badge", Badge);
app.component("ProgressBar", ProgressBar);

app.use(router);

import PrimeVue from "primevue/config";
app.use(PrimeVue, {
  locale: {
    dayNames: [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    dayNamesMin: ["Dom", "2ª", "3ª", "4ª", "5ª", "6ª", "Sáb"],
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthNamesShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    today: "Hoje",
    clear: "Limpar",
    dateFormat: "dd/mm/yy",
  },
});

import ToastService from "primevue/toastservice";
app.use(ToastService);

import ConfirmationService from "primevue/confirmationservice";
app.use(ConfirmationService);

import Button from "primevue/button";
app.component("Button", Button);

import BadgeDirective from "primevue/badgedirective";
app.directive("badge", BadgeDirective);

import Tooltip from "primevue/tooltip";
app.directive("tooltip", Tooltip);

app.directive("info", function (el, binding) {
  if (binding.value) el.innerHTML = binding.value;
  else el.innerHTML = "-";
});

app.config.globalProperties.$formatar = InstanceFormatar;
app.provide("formatar", InstanceFormatar);

app.mount("#app");

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $formatar: Formatar;
  }
}
