<template>
<div class="notes">
    <h1 class="subheading grey--text">Notes</h1>
    <p class="black white--text lighten-4 text--darken-4">Hello There</p>
    <h1 class="display-4">Massive Display</h1>
    <h4 class="display-1">Smaller Display</h4>
    <p class="headline">This is a headline</p>
    <p class="subheading font-weight-bold">This is a subheading</p>
    <p class="caption">This is a caption</p>
    <v-btn class="blue white--text">This is a Button</v-btn>
    <v-btn depressed dark color="blue">This is Depressed a Button</v-btn>
    <v-btn flat color="blue">This is Flat a Button</v-btn>
    <v-btn class="blue white--text">
      <v-icon left>email</v-icon>
      <span>Email Me</span>
    </v-btn>
    <v-btn small fab class="blue white--text hidden-lg-and-up">
      <v-icon>favorite</v-icon>
    </v-btn>
    <v-btn large fab class="blue white--text hidden-md-and-down">
      <v-icon>favorite</v-icon>
    </v-btn>

    <v-layout row wrap justify-space-around>
      <v-flex sm12 md6>
        <v-btn block outline class="success">Button1</v-btn>
      </v-flex>
      <v-flex sm12 md6>
        <v-btn block outline class="success">Button2</v-btn>
      </v-flex>
      <v-flex sm6 md3>
        <v-btn block outline class="success">Button3</v-btn>
      </v-flex>
      <v-flex sm6 md3>
        <v-btn block outline class="success">Button4</v-btn>
      </v-flex>
      <v-flex sm6 md3>
        <v-btn block outline class="success">Button5</v-btn>
      </v-flex>
      <v-flex sm6 md3>
        <v-btn block outline class="success">Button6</v-btn>
      </v-flex>
      
    </v-layout>
</div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>
