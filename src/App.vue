<template>
  <v-app>
    <Toolbar />
    <v-content class="mx-4 my-3">
      <router-view/>
    </v-content>
  </v-app>
</template>

<style lang="css">
  @import './assets/css/base/main.css';
</style>

<script>
import Toolbar from '@/components/Toolbar'

export default {
  name: 'App',
  components: {
    Toolbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
