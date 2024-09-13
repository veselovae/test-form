<script>
    export default {
        name: "preview-page",
    };
</script>

<script setup>
    import { useStore } from "vuex";
    const store = useStore();

    const personalData = store.getters.getPerson.personal;
    const childrenData = store.getters.getPerson.children;
</script>

<template>
    <div class="preview">
        <div class="personal-data">
            <h6>Персональные данные</h6>
            <span class="pesonal-info">
                {{
                    personalData
                        ? Object.values(personalData).join(", ")
                        : "Заполните форму"
                }}
            </span>
        </div>
        <div class="children-data">
            <h6>Дети</h6>
            <div class="children-list">
                <span
                    class="child"
                    v-for="child of childrenData"
                    :key="child.id"
                    >{{ `${child.name}, ${child.age}` }}</span
                >
            </div>
        </div>
    </div>
</template>

<style scoped>
    .preview {
        position: relative;
        padding-top: 106px;
        max-width: 616px;
        left: 50%;
        transform: translateX(-50%);
        height: calc(100% - 76px);
    }

    .personal-data {
        margin-bottom: 60px;
    }

    h6 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 20px;
        line-height: 24px;
    }

    span {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
    }

    .children-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: start;
    }

    .child {
        background-color: #f1f1f1;
        border-radius: 5px;
        padding: 10px 20px;
    }
</style>
