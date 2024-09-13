<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/Logo_imi_horizontal.png" alt="logo" />
        </div>
        <nav @click="$emit('change-active-component', $event.target)">
            <a>Форма</a>
            <a>Превью</a>
        </nav>
    </div>
</template>

<style scoped>
    @import url("../assets/styles/TheHeader.css");
</style>
