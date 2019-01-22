export const ValueMixin = {
    props: {
        value: {},
    },
    watch: {
        value(val) {
            this.p_watchValue && val !== this.p_value && (this.p_value = val)
        },
        p_value(val) {
            this.p_watchCurrentValue && this.$emit('input', val)
        },
    },
    data() {
        return {
            p_value: this.value,
            p_watchValue: true,
            p_watchCurrentValue: true,
        }
    },
}

export const MountedMixin = {
    data() {
        return {
            p_mounted: false
        }
    },
    mounted() {
        this.p_mounted = true
    },
    beforeDestroy() {
        this.p_mounted = false
    },
}