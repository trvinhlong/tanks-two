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

<style>
</style>
