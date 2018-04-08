<template>
  <div>
    <KeywordList :keywords="categories" :filterByKeyword="filterByKeyword" :selectedKeyword="selectedKeyword" />
    <KeywordList :keywords="manufactures" :filterByKeyword="filterByKeyword" :selectedKeyword="selectedKeyword" />
    <lightbox
      :images="displayedImages" :caption="true"
    ></lightbox>
  </div>
</template>

<script>
import KeywordList from './KeywordList.vue'
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
      {label: 'Mô hình xe tăng, pháo binh', key: 'tank'},
      {label: 'Mô hình tàu chiến', key: 'ship'},
      {label: 'Mô hình lính', key: 'soilder'},
      {label: 'Mô hình giả tưởng', key: 'robot'}
    ],
  }},
  components: {
    KeywordList
  },
  created: function () {
    this.getAllPhotos()
  },
  props: {
  },
  methods: {
    getAllPhotos: function () {
      axios.get('http://localhost:3000/photos')
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
