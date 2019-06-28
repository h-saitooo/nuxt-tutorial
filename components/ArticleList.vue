<transition lang="pug">
  .article-list
    article.article-item(v-for="(post, id) in articles" :key="id")
      nuxt-link.article-anchor(:to="{ name: 'article-id', params: { id: id } }")
        header.article-meta
          p {{ post.releaseDate }}
          h2.article-title.title.is-4 {{ post.title }}
          ul.tags
            li.tag.is-success(v-for="category in post.category") {{ category }}
        main.article-main
          p.article-contents {{ post.contents }}
</transition>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('article', ['articles'])
  }
}
</script>

<style lang="scss" scoped>
.article-item {
  margin-top: 2em;

  &:first-of-type {
    margin-top: 0;
  }
}

.article-anchor {
  position: relative;
  display: block;
  z-index: 2;
  padding: 1.2em;
  color: #333;

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 2px solid hsl(171, 100%, 41%);
    opacity: 0;
    transition: opacity 1s ease;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }
}

.article-meta {
  margin-bottom: 1em;
}

.article-title {
  margin: 0.5em 0;
}
</style>
