<template>
    <div>
        <header>
            <Navbar />
        </header>
        <div>
            <v-container class="mag-t-80" id="tt">
                <!-- <v-data-table
                    :headers="headers"
                    :items="users"
                    :items-per-page="10"
                    class="elevation-1"
                ></v-data-table>   -->
                <v-data-table
                    :headers="headers"
                    :items="users"
                    sort-by="calories"
                    class="elevation-1"
                >
                    <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-toolbar-title>User List</v-toolbar-title>
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
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.firstname" label="Firstname"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.lastname" label="Lastname"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.username" label="Username"></v-text-field>
                                    </v-col>
                                    <v-col v-if="formTitle == 'Add User'" cols="12" sm="6" md="4">
                                        <v-text-field type="password" v-model="editedItem.password" label="Password"></v-text-field>
                                    </v-col>
                                    <v-col v-if="formTitle == 'Add User'" cols="12" sm="6" md="4">
                                        <v-text-field type="password" v-model="editedItem.confirmPassword" label="Confirm Password"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
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
import { userRef } from './firebase'
import Navbar from '@/components/Navbar.vue'
import swal from 'sweetalert'
// import { required, email, max } from 'vee-validate/dist/rules'

// extend('required', {
//   ...required,
//   message: '{_field_} can not be empty',
// })

export default {
    name: 'Manageuser',
    components: {
        Navbar
    },
    data () {
        return {
            users: [],
            dialog: false,
            headers: [
                { text: 'Firstname', value: 'firstname' },
                { text: 'Lastname', value: 'lastname' },
                { text: 'Username', value: 'username' },
                { text: 'Password', value: 'password' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            editedIndex: -1,
            editedItem: {
                username: '',
                firstname: '',
                lastname: '',
                password: '',
                confirmPassword: ''
            },
            defaultItem: {
                username: '',
                firstname: '',
                lastname: '',
                password: '',
                confirmPassword: ''
            },
        }
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add User' : 'Edit'
      },
      realtimeplus () {
        return this.users
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    created () {
        userRef.on('child_added', (snapshot) => {
            this.users.push({...snapshot.val(), id:snapshot.key})
            //console.log(this.users)
        })

        userRef.on('child_changed', (snapshot) => {
            const index = this.users.findIndex(users => users.id == snapshot.key)        
            this.users[index].username = this.editedItem.username
        })
    },
    methods: {
        checkUser () {},
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
            const valid = this.validateInput(this.editedItem)
            if (valid == false) {
                return
            }

            // if (this.formTitle == 'Add User') {
            //     if (this.editedItem.confirmPassword == this.editedItem.password) {
            //         userRef.push({
            //             firstname: this.editedItem.firstname,
            //             lastname: this.editedItem.lastname,
            //             username: this.editedItem.username,
            //             password: this.editedItem.password,
            //             role: 1
            //         })
            //     } else {
            //         swal('', 'Invalid confirmation password ', 'error', {
            //             icon: 'error'
            //         })
            //     }
            // }
            // if (this.formTitle == 'Edit') {
            //     userRef.child(this.editedItem.id).update({
            //         username: this.editedItem.username
            //     })
            // }

            // Clear Input Data
            //this.clearInputData()
            this.close()
        },
        close () {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        validateInput (item) {
            console.log(item)
            if (item.firstname == '' || item.lastname == '' || item.username == '' || item.password == '' || item.confirmPassword == '' ) {
                return false
            }
            return true
        }
        // clearInputData () {
        //     this.editedItem.firstname = ''
        //     this.editedItem.lastname = ''
        //     this.editedItem.username = ''
        //     this.editedItem.password = ''
        //     this.editedItem.confirmPassword = ''
        // }
    }
}
</script>

<style>

</style>