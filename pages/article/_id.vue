<template lang="pug">
  #page_article
    header.article-header.hero.is-primary
      .hero-body
        .container.is-fluid
          p {{ thePost.releaseDate }}
          h1.title {{ thePost.title }}
          ul.tags
            li.tag.is-white(v-for="item, index in thePost.category" :key="index") {{ item }}
    main.article-main
      section.section
        .container.is-fluid.content
          p {{ thePost.contents }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      postId: this.$nuxt.$route.params.id
    }
  },
  computed: {
    ...mapState('article', {
      thePost: function(ctx) {
        return ctx.articles[`${this.postId}`]
      }
    })
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
</script>
