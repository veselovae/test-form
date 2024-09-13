<script setup>
    import TheHeader from "./components/TheHeader.vue";
    import TheFooter from "./components/TheFooter.vue";
    import FormPage from "./components/pages/FormPage.vue";
    import PreviewPage from "./components/pages/PreviewPage.vue";

    import { shallowRef } from "vue";

    let activeComponent = shallowRef(FormPage);
    const changeActiveComponent = (target) => {
        activeComponent.value =
            target.innerHTML == "Форма" ? FormPage : PreviewPage;
    };
</script>

<template>
    <div class="container">
        <TheHeader @change-active-component="changeActiveComponent" />
        <KeepAlive exclude="preview-page">
            <component :is="activeComponent"></component>
        </KeepAlive>
        <TheFooter />
    </div>
</template>
