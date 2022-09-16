<template>
<div>
  <audio id="myAudio" ref="myaudio" controls >
  </audio>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "DownloadAudio",

  methods: {
    Play() {
      try {
        const requestOptions = {
          method: 'GET',
          responseType: 'arraybuffer',
          headers: {
            'Content-Type': 'application/json',
          },
        };

        axios.get(`http://localhost:8081/getAudio`, requestOptions).then(response => {
          let mp3 = new Blob([response.data], {type: 'application/octet-stream'})

        console.log(response)
        console.log(response.data)
        let url = (window.URL || window.webkitURL).createObjectURL(mp3);

        console.log(this.$refs.myaudio.id)
        let audioObj = this.$refs.myaudio;
        audioObj.setAttribute("src", url);
      })
      } catch (e) {
        console.log('play audio error: ', e)
      }
    },

  },
  mounted() {
    this.Play()
  },
}
</script>

<style scoped>

</style>