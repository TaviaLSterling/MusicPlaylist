<template>
  <div class="home container">
   <form @submit.prevent="search">
     <input type="text" name="search" placeholder="Enter Artist Name">     
        </form>
  </div>
</template>

<script>
// @ is an alias to /src
import Itunes from '@/components/Itunes.vue'
import myPlaylist from '@/components/myPlaylist.vue'
import router from '../router.js'

export default {
  name: 'home',
  data() {
    return {
      songs: {},
      myPlaylist: []
    }
  },
  components: {
    Itunes,
    myPlaylist
  },
  methods: {
    
    }
  }

</script>
