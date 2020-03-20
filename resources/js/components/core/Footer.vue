<template>
  <v-footer
    class="shadow-lg"
    style="background: url('https://www.webdesigndev.com/wp-content/uploads/2013/06/Triangle.jpg') repeat"
  >
    <v-card
      class="black--text w-100 transparent"
      flat
      tile
    >

      <v-card-text class="w-100" style="color: #444444">
        <v-container
          grid-list-xl
        >

          <v-layout wrap>
            <v-flex
              md4
              xs12
            >
              <img src="https://eca.et/wp-content/uploads/2019/10/logo-eca-flag-2.png" style="width: 300px">
              <p class="mt-3">The Transparent Gateway to Prosperity </p>
            </v-flex>

            <v-flex
              md8
              xs12
            >

              <v-layout wrap>
                <v-flex
                  md6
                  xs12
                >
                  <h6>HEAD OFFICE</h6>
                  <v-divider class="grey w-50"/>
                  <p>Ethiopian Communications Authority</p>
                  <p>Tegene Building, Debrezeit Road</p>
                  <p>P.O.Box 9991; Addis Ababa, Ethiopia</p>
                </v-flex>

                <v-flex
                  md6
                  xs12
                >
                  <h6>CONTACT</h6>
                  <v-divider class="grey w-50"/>
                  <v-icon size="24px">mdi-email</v-icon>
                  <a href="mailto:contact@eca-ethiopia.com" target="_blank">contact@eca-ethiopia.com</a><br>
                  <v-icon size="24px">mdi-phone</v-icon>
                  <a href="tel:+251 11 465 6011" target="_blank">+251 11 465 6011</a><br>
                  <v-icon size="24px">mdi-fax</v-icon>
                  <a href="tel:+251 11 465 5763" target="_blank">+251 11 465 5763</a><br>
                  <v-icon class="mt-3" size="24px">mdi-twitter</v-icon>
                  <a href="https://twitter.com/eca_ethiopia" target="_blank">@eca_ethiopia</a><br>
                </v-flex>

                <!-- <v-flex
                  xs12
                  md4
                >
                <h6>LINKS</h6>
                <v-divider class="grey w-50"></v-divider>
                <p><a href="">News</a></p>
                <p><a href="">Publications</a></p>
                <p><a href="">Media</a></p>
                </v-flex> -->

              </v-layout>
            </v-flex>
          </v-layout>

        </v-container>

      </v-card-text>

      <!-- <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 black--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="black--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text> -->

      <!-- <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>-->
    </v-card>

  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
