<template>
  <nav>
    <div class="pure-menu pure-menu-horizontal">
      <a href="/#/" class="pure-menu-heading pure-menu-link">Toolbelt</a>
      <ul class="pure-menu-list">
        <router-link tag="li" class="pure-menu-item" to="/url-encode">
          <a class="pure-menu-link">URL Encode</a>
        </router-link>
        <router-link tag="li" class="pure-menu-item" to="/docker-run">
          <a class="pure-menu-link">Docker Run</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
</style>
