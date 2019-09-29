export default {
  props: {
    value: [String, Number, Boolean]
  },
  mounted() {
    this.currentValue = this.value;
  },
  data() {
    return {
      currentValue: ''
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit('input', val);
    }
  }
};
