<template>
    <div>
        <header>
            <Navbar />
        </header>
        <div>
            <v-container class="mag-t-80" id="tt">
                <v-card
                    class="mx-auto"
                    max-width="600"
                >
                    <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                        <v-card-title>{{users.firstname}} {{users.lastname}}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0" style="font-size:14px;">Username</v-card-subtitle>
                    <v-card-text class="text--primary">
                        <div style="font-size:18px;">{{users.username}}</div>
                    </v-card-text>

                    <v-card-subtitle class="pb-0" style="font-size:14px;">Firstname</v-card-subtitle>
                    <v-card-text class="text--primary">
                        <div style="font-size:18px;">{{users.firstname}}</div>
                    </v-card-text>

                    <v-card-subtitle class="pb-0" style="font-size:14px;">Lastname</v-card-subtitle>
                    <v-card-text class="text--primary">
                        <div style="font-size:18px;">{{users.lastname}}</div>
                    </v-card-text>
                    
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="primary"
                                dark
                                class="mb-2"
                                v-bind="attrs"
                                v-on="on"
                                @click="editItem(users)"
                                >Edit</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">Edit Profile</span>
                                </v-card-title>

                                <v-card-text>
                                    <ValidationObserver ref="observer" v-slot="{ validate }">
                                         <ValidationProvider v-slot="{ errors }" name="Username" rules="required">
                                            <v-text-field :error-messages="errors" v-model="editedItem.username" label="Username"></v-text-field>
                                        </ValidationProvider>
                                        <ValidationProvider v-slot="{ errors }" name="Firstname" rules="required">
                                            <v-text-field :error-messages="errors" v-model="editedItem.firstname" label="Firstname"></v-text-field>
                                        </ValidationProvider>
                                        <ValidationProvider v-slot="{ errors }" name="Lastname" rules="required">
                                            <v-text-field :error-messages="errors" v-model="editedItem.lastname" label="Lastname"></v-text-field>
                                        </ValidationProvider>          
                                        <ValidationProvider v-if="switchChnge" v-slot="{ errors }" name="Password" vid="confirmation" rules="required|min:6">
                                            <v-text-field
                                                :error-messages="errors"
                                                :append-icon="showPW1 ? 'mdi-eye' : 'mdi-eye-off'" 
                                                :type="showPW1 ? 'text' : 'password'"
                                                v-model="editedItem.password" 
                                                label="Password"
                                                @click:append="showPW1 = !showPW1"
                                            ></v-text-field>
                                            </ValidationProvider>
                                            <ValidationProvider v-if="switchChnge" v-slot="{ errors }" name="Confirm Password" rules="required|confirmed:confirmation">
                                                <v-text-field 
                                                    :error-messages="errors" 
                                                    :append-icon="showPW2 ? 'mdi-eye' : 'mdi-eye-off'" 
                                                    :type="showPW2 ? 'text' : 'password'"
                                                    v-model="editedItem.confirmPassword"
                                                    label="Confirm Password"
                                                    @click:append="showPW2 = !showPW2"
                                                ></v-text-field>
                                            </ValidationProvider>
                                    </ValidationObserver>

                                    <v-switch v-model="switchChnge" :label="`Change password`"></v-switch>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="submit">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </v-container>
        </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { userRef, defaultUserRef } from './firebase'
import { required, min, confirmed } from 'vee-validate/dist/rules'
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})
extend('min', {
    ...min,
    message: '{_field_} must be at least {length} characters',
})
extend('confirmed', {
    ...confirmed,
    message: '{_field_} confirmation does not match',
})

export default {
    name: 'EditProfile',
    components: {
        Navbar,
        ValidationProvider,
        ValidationObserver
    },
    data () {
        return {
            userInfo: {},
            users: {},
            dialog: false,
            showPW1: false,
            showPW2: false,
            switchChnge: false,
            editedItem: {
                id: '',
                username: '',
                firstname: '',
                lastname: '',
                password: '',
                confirmPassword: ''
            },
            defaultItem: {
                id: '',
                username: '',
                firstname: '',
                lastname: '',
                password: '',
                confirmPassword: ''
            },
            adminInfo: {
                username: '',
                password: '',
                role: ''
            },
        }
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    created () {
        let userInfoStr = localStorage.getItem('user_info')
        this.userInfo = JSON.parse(userInfoStr)

        defaultUserRef.on('value', (snapshot) => {
            this.adminInfo = Object.assign({}, snapshot.val())
        })

        userRef.orderByChild("username").equalTo(this.userInfo.username).once('child_added', (snapshot) => {
            this.users = {...snapshot.val(), id:snapshot.key}
        })
    },
    methods: {
        submit () {
            this.$refs.observer.validate().then((result) => {
                if (result) {
                    this.save()
                }
            })
        },
        editItem (item) {
            this.editedItem = Object.assign({}, item)    
            this.dialog = true
        },
        async save () {
            // Validate User
            const userSnap = await userRef.orderByChild("username").equalTo(this.editedItem.username).once('value', (snapshot) => {
                return snapshot
            })
            
            let checkDupID
            if (userSnap.val() != null) {
                userSnap.forEach(value => {
                    checkDupID = value.key
                })
                if (checkDupID != this.editedItem.id) {
                    swal('', 'User already exist', 'error', {
                        icon: 'error'
                    })
                    return
                }
            }

            if (this.adminInfo.username == this.editedItem.username) {
                swal('', `${this.editedItem.username} cannot be used`, 'error', {
                        icon: 'error'
                })
                return
            }

            if (this.switchChnge) {
                userRef.child(this.editedItem.id).update({
                    firstname: this.editedItem.firstname,
                    lastname: this.editedItem.lastname,
                    username: this.editedItem.username,
                    password: this.editedItem.password
                })
            } else {
                userRef.child(this.editedItem.id).update({
                    firstname: this.editedItem.firstname,
                    lastname: this.editedItem.lastname,
                    username: this.editedItem.username,
                })
            }

            await userRef.orderByChild("username").equalTo(this.editedItem.username).once('value', (snapshot) => {
                this.users.password = this.editedItem.password
                this.users.firstname = this.editedItem.firstname
                this.users.lastname = this.editedItem.lastname
                this.users.username = this.editedItem.username
            })

            // set user info after update data
            localStorage.removeItem('user_info')
            let prepareUserInfo = {
                username: this.editedItem.username,
                firstname: this.editedItem.firstname,
                lastname: this.editedItem.lastname,
                role: 0
            }
            localStorage.setItem("user_info", JSON.stringify(prepareUserInfo))

            this.close()
        },
        close () {
            this.dialog = false
            this.switchChnge = false
            this.$refs.observer.reset()
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
            })
        }
    }
}
</script>

<style>

</style>