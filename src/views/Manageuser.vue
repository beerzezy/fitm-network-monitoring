<template>
    <div>
        <header>
            <Navbar />
        </header>
        <div>
            <v-container class="mag-t-80" id="tt">
                <v-data-table
                    :headers="headers"
                    :items="users"
                    sort-by="calories"
                    class="elevation-1"
                >
                    <template v-slot:top>
                        <v-toolbar flat color="white">
                            <span style="font-size: 20px">User List</span>
                            <v-divider
                            class="mx-4"
                            inset
                            vertical
                            ></v-divider>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialog" max-width="500px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                    color="primary"
                                    dark
                                    class="mb-2"
                                    v-bind="attrs"
                                    v-on="on"
                                    >Add User</v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">{{ formTitle }}</span>
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
                                            <ValidationProvider v-if="formTitle == 'Add User' || switchChnge" v-slot="{ errors }" name="Password" vid="confirmation" rules="required|min:6">
                                                <v-text-field
                                                    :error-messages="errors"
                                                    :append-icon="showPW1 ? 'mdi-eye' : 'mdi-eye-off'" 
                                                    :type="showPW1 ? 'text' : 'password'"
                                                    v-model="editedItem.password" 
                                                    label="Password"
                                                    @click:append="showPW1 = !showPW1"
                                                ></v-text-field>
                                            </ValidationProvider>
                                            <ValidationProvider v-if="formTitle == 'Add User' || switchChnge" v-slot="{ errors }" name="Confirm Password" rules="required|confirmed:confirmation">
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

                                        <v-switch v-if="formTitle == 'Edit'" v-model="switchChnge" :label="`Change password`"></v-switch>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                        <v-btn color="blue darken-1" text @click="submit">Save</v-btn>
                                    </v-card-actions>
                                    
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="editItem(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            small
                            @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:no-data>
                        No Data
                    </template>
                </v-data-table>
            </v-container>
        </div>
    </div>
</template>

<script>
import { userRef, defaultUserRef } from './firebase'
import Navbar from '@/components/Navbar.vue'
import swal from 'sweetalert'
import { required, max, min, confirmed } from 'vee-validate/dist/rules'
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})
extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
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
    name: 'Manageuser',
    components: {
        Navbar,
        ValidationProvider,
        ValidationObserver
    },
    data () {
        return {
            users: [],
            role: 0,
            dialog: false,
            showPW1: false,
            showPW2: false,
            switchChnge: false,
            headers: [
                { text: 'Firstname', value: 'firstname' },
                { text: 'Lastname', value: 'lastname' },
                { text: 'Username', value: 'username' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            editedIndex: -1,
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
            userInfo: {}
        }
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add User' : 'Edit'
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    created () {
        defaultUserRef.on('value', (snapshot) => {
            this.adminInfo = Object.assign({}, snapshot.val())
        })

        userRef.on('child_added', (snapshot) => {
            this.users.push({...snapshot.val(), id:snapshot.key})
        })

        userRef.on('child_changed', (snapshot) => {
            const index = this.users.findIndex(users => users.id == snapshot.key)  
            // this.users[index].password = this.editedItem.password
            // this.users[index].firstname = this.editedItem.firstname
            // this.users[index].lastname = this.editedItem.lastname
            // this.users[index].username = snapshot.val().username
            this.users[index].password = snapshot.val().password
            this.users[index].firstname = snapshot.val().firstname
            this.users[index].lastname = snapshot.val().lastname
            this.users[index].username = snapshot.val().username
        })

        let userInfoStr = localStorage.getItem('user_info')
        this.userInfo = JSON.parse(userInfoStr)
    },
    methods: {
        checkUser () {},
        submit () {
            this.$refs.observer.validate().then((result) => {
                if (result) {
                    this.save()
                }
            })
        },
        editItem (item) {
            this.editedIndex = 0
            this.editedItem = Object.assign({}, item)    
            this.dialog = true
        },
        deleteItem (item) {
            const index = this.users.findIndex(users => users.id == item.id)
            const ok = confirm('Are you sure you want to delete this user ?')
            if (ok) {
                this.users.splice(index, 1)
                userRef.child(item.id).remove()
            }
        },
        save () {
            // Validate User
            if (this.formTitle == 'Add User' || this.formTitle == 'Edit') {
                const index = this.users.findIndex(users => users.username == this.editedItem.username)
                if (index != -1 && this.users[index].id != this.editedItem.id) {
                    swal('', 'User already exist', 'error', {
                            icon: 'error'
                    })
                    return
                }
                if (this.adminInfo.username == this.editedItem.username) {
                    swal('', `${this.editedItem.username} cannot be used`, 'error', {
                            icon: 'error'
                    })
                    return
                }
            }

            // Add User
            if (this.formTitle == 'Add User') {
                userRef.push({
                    firstname: this.editedItem.firstname,
                    lastname: this.editedItem.lastname,
                    username: this.editedItem.username,
                    password: this.editedItem.password,
                    role: 1
                })
            }
            // Edit Profile
            if (this.formTitle == 'Edit') {
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
            }
            this.close()
        },
        close () {
            this.dialog = false
            this.switchChnge = false
            this.$refs.observer.reset()
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        }
    }
}
</script>

<style>
</style>