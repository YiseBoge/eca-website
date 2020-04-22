<template>
  <v-container>
    <v-row class="mt-6">
      <v-col>
        <h1 class="font-weight-thin">About Us</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-tabs class="mr-5 mt-5" :vertical="!$vuetify.breakpoint.mdAndDown">
          <v-tab class="border-bottom">
            About Ethiopian Communications Authority
          </v-tab>
          <v-tab class="border-bottom">
            Our Mission, Our Mission, Our Values
          </v-tab>
          <v-tab class="border-bottom">
            Message from the Director General
          </v-tab>
          <v-tab class="border-bottom">
            ECA’s Corporate Brand
          </v-tab>

          <v-tab-item style="height: 700px; overflow: auto">
            <v-card class="mx-5 mb-5" flat>
              <v-card-text>
                <h2 class="mb-5 font-weight-thin">About Ethiopian Communications Authority</h2>
                <p>
                  The Ethiopian Communications Authority (ECA) is the Communications sector Regulatory Authority in
                  Ethiopia. The ECA is established by Communications Services Proclamation No. 1148/2019, with a
                  commitment to facilitate the restructuring, development and integration of the Telecommunications,
                  Information and Communications Technology (ICT) and, Electronic commerce as well as Postal and Courier
                  services to form a well-regulated, operated and efficient communications service sector. ECA’s
                  establishment is realized under the leadership of H.E. Prime Minister Dr. Abiy Ahmed’s
                  telecommunications sector policy reform direction. The ECA will serve as the main vehicle for the
                  transformation of Ethiopia’s communications sector into an intelligent sector with the necessary and
                  sufficient socio-economic infrastructure to accelerate and sustain growth and development of
                  Ethiopia’s economy.
                </p>

                <p>The Authority is governed by a Board of Management, referred to as “the Board” and comprises seven
                  (7) members. The Director General, appointed by the Prime Minster, is the chief executive officer of
                  the Authority, to manage the affairs of the ECA on a day-to-day basis.</p>

                <p>The responsibilities of the ECA entails but not limited to:</p>

                <ul>
                  <li>Issuing licenses in the communications industry, including; telecommunications, postal, and
                    courier services, and supervise operators of communications service;
                  </li>
                  <li>Specifying technical standards for the provision of communications service;</li>
                  <li>Regulating tariffs relating to communications service;</li>
                  <li>Regulating types of telecommunication equipment that may be connected to a telecommunication
                    network;
                  </li>
                  <li>Managing the use of Radio Frequency spectrum in Ethiopia;</li>
                  <li>Safeguarding the interest of consumers of communications service;</li>
                  <li>Promoting information security, data privacy and protection;</li>
                  <li>Monitoring the activities of licensees to ensure that communications services confirm to the
                    specified standards of quality, and enforce compliance with the license terms and conditions as well
                    as regulatory laws, regulations and directives;
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item style="height: 700px; overflow: auto">
            <v-card class="mx-5 mb-5" flat>
              <v-card-text>
                <h2 class="mb-5 font-weight-thin">Our Vision</h2>
                <p>Transform Ethiopia into a global digital society through fostering communications technology
                  advancement and creativity.</p>
                <h2 class="mb-5 font-weight-thin">Our Mission</h2>
                <p>To transparently and efficiently regulate the communications sector in Ethiopia and ensure fair
                  competitive practices by all communications service providers to promote accessibility and protect the
                  interests of consumers while maintaining high-quality communications services at affordable
                  prices.</p>
                <h2 class="mb-5 font-weight-thin">Our Values</h2>
                <p>At ECA, we are inspired by the mosaic of people we work with, the nation we serve, and the people
                  within our nation and beyond. As a newly established regulatory organ, we’re dedicated to making an
                  impact in our country’s development each and every day. Our seven core values and brand promise guides
                  ECA in ensuring we fulfill our purpose of building a prosperous and resilient Ethiopian economy
                  through our various works. </p>
                  <v-simple-table height="600px" >
                    <template v-slot:default>
                      <tbody>
                        <tr>
                          <td width="25%">Independence</td>
                          <td>To fairly regulate all service providers</td>
                        </tr>
                        <tr>
                          <td>Integrity</td>
                          <td>To our principles, to the people</td>
                        </tr>
                        <tr>
                          <td>Innovation</td>
                          <td>To promote creativity</td>
                        </tr>
                        <tr>
                          <td>Lead the Way</td>
                          <td>We have stepped up to start something very new to Ethiopia in an effort to change things for the betterment of our country with the ultimate goal to connect everyone and support others who are willing to unleash our nation’s unbound  communications potential. </td>
                        </tr>
                        <tr>
                          <td>Public Stewardship</td>
                          <td>ECA has been given a tremendous responsibility to be stewards of public trust by working to transform the communications sphere within Ethiopia as well as being the architect of bold ideas.</td>
                        </tr>
                        <tr>
                          <td>Make an Impact</td>
                          <td>When every action, big or small, can make an impact, every action contributes to building a nation that is a powerbroker. ECA is committed to making impactful decisions for the betterment of the Ethiopian society and the continent at large.</td>
                        </tr>
                        <tr>
                          <td>Selfless Approach</td>
                          <td>ECA is the echelon of Ethiopia. Everything we do is done in collaboration with others within our nations, across various sectors, and with our stakeholders— when we win, we win together. This is ECA’s depiction of Ethiopia, the New Horizon of Hope.</td>
                        </tr>
                        <tr>
                          <td>Caring for the Success of All</td>
                          <td>We have a genuine commitment to the success of each partner, company, operator, our leadership, stakeholders and our community and most importantly, our country.</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item style="height: 700px; overflow: auto">
            <v-card class="mx-5 mb-5" flat>
              <v-card-text>
                <h2 class="mb-5 font-weight-thin">Message from the Director General</h2>
                <p>Dear valued visitors,</p>

                <p>Welcome to the website of the Ethiopian Communications Authority (ECA), the communications services
                  regulatory authority established through the Communications Service Proclamation No. 1148/2019
                  published on August 12, 2019. </p>

                <p>I have the privilege to have been appointed as the first Director General of the newly formed ECA in
                  this exciting period for our country: the opening of the telecommunications market. This process will
                  transform the lives of our people and we wish to develop an efficient regulatory framework that will
                  benefit end-users and attract innovative and competitive players of Telecommunications sector. </p>

                <p>As a regulatory authority with mandates to lead efforts in guiding the communications sector
                  activities in Ethiopia, the Ethiopian Communications Authority views that it is extremely important
                  that it makes itself accessible to all interested parties in real time.</p>

                <p>This website aims at providing to all stakeholders – consumers, telecommunications operators,
                  potential investors, the Government or any interested third-parties – relevant and up-to-date
                  information on the mission and activities of the ECA; news about the telecommunications sector;
                  details of upcoming stakeholder consultations regarding new regulatory directives; and publications of
                  directives in force.</p>

                <p>I encourage you to go through the site to learn more about ECA. I hope you find our website useful in
                  understanding ECA, our work, and our impact in Ethiopia to transparently and efficiently regulate the
                  communications sector and ensure fair competitive practices by all communications service providers to
                  promote accessibility and protect the interests of consumers while maintaining high-quality
                  communications services at affordable prices.</p>

                <p>I wish to thank you on behalf of the ECA and myself, for your visit to our website.</p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item style="height: 700px; overflow: auto">
            <v-card class="mx-5 mb-5" flat>
              <v-card-text>
                <h2 class="mb-5 font-weight-thin">ECA’s Corporate Brand Promise</h2>
                <p>ECA will motivate you to do more with all communications and connections with our people across
                  Ethiopia, however large or small.</p>
                <h2 class="mb-5 font-weight-thin">ECA Corporate Brand Pillars</h2>

                <h4 class="font-weight-thin">People First</h4>
                <p>By putting our people first, we foster a culture of achievement, reliability, accountability,
                  excellence and longevity.</p>

                <h4 class="font-weight-thin">Safety and Security </h4>
                <p>Safety is a top priority. Whether it is the physical, mental or information communications, ECA
                  ensure the safety and security of our customers, operators, clients, contractors and staff.</p>
                <h4 class="font-weight-thin">Service Excellence</h4>
                <p>ECA endeavors to deliver exceptional experiences for everyone we come in contact with from domestic
                  and foreign operators, clients, community of customers across Ethiopia and stakeholders in everything
                  we do.</p>
                <h4 class="font-weight-thin">Sustainability</h4>
                <p>We embrace technology that is ecology friendly and powers Ethiopia’s economy, social and cultural
                  sustainability. It’s the ECA way!</p>
                <h4 class="font-weight-thin">Community Impact</h4>
                <p>ECA, by name, is an Ethiopian community asset. Its core mission is to enhance the quality of life of
                  Ethiopians by creating an economic and social benefits from this Regulatory organ.</p>

              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .v-tab {
    text-transform: none !important;
    justify-content: left !important;
  }

  .v-card__text {
    color: rgba(0, 0, 0, .87) !important;
  }
</style>
