<template>
    <div class="team">
      <h1 class="subheading grey--text">Team</h1>

      <v-container class="my-5">
        <v-layout row wrap>
          <v-flex xs12 md4 v-for="member in team" :key="member.name">
            <v-card flat class="text-xs-center ma-3 grey lighten-4">
              <v-responsive class="pa-3">
                <v-avatar size="100">
                  <img :src="member.avatar">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{ member.name }}</div>
                <span class="grey--text">{{ member.role }}</span>
              </v-card-text>
              <v-card-actions>
                <v-layout row justify-center>
                  <v-btn flat color="blue">
                    <v-icon>message</v-icon>
                  </v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </div>
</template>

<script>
export default {
    data() {
      return {
        team: [
          { name: 'HsenSh', role: 'Web Developer', avatar:'/avatar-1.png' },
          { name: 'HasanMoghniye', role: 'Manager', avatar:'/avatar-4.png' },
          { name: 'AliFneish', role: 'Graphic Designer', avatar:'/avatar-2.png'}
        ]
      }
    }
}
</script>
