<script setup>
    import FieldForForm from "../FieldForForm.vue";

    import { useStore } from "vuex";
    import { v4 as uuidv4 } from "uuid";
    import { ref } from "vue";

    const store = useStore();

    const labelsForInputs = [
        ["name", "Имя"],
        ["age", "Возраст"],
    ];

    const disabledForm = () => {
        document
            .querySelectorAll("input")
            .forEach((el) => (el.disabled = true));
        document
            .querySelectorAll(".delete-btn.btn")
            .forEach((el) => (el.disabled = true));
        document.querySelector(".add-btn.btn")
            ? (document.querySelector(".add-btn.btn").disabled = true)
            : "";
    };

    const createPreview = () => {
        store.commit("setPersonalData", personRef);
        disabledForm();
    };

    const item = { name: "", age: "" };

    const personRef = ref({
        personal: {
            ...item,
        },
        children: [],
    });

    const addChild = (uniqId) => {
        personRef.value.children.push({
            id: uniqId,
            ...item,
        });
    };

    const deleteChild = (iniqId) => {
        const children = personRef.value.children;
        children.splice(
            children.findIndex((el) => el.id === iniqId),
            1
        );
    };
</script>

<template>
    <form class="form" @submit.prevent="createPreview">
        <div class="form-personal-data">
            <h6 class="form-personal-header">Персональные данные</h6>
            <div class="personal-form">
                <FieldForForm
                    v-for="label of labelsForInputs"
                    :key="label"
                    v-model="personRef.personal[label[0]]"
                    :label="label[1]"
                />
            </div>
        </div>
        <div class="form-children-data">
            <div class="children-header-box">
                <h6 class="form-children-header">Дети (макс. 5)</h6>
                <button
                    class="add-btn btn"
                    @click.prevent="addChild(uuidv4())"
                    v-if="personRef.children.length < 5"
                >
                    <img src="@/assets/plus.png" />
                    Добавить ребенка
                </button>
            </div>

            <div class="form-children-list">
                <div
                    class="form-child"
                    v-for="(el, idx) in personRef.children"
                    :key="el.id"
                >
                    <FieldForForm
                        v-for="label of labelsForInputs"
                        :key="label"
                        v-model="personRef.children[idx][label[0]]"
                        :label="label[1]"
                    />
                    <button
                        class="delete-btn btn"
                        @click.prevent="deleteChild(el.id)"
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </div>

        <button class="save-btn btn" type="submit">Сохранить</button>
    </form>
</template>

<style>
    @import url("@/assets/styles/FormPage.css");
</style>
