<template>
<div class="twelve wide column segment">
    <h3 class="ui header inverted">Gestion des Artistes</h3>
    <form class="ui form segment" style="background-color: rgba(255,255,255,.2)">
        <h4 class="ui dividing header inverted">Information sur l'artiste</h4>
        <div class="equal width fields">
            <div class="required field" :class="{'error': errorName}">
                <label style="color: white">Nom de l'artiste</label>
                <input v-model="infoArtiste.nom" type="text" name="nom-artiste" placeholder="Nom de l'artiste" style="background-color: rgba(255,255,255,.2); color: white">
                </div>
                <div class="required field" :class="{'error': errorImg}">
                    <label style="color: white">Image de l'artiste </label>
                    <label for="fileImgArtiste" class="ui icon blue button field" style="background-color: rgba(255,255,255,.2); color: white">
                        <i class="image icon large"></i>
                    </label>
                    <input @change.prevent="getFileImg($event)" type="file" id="fileImgArtiste" accept="image/*" style="display:none">
                </div>
                    <div class="centered field" v-if="infoArtiste.srcImg.length > 0">
                        <label style="color: white">Visualisation</label>
                        <img class="ui tiny image" :src="infoArtiste.srcImg">
                </div>
                    </div>
                    <div class="required field" :class="{'error': errorBio}">
                        <label style="color: white">Petite biographie</label>
                        <textarea v-model="infoArtiste.bio" placeholder="Biographie ..." rows="2" style="background-color: rgba(255,255,255,.2); color: white"></textarea>
                    </div>
                    <div class="ui grid">
                        <div class="three wide column">
                            <div class="ui blue button" @click.prevent="send()" style="background-color: rgba(255,255,255,.2); color: white">Enregistrer</div>
                        </div>
                        <div class="seven wide column" v-if="notif.show">
                            <div class="ui mini floating icon message" :class="notif.type" style="margin: -10px;">
                                <i class="icon" :class="notif.icon"></i>
                                <div class="content">
                                    <p><b>{{notif.msg}}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
    </form>
    <div class="ui segment inverted" style="background-color: rgba(255,255,255,.2); color: white">
        <h4 class="ui dividing header">Liste des artistes actuel</h4>
        <table class="ui very basic table inverted">
            <thead>
                <tr>
                    <th>Nom de l'artiste</th>
                    <th>Image</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(artiste, index) in allArtistes" :key="index">
                    <td data-label="Name">{{artiste.name}}</td>
                    <td data-label="Age"><img class="ui mini image" :src="artiste.srcImg"></td>
                    <td data-label="Job"></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import {
    storage,
    db
} from '@/firebase.js'

export default {
    name: 'addArtist',
    data() {
        return {
            infoArtiste: {
                nom: '',
                bio: '',
                fileImg: null,
                srcImg: ''
            },
            errorName: false,
            errorImg: false,
            errorBio: false,
            uploadTask: null,
            allArtistes: [],
            notif: {
                show: false,
                type: '',
                icon: '',
                msg: ''
            }
        }
    },
    computed: {
        artistesDbRef() {
            return db.ref('artistes')
        },
    },
    methods: {
        notification(show, type, icon, msg) {
            this.notif = {
                show: show,
                type: type,
                icon: icon,
                msg: msg
            }
        },
        getFileImg(event) {
            this.infoArtiste.fileImg = event.target.files[0]
            this.infoArtiste.srcImg = URL.createObjectURL(this.infoArtiste.fileImg)
        },
        sendArtiste() {
            let dataArtiste = {
                name: this.infoArtiste.nom,
                bio: this.infoArtiste.bio,
                srcImg: this.infoArtiste.srcImg,
                id: this.allArtistes.length
            }
            db.ref('artistes/' + this.allArtistes.length + '/').set(dataArtiste)
            this.notification(true, 'positive', 'check', "Enregistrement réussi")
            this.infoArtiste = {
                nom: '',
                bio: '',
                fileImg: null,
                srcImg: ''
            }
            this.notification(false)
        },
        send() {
            if (this.nameIsValide() && this.bioIsValide() && this.imgIsValide()) {
                this.sendImg(this.infoArtiste.fileImg)
            }
        },
        sendImg(file) {
            let storageRef = storage.ref('artistes/')
            this.uploadTask = storageRef.child(this.infoArtiste.nom + '/').put(file)
        },
        nameIsValide() {
            if (this.infoArtiste.nom) {
                this.errorName = false
                return true
            } else {
                this.errorName = true
                this.notification(true, 'negative', 'times', "Le nom de l'artiste n'est pas valide")
                return false
            }
        },
        bioIsValide() {
            if (this.infoArtiste.bio) {
                console.log('yes')
                this.errorBio = false
                return true
            } else {
                this.errorBio = true
                this.notification(true, 'negative', 'times', "Veillez insérer une bibliographie")
                return false
            }
        },
        imgIsValide() {
            if (this.infoArtiste.fileImg) {
                this.errorImg = false
                return true
            } else {
                this.errorImg = true
                this.notification(true, 'negative', 'times', "Vous n'avez pas choisie l'image de l'artiste")
                return false
            }
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
        uploadTask() {
            this.uploadTask.on('state_changed', snapshot => {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log('progress is ' + progress + '% done')
                },
                null,
                () => {
                    this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                        this.$emit('url', downloadURL)
                        console.log(downloadURL)
                        this.infoArtiste.srcImg = downloadURL
                        if (this.infoArtiste.srcImg === downloadURL) {
                            this.sendArtiste()
                        }
                    })
                })
        }
    },
    created() {
        this.listenerAllArtistes()
        this.listenerSuppArtiste()
    }
}
</script>

<style>

</style>
