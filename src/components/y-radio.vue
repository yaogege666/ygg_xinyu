<template>
    <div class="y-radio" @click="lv_value = !lv_value" :class="classes">
        <div class="y-radio-blank"></div>
        <y-icon :icon="activeIcon" class="y-radio-active-icon"/>
        <y-icon :icon="inactiveIcon" class="y-radio-inactive-icon"/>
    </div>


</template>

<script>
    import YIcon from "./y-icon";

    export default {
        name: "y-radio",
        components: {YIcon},
        props: {
            value: {},

            activeIcon: {type: String, default: 'icon-shaoji'},
            inactiveIcon: {type: String, default: 'icon-niurou'},
        },
        watch: {
            value(val) {
                this.lv_value !== val && (this.lv_value = val)
            },
            lv_value(val) {
                this.$emit('input', val)
            },
        },
        data() {
            return {
                lv_value: this.value,
            }
        },
        computed: {
            classes() {
                return [
                    `y-radio-${this.lv_value ? 'active' : 'inactive'}`
                ]
            },
        },
    }
</script>

<style lang="scss">
    .y-radio {
        position: relative;
        .y-radio-blank {
            width: 1em;
            height: 1em;
        }
        .y-radio-active-icon, .y-radio-inactive-icon {
            position: absolute;
            top: 0;
            left: 0;
            transition: all 0.4s;
        }
        &.y-radio-active {
            .y-radio-inactive-icon {
                transform: scale(0);
                opacity: 0;
            }
        }
        &.y-radio-inactive {
            .y-radio-active-icon {
                transform: scale(0);
                opacity: 0;
            }
        }
    }
</style>
