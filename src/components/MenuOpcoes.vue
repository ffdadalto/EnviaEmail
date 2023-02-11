<script lang="ts" setup>
import Menubar from 'primevue/menubar';
import { MenuItem } from 'primevue/menuitem';

defineProps<{ items: MenuItem[] }>();

</script>
<template>
    <div style="background-color: rgb(233 233 233);">
        <div class="container">
            <Menubar :model="items" class="menubar-custom" />
        </div>
    </div>
</template>

<style>
.p-menubar.menubar-custom {
    background-color: transparent;
    justify-content: end;
    border: 0;
}
</style>