<template>
    <nav>
        <v-snackbar top v-model="snackbar" :timeout="5000">
            <span>Your project was successfully added!</span>
            <v-btn flat color="white" @click="snackbar=false">Close</v-btn>
        </v-snackbar>
        <v-toolbar class="text-uppercase grey--text">
            <v-toolbar-side-icon class="grey--text" @click="drawer=!drawer" />
            <h1>
            Hsen<span class="font-weight-light">Sh</span>
            </h1>
            <v-spacer />
            <v-menu offset-y>
                <v-btn flat color="grey" slot="activator">
                    <v-icon left>expand_more</v-icon>
                    Menu
                </v-btn>
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-tile-title>
                            <v-icon left>{{ link.icon }}</v-icon>
                            {{ link.text }}
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-btn flat color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer app temporary v-model="drawer" class="blue">
            <v-layout column align-center>
                <v-flex class="mt-4">
                    <v-avatar size="100">
                        <img src="/avatar-1.png">
                    </v-avatar>
                    <p class="mt-1 subheading white--text text-xs-center">HsenSh</p>
                </v-flex>
                <v-flex>
                    <AddProjectPopup showDialog @showSuccessMessage="snackbar = true"/>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" route :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content class="white--text">
                        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import AddProjectPopup from '@/components/AddProjectPopup'
export default {
    components: {
        AddProjectPopup,
    },
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'dashboard', text: 'Dashboard', route: '/'},
                { icon: 'folder', text: 'Projects', route: '/projects'},
                { icon: 'person', text: 'Team', route: '/team'},
                { icon: 'assignment', text: 'Notes', route: '/notes'}
            ],
            snackbar: false
        }
    }
}
</script>