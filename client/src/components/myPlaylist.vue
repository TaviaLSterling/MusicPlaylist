<template>
<div class="myPlaylist container">
    <div class="row">
        <div class="col-sm-4" v-for="song in myPlaylist" :key="song.id">
            <audio controls>
                <source :src="song.preview">
            </audio>
            {{song.artist}}
             {{song.trackName}} 
             {{song.album}}
            <button @click="deleteSongs(song)">Delete</button>
         </div>
         </div>
    </div>
</template>

<script>
export default {
  name: "myPlaylist",
//   data() {
//     return {};
//   },
 
  computed: {
    myPlaylist() {
      return this.$store.state.myPlaylist;
    }
  },
  methods: {
    deleteSong(song) {
      this.$store.dispatch("deleteSong", song);
    },
    addSongs(song) {
        this.$store.dipatch('addSongs', song)
    }
  }
};
</script>

<style>
</style>