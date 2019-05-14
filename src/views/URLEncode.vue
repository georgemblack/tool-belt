<template>
  <div class="url-encoder">
    <form class="pure-form pure-form-stacked" @submit.prevent="copyToClipboard">
      <fieldset>
        <legend>URL Encode</legend>
        <input v-model="input">
        <textarea ref="output" v-model="output" readonly />
        <button class="pure-button pure-button-primary" @click="copyToClipboard">
          Copy
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'URLEncoder',
  data() {
    return {
      input: '',
    }
  },
  computed: {
    output() {
      return encodeURIComponent(this.input)
    }
  },
  methods: {
    copyToClipboard() {
      this.$refs.output.select()
      document.execCommand('copy')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
