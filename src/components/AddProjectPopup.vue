<template>
    <v-dialog max-width="600px" v-model="dialog">
        <v-btn color="black white--text" slot="activator">
            Add New Project
        </v-btn>
        <v-card>
            <v-card-title>
                Add a New Project
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"/>
                    <v-text-field label="Status" v-model="status" prepend-icon="dvr" :rules="inputRules"/>
                    <v-menu>
                        <v-text-field slot="activator" label="Due" :value="due" prepend-icon="date_range" :rules="inputRules"/>
                        <v-date-picker v-model="due" />
                    </v-menu>
                    <v-spacer />
                    <v-layout row justify-center>
                        <v-btn color="black white--text" :loading="loading" @click="submit">Submit</v-btn>
                    </v-layout>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import db from '@/fb'
export default {
    props: [
        'showDialog',
    ],
    data() {
        return {
            title: '',
            status: '',
            due: '',
            inputRules: [
                input => input.length >= 3 || 'Minimum character length is 3'
            ],
            loading: false,
            dialog: this.showDialog

        }
    },
    methods: {
        submit() {
            if(this.$refs.form.validate()) {
                this.loading = true
                const project = {
                    title: this.title,
                    status: this.status,
                    due: this.due,
                    by: 'HsenSh'
                }
                db.collection('projects').add(project).then(() => { 
                    this.loading = false
                    this.dialog = false
                    this.$emit('showSuccessMessage')
                    this.title = ''
                    this.due = ''
                    this.status = ''
                })
                
            }
        }
    }
}
</script>

