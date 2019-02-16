<template>
    <div class="twelve wide column segment">

        <form class="ui form segment" style="background-color: rgba(255,255,255,.2)">
            <div class="equal width fields">
                <div class="field">
                    <label style="color: white">Rechercher un artiste</label>
                    <div class="ui search fields">
                        <div class="ui icon input">
                            <input v-model="search" class="prompt" type="text" placeholder="Reherche un artiste..." style="background-color: rgba(255,255,255,.2); color: white">
                            <i class="search icon"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui segment inverted" style="background-color: rgba(255,255,255,.2); color: white" v-if="search">
                <table class="ui very basic table inverted">
                    <thead>
                        <tr>
                            <th>Nom de l'artiste</th>
                            <th>Nombre d'album</th>
                            <th>Option album</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(artiste, index) in filterArtistes" :key="index">
                            <td>
                                <h4 class="ui image header">
                                    <img :src="artiste.srcImg" class="ui mini rounded image">
                                    <div class="content" style="color: white">{{artiste.name}}</div>
                                </h4>
                            </td>
                            <td> {{artiste.albums ? artiste.albums.length : 0}} </td>
                            <td>
                                <i class="eye link icon" @click.prevent="showListAlbums(artiste)"></i>
                                <i class="plus link icon"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </form>
        <div class="ui segment inverted" style="background-color: rgba(255,255,255,.2); color: white" v-if="contentAlbums">
            <h4 class="ui dividing header inverted">Liste des albums de {{artisteSelect.name}}</h4>
            <div class="ui accordion inverted" v-if="artisteSelect.albums">
                <div class="title" @click="showAlbum()"><i class="dropdown icon"></i> Qu'est-ce qu'un chien ? </div>
                <div class="content">
                    <p class="transition hidden">Un chien est un genre d'animal domestique. Ses principales caractéristiques étant sa loyauté et sa fidélité, il est le bienvenu dans de nombreux foyers autour du monde.</p>
                </div>
            </div>
            <div class="ui center aligned container" style="background-color: transparent; color: white" v-else>
                <p>Cette artiste n'a aucun album dans la base</p>
            </div>
        </div>

    </div>
</template>

<script>
import { storage, db } from '@/firebase.js'

export default {
    name: 'addAlbum',
    data() {
        return {
            allArtistes: [],
            artisteSelect: {},
            search : '',
            contentAlbums: false
        }
    },
    computed: {
        artistesDbRef () {
            return db.ref('artistes')
        },
        filterArtistes () {
            return this.allArtistes.filter(art => {
                return art.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods: {
        showListAlbums (artiste) {
            this.contentAlbums = !this.contentAlbums
            this.artisteSelect = artiste
        },
        showAlbum () {
            $('.accordion').accordion({
                selector: {
                    trigger: '.title .icon'
                }
            })
        },
        listenerAllArtistes() {
            this.artistesDbRef.on('child_added', snap => {
                this.allArtistes.push({ ...snap.val()
                })
            })
        },
        listenerSuppArtiste() {
            this.artistesDbRef.on('child_removed', snap => {
                const deleteArtiste = this.allArtistes.find(art => art.name === snap.name)
                const index = this.allArtistes.indexOf(deleteArtiste)
                this.allArtistes.splice(index, 1)
            })
        }
    },
    watch: {
        focusSearch () {
            $('.ui.search').search({
                source: this.allArtistes,
                searchFields: ["name"],
                onSelect: function onSelect(result, response) {
                    console.log(result)
                }
            })
        }
    },
    mounted() {
        this.listenerAllArtistes()
        this.listenerSuppArtiste()
    }
}
</script>

<style>

</style>
