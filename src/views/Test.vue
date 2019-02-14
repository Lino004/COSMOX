<template>
<div class="ui search">
  <div class="ui icon input">
    <input v-model="focusSearch" class="prompt" type="text" placeholder="Reherche pays...">
    <i class="search icon"></i>
  </div>
  <div class="results"></div>
  <div class="ui segment">
    {{artisteSelect}}
  </div>
</div>

</template>

<script>
import { storage, db } from '@/firebase.js'

export default {
  data() {
    return {
      focusSearch : '',
      test: null,
      allArtistes: [],
      onArtisteSelect: {}
    }
  },
  computed: {
      artistesDbRef () {
          return db.ref('artistes')
      },
      artisteSelect () {
        return this.onArtisteSelect
      }
  },
  methods: {
    listenerAllArtistes() {
      this.artistesDbRef.on('child_added', snap => {
        this.allArtistes.push({ ...snap.val()
        })
      })
    }
  },
  watch: {
    focusSearch () {
      var artistes = this.allArtistes
      $('.ui.search').search({
        type: "category",
        searchFields: ["bio", "name"],
        fullTextSearch: true,
        onSelect: function onSelect(result, response) {
          this.onArtisteSelect = response
        },
        apiSettings: {
          responseAsync: function mockResponseAsync(settings, callback) {
            if (settings.urlData.query) {
              (function() {
                var result = {
                  results: {}
                }
                artistes.filter( artiste => {
                    return artiste.name.toLowerCase().includes(
                      settings.urlData.query.toLowerCase()
                    )
                  }).forEach(function(item) {
                    result.results["category" + item.id.toString()] = {
                      name: item.id.toString(),
                      results: [item]
                    }
                  })
                callback(result)
              })()
            } else callback({})
          },
          throttle: 400
        },
        templates: {
          message: function message(type, _message) {
            var html =
              '<div class="message empty"><div class="header">No users found</div><div class="description">Your search was not successful</div></div>'
            return html
          },
          category: function category(response) {
            var html = ""
            Object.keys(response.results).forEach(function(key) {
              html +=
                '<div class="category"><a class="result"><div class="content"><div class="title">' +
                response.results[key].results[0].name +
                '</div></div></a></div>'
            })
            return html
          }
        }
      })
      console.log(this.onArtisteSelect)
    }
  },
  mounted () {
    this.listenerAllArtistes()
  }
}
</script>

<style>

</style>
