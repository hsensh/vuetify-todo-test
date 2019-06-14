<template>
    <div class="projects">
        <h1 class="subheading grey--text">Projects</h1>

        <v-container class="my-5">
            <v-expansion-panel>
                <v-expansion-panel-content v-for="project in filteredProjects" :key="project.title">
                    <div slot="header">{{ project.title }}</div>
                    <v-card>
                        <v-card-text class="grey--text caption mx-2">
                            <div class="font-weight-bold">due by {{ project.due }}</div>
                            <div>status {{ project.status }}</div>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
                
            </v-expansion-panel>
        </v-container>

    </div>
</template>

<script>
import db from '@/fb'

export default {
    data() {
        return {
            projects: []
        }
    },
    computed: {
        filteredProjects() {
            return this.projects.filter((project) => {
                return project.by === 'HsenSh'
            })
        }
    },
    created() {
        db.collection('projects').onSnapshot(results => {
            const changes = results.docChanges();

            changes.forEach(change => {
                if(change.type === 'added') {
                    this.projects.push({
                        ...change.doc.data(),
                        id: change.doc.id
                    })
                }
            })
        })
    }
}
</script>
