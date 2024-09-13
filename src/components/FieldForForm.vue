<script>
    export default {
        inheritAttrs: false,
        props: {
            modelValue: {
                type: String,
                required: true,
            },
            label: {
                type: String,
                required: true,
            },
        },
        emits: ["update:modelValue"],
    };
</script>

<template>
    <div class="form-field">
        <input
            :type="label === 'Имя' ? 'text' : 'number'"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
            :value="modelValue"
            required
        />
        <i>{{ label }}</i>
    </div>
</template>

<style scoped>
    .form-field {
        position: relative;
        width: 100%;
    }

    input {
        height: 56px;
        padding: 26px 16px 6px;
        border-radius: 4px;
        border: 1px solid #f1f1f1;
        color: #111111;
        width: 100%;
        outline: 0;
    }

    input:disabled {
        cursor: not-allowed;
    }

    i {
        position: absolute;
        left: 16px;
        color: #8d8d8d;
        transition: all 0.2s ease;
        font-style: normal;
        pointer-events: none;
        top: 8px;
        font-size: 13px;
    }
</style>
