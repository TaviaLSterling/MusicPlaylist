export default class Song {
    constructor(data) {
        this.trackName = data.trackName,
        this.artist = data.artist,
        this.collectionName = data.collectionName,
        this.album = data.artworkUrl60,
        this.preview = data.previewUrl,
        this.trackId = data.trackId
    }
}