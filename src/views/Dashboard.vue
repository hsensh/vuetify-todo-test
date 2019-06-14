<template>
    <div class="dashboard">
        <h1 class="subheading grey--text">Dashboard</h1>
        <v-container class="my-5 content-container">
            <v-layout row>
                <v-tooltip top>
                    <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
                        <v-icon class="left">folder</v-icon>
                        <span class="text-lowercase">by project</span>
                    </v-btn>
                    <span>sort by project name</span>
                </v-tooltip>
                
                <v-tooltip top>
                    <v-btn small flat color="grey" @click="sortBy('by')" slot="activator">
                        <v-icon class="left">person</v-icon>
                        <span class="text-lowercase">by author</span>
                    </v-btn>
                    <span>sort by author name</span>
                </v-tooltip>
                
            </v-layout>
            
            <v-card flat>
                <v-container :class="`pa-0 project ${project.status}`" v-for="project in projects" :key="project.title">
                    <div class="pa-3">
                        <v-layout row wrap>
                            <v-flex md12>
                                <div class="subheading">{{ project.title }}</div>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-flex xs12 sm4>
                                <div>By <span class="grey--text">{{ project.by }}</span></div>
                            </v-flex>
                            <v-flex xs12 sm4>
                                <div>Due <span class="grey--text">{{ project.due }}</span></div>
                            </v-flex>
                            <v-flex xs12 sm4>
                                <div class="right">
                                    <v-chip small :class="`white--text project-status ${project.status}`">{{ project.status }}</v-chip>
                                </div>
                            </v-flex>
                        </v-layout>
                    </div>
                <v-divider></v-divider>
                </v-container>

                
            </v-card>
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
    methods: {
        sortBy(property) {
            this.projects.sort((a,b) => a[property] < b[property] ? -1 : 1)
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

<style>
    .project.overdue {
        border-left: 5px solid red;
    }
    .project.completed {
        border-left: 5px solid lightgreen;
    }
    .project.ongoing {
        border-left: 5px solid lightblue;
    }

    .project-status.overdue {
        background: red;
    }
    .project-status.completed {
        background: lightgreen;
    }
    .project-status.ongoing {
        background: lightblue;
    }

</style>
