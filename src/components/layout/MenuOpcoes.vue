<script lang="ts" setup>
import Menubar from 'primevue/menubar';
import { MenuItem } from 'primevue/menuitem';


defineProps<{ items: MenuItem[] }>();

</script>
<template>
    <div class="fundo">
        <div class="container">
            <Menubar :model="items" class="menubar-custom" />
        </div>
    </div>
</template>

<style>
.p-menubar.menubar-custom {
    background-color: var(--cor-menu);
    justify-content: end;
    border: 0;
}

.fundo {
    background-color: var(--cor-menu);
}
</style>