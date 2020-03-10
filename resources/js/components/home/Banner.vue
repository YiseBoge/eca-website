<template>
  <!--  <base-card dark>-->
  <!--    <v-img-->
  <!--      class="grey lighten-2"-->
  <!--      height="300"-->
  <!--      width="100%"-->
  <!--      src="https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"-->
  <!--    >-->
  <!--      <v-layout-->
  <!--        fill-height-->
  <!--        align-center-->
  <!--        pa-3-->
  <!--      >-->
  <!--        <v-flex-->
  <!--          xs12-->
  <!--          md7-->
  <!--          offset-md5-->
  <!--        >-->
  <!--          <h1 class="display-3 font-weight-light">-->
  <!--            The Art Of Travel-->
  <!--          </h1>-->
  <!--          <div class="subheading text-uppercase pl-2 mb-4">-->
  <!--            Finding Beauty, One flight at a time-->
  <!--          </div>-->
  <!--          <v-btn-->
  <!--            color="primary"-->
  <!--            depressed-->
  <!--            round-->
  <!--          >-->
  <!--            Subscribe-->
  <!--          </v-btn>-->
  <!--        </v-flex>-->
  <!--      </v-layout>-->
  <!--    </v-img>-->
  <!--  </base-card>-->

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
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </v-list-item-subtitle>
        </v-list-item-content>

        <!--        <v-list-item-avatar-->
        <!--          tile-->
        <!--          size="100"-->
        <!--          color="grey"-->
        <!--        />-->
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


    <!--    <v-card-actions>-->
    <!--      <v-btn text>Button</v-btn>-->
    <!--      <v-btn text>Button</v-btn>-->
    <!--    </v-card-actions>-->
  </v-card>
</template>
