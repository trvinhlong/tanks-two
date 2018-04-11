<template>
  <div>
    <KeywordList :keywords="categories" :filterByKeyword="filterByKeyword" :selectedKeyword="selectedKeyword" />
    <KeywordList :keywords="manufactures" :filterByKeyword="filterByKeyword" :selectedKeyword="selectedKeyword" />
    <lightbox
      :images="displayedImages" :caption="true"
    ></lightbox>
    <div style="width: 100%;text-align: center;">
      <div class="fb-page" data-href="https://www.facebook.com/tanksvn/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/tanksvn/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/tanksvn/">Tanks.vn</a></blockquote></div>
    </div>
  </div>
</template>

<script>
import KeywordList from './KeywordList.vue'
import Config from '../Config'
import axios from 'axios'
export default {
  name: 'Main',
  data: function () {
      return {
    images: [],
    displayedImages: [],
    selectedKeyword: '',
    manufactures: [
      {label: 'Trumpeter', key: 'trumpeter'},
      {label: 'Tamiya', key: 'tamiya'},
      {label: 'Dragon', key: 'dragon'},
      {label: 'Italeri', key: 'italeri'},
      {label: 'Zvezda', key: 'zvezda'}
    ],
    categories: [
      {label: 'Xe tăng, pháo binh', key: 'tank'},
      {label: 'Tàu chiến', key: 'ship'},
      {label: 'Máy bay', key: 'airplane'},
      {label: 'Lính', key: 'soldier'},
      {label: 'Robot', key: 'robot'}
    ],
  }},
  components: {
    KeywordList
  },
  created: function () {
    this.getAllPhotos()
      this.$ga.page({
          page: '/',
          title: 'Home page',
          location: window.location.href
      })
  },
  props: {
  },
  methods: {
    getAllPhotos: function () {
      axios.get(Config.apiHost + '/photos')
      .then(response => {
        // JSON responses are automatically parsed.
        this.images = response.data
        this.displayedImages = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    filterByKeyword: function (keyword) {
      this.displayedImages = [...this.images].filter(image => image.caption.includes(keyword))
      this.selectedKeyword = keyword
    }
  }
}
</script>

<style>
</style>
