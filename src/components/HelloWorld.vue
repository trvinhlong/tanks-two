<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <lightbox
            :images="images"
            title="Feed Gallery"
    ></lightbox>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
      return {
    images: [
      {
          src: 'https://unsplash.it/500',
          caption: 'Image 1',
      },
      {
          src: 'https://unsplash.it/501',
      },
    ]
  }},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
