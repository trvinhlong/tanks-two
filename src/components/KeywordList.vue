<template>
  <div class="center-div">
    <ul class="center-ul">
      <li v-for="keyword in keywords" v-on:click="filterByKeyword(keyword.key)" v-bind:class="{'selected-keyword': keyword.key == selectedKeyword }">
        <a href="#">{{keyword.label}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'KeywordList',
  props: {
    keywords: Array,
    selectedKeyword: String,
    filterByKeyword: Function
  }
}
</script>

<style>
</style>
