<template lang="pug">
  #page_index
    .hero.is-medium.is-primary.is-bold
      .hero-body
        h1.title Nuxt Tutorial
    section.articles
      .hero
        .hero-body
          h2.title Articles
      .container.is-fluid
        article-list
</template>

<script>
import ArticleList from '~/components/ArticleList'
export default {
  components: {
    ArticleList
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }

}
</script>
