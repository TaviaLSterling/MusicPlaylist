import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import Song from './models/song';

Vue.use(Vuex)

let musicApi = Axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000
})
let myPlaylistApi = Axios.create({
  baseURL: '//localhost:3000/api/songs',
  timeout: 3000
})
export default new Vuex.Store({
  state: {
    songs: [],
    playlist:[],
  
  },
  mutations: {
    setSong(state, songs) {
      state.songs = songs
    },
    setPlaylist(state, playlist) {
      state.playlist = playlist
    }
  },
  actions: {
getSongs({commit,dispatch}) {
myPlaylistApi.get('')
.then(res => {
  commit('setPlaylist',res.data)
 router.push({name:'home'})
})
},
newSearch({dispatch, commit}, artist){
  musicApi.get(`/${artist}`)
  .then(res => {
    let music = res.data.results.map(s => new Song(s))
    commit('setSong', music)
  })
},
deleteSong({dispatch,commit}, song) {
  myPlaylistApi.delete('' + song._id)
  .then(res => {
    dispatch('getSongs')
  })
},
addSongs({dispatch, commit}, song) {
  myPlaylistApi.post('', song)
  .then( res => {
    dispatch('getSongs')
  })
},

  }
})
