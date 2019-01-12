<template>
    <div class="y-radio01" @click="y_value = !y_value" :class="changeClass">
        <div class="y-radio01-blank"></div>
        <y-icon :icon="yesIcon" class="y-radio01-true-icon"></y-icon>
        <y-icon :icon="noIcon" class="y-radio01-false-icon"></y-icon>
    </div>
</template>

<script>
    import YIcon from "./y-icon";

    export default {
        name: "y-radio01",
        components: {YIcon},
        props: {
            value: {},
            yesIcon: {type: String, default: 'icon-fensi'},
            noIcon: {type: String, default: 'icon-candan'}
        },
        watch: {
            value(val) {
                this.y_value !== val && (this.y_value = val)
            }
        },
        data() {
            return {
                y_value: this.value
            }
        },
        computed: {
            changeClass() {
                return [
                    `y-radio01-${this.y_value ? 'yes' : 'no'}`
                ]
            }
        }
    }
</script>

<style lang="scss">

    .y-radio01 {
        position: relative;
        .y-radio01-blank {
            width: 1em;
            height: 1em;
        }
        .y-radio01-true-icon, .y-radio01-false-icon {
            position: absolute;
            top: 0;
            left: 0;
            transition: all 0.5s;

        }
        &.y-radio01-yes {
            .y-radio01-false-icon {
                transform: scale(0);
                opacity: 0;
            }
        }
        &.y-radio01-no {
            .y-radio01-true-icon {
                transform: scale(0);
                opacity: 0;
            }
        }

    }

</style>
