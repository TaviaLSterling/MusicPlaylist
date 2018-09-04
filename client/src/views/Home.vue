<template>
  <div class="home container">
    <div class="row">
   <form @submit.prevent="newSearch">
     <h4><input type="text" class="mt-5" name="search" v-model="artist" placeholder="Enter Artist Name"></h4>  
     <button type="submit" class="btn btn-success ml-2 search"><h5>Search</h5></button>   
        </form>
         <itunes></itunes>
         <br>
         <Myplaylist></Myplaylist>
        </div>
        
  </div>
</template>

<script>
// @ is an alias to /src
import Itunes from '@/components/Itunes.vue'
import Myplaylist from '@/components/Myplaylist.vue'
import router from '../router.js'

export default {
  name: 'home',
  data() {
    return {
      
          artist: ""
        }
      },
  components: {
    Itunes,
    Myplaylist
  },
  computed: {
songs() {
  return this.$store.state.songs
},
playlist() {
  return this.$store.state.playlist
}
  },
  methods: {
    newSearch() {
      this.$store.dispatch('newSearch', this.artist)
    },
    addSongs(song) {
      this.$store.dispatch('addSongs')
    }
    }
  }

</script>
<style>
.home {
display:flex;
flex-direction: row;
}
</style>