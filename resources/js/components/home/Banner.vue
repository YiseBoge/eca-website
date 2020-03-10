<template>
  <v-card
    class="mx-auto row shadow-lg overflow-hidden"
    height="200"
    outlined
  >
    <div class="col-md-7">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Featured</div>
          <v-list-item-title class="headline mb-1">News This</v-list-item-title>
          <v-list-item-subtitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
      <v-card-actions>
        <v-btn
          color="primary accent-4"
          text
        >
          Read More
        </v-btn>
      </v-card-actions>
    </div>
    <div class="col-md-5"
         style="background: url('https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') center;
         background-size: cover;"
    >
    </div>
  </v-card>
</template>
