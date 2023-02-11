<script lang="ts" setup>

const props = defineProps({
    titulo: String,
    subTitulo: String,
    corFundo: String,
    icone: String,
});

</script>

<template>
    <div class="banner mb-0 text-light" :style="{ backgroundColor: props.corFundo }">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 v-if="titulo" class="display-5 mb-0"><i v-if="props.icone" :class="props.icone"></i> {{
                        titulo
                    }}</h1>
                    <span v-if="subTitulo" class="lead opacity-50 ps-1">{{ subTitulo }}</span>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.banner {
    padding: 1.5rem;
    background-color: #F15025;
}
</style>