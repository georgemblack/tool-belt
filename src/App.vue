<template>
  <div class="toolbelt">
    <header>
      <navigation />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {Navigation}
}
</script>

<!-- WARNING: Not scoped -->
<style lang="scss">
</style>
