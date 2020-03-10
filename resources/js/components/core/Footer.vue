<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="black--text w-100" style="background-color: #f2f2f2"
    >

    <v-card-text class="w-100 py-0" style="color: #444444">
      <v-container
        grid-list-xl
      >
        <v-layout wrap>
            <v-flex
              xs12
              md5
            >
              <img src="https://eca.et/wp-content/uploads/2019/10/logo-eca-flag-2.png" style="width: 75%">
              <p class="mt-3">The Transparent Gateway to Prosperity </p>
              <div class="my-0 py-0">
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mr-5 grey--text"
                icon
              >
                <v-icon size="30px">{{ icon }}</v-icon>
              </v-btn>
              </div>
            </v-flex>

            <v-flex
              xs12
              md7
            >
            <v-layout wrap>
                <v-flex
                  xs12
                  md6
                >
                  <h6>HEAD OFFICE</h6>
                  <v-divider class="divider w-50"></v-divider>
                  <p >Ethiopian Communications Authority</p>
                  <p >Tegene Building Debrezeit Road</p>
                  <p > P.O.Box 9991</p>
                  <p >Addis Ababa, Ethiopia</p>
                  
                </v-flex>

                <v-flex
                  xs12
                  md6
                >
                  <h6>CONTACT</h6>
                  <v-divider class="divider w-50"></v-divider>
                 <v-btn
                    class="grey--text"
                    icon
                  >
                    <v-icon size="24px">mdi-email</v-icon>
                  </v-btn>
                  <a href="">contact@eca-ethiopia.com</a><br>
                  <v-btn
                    class="grey--text"
                    icon
                  >
                    <v-icon size="24px">mdi-phone</v-icon>
                  </v-btn>
                  <span>+251 11 465 6011</span><br>
                  <v-btn
                    class="grey--text"
                    icon
                  >
                    <v-icon size="24px">mdi-fax</v-icon>
                  </v-btn>
                  <span>+251 11 465 5763</span><br>
                </v-flex>
              </v-layout>
            </v-flex>
        </v-layout>   
        
        <v-divider class="divider"></v-divider>

        <div class="container black--text py-0 text-right">
          <span class="my-0">Share This: </span>
                <v-btn
                  class="grey--text"
                  icon
                >
                  <v-icon size="24px">mdi-twitter</v-icon>
                </v-btn>

                <v-btn
                  class="grey--text"
                  icon
                >
                  <v-icon size="24px">mdi-facebook</v-icon>
                </v-btn>
        </div>
      </v-container>
    </v-card-text>
    </v-card> 
  </v-footer>
</template>


<script>
    export default {
        components: {
          NewestPosts: () => import('~/components/NewestPosts'),
          Instagram: () => import('~/components/Instagram'),
          Tags: () => import('~/components/Tags')
        },
        data: () => ({
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin'
            ],
        }),
    }
</script>


<style scoped>

.divider {
  background-color: #b0b0b0;
}

.icon {
  color: #444444;
}

</style>