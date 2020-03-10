<template>
  <footer class="footer align-bottom bg-gradient-primary mt-5">
    <!-- <div class="container container-lg">
            <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/theme/landing.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 mb-5 mb-lg-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/profile" title="Profile Page">
                            <img v-lazy="'img/theme/profile.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
            </div>
        </div> -->
    <div class="container container-lg">
      <div class="row row-grid align-items-center">
        <div class="col-lg-7">
          <h3 class="text-white font-weight-bold mb-3">
            Head Office
          </h3>
          <h4 class="mb-0 font-weight-light text-white">
            Ethiopian Communications Authority
          </h4>

          <h4 class="mb-0 font-weight-light text-white">
            Debrezeit Road, Tegene Building
          </h4>

          <h4 class="mb-0 font-weight-light text-white">
            P.O.Box 9991
          </h4>
          <h4 class="mb-0 font-weight-light text-white">
            Addis Ababa, Ethiopia
          </h4>
        </div>
        <!-- <div class="col-lg-4">
                    <h3 class="text-primary font-weight-light mb-2">Contact us</h3>
                    <h4 class="mb-0 font-weight-light">+ 1 703-463-4468</h4>

                    <h4 class="mb-0 font-weight-light"> info@stempower.org</h4>
                </div> -->
        <div class="col-lg-5 text-lg-center btn-wrapper mt-4">
          <a class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-original-title="Follow us"
             data-toggle="tooltip"
             href="https://twitter.com/stempowerusa" rel="noopener"
             target="_blank"
          >
            <i class="fa fa-twitter"/>
          </a>
          <a class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-original-title="Like us"
             data-toggle="tooltip"
             href="https://www.facebook.com/STEMpower" rel="noopener"
             target="_blank"
          >
            <i class="fa fa-facebook-square"/>
          </a>
          <a class="btn btn-neutral btn-icon-only btn-instagram btn-lg btn-round" data-original-title="Follow us"
             data-toggle="tooltip"
             href="https://www.instagram.com/stempower_africa" rel="noopener"
             target="_blank"
          >
            <i class="fa fa-instagram"/>
          </a>
          <a class="btn btn-neutral btn-icon-only btn-linkedin btn-round btn-lg"
             data-original-title="Follow us on Linkedin" data-toggle="tooltip"
             href="https://www.linkedin.com/in/gfct-stempower-807902196" rel="noopener"
             target="_blank"
          >
            <i class="fa fa-linkedin"/>
          </a>
          <a class="btn btn-neutral btn-icon-only btn-telegram btn-round btn-lg"
             data-original-title="Talk to us on Telegram" data-toggle="tooltip"
             href="https://telegram.me/STEMpower_PR" rel="noopener"
             target="_blank"
          >
            <i class="fa fa-telegram"/>
          </a>
          <a class="btn btn-neutral btn-icon-only btn-youtube btn-round btn-lg"
             data-original-title="Subscribe on Youtube" data-toggle="tooltip"
             href="https://www.youtube.com/channel/UCuzT9QGaRilgE2JKbU9cUOA" rel="noopener"
             target="_blank"
          >
            <i class="fa fa-youtube-play"/>
          </a>
        </div>
      </div>
      <hr>
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright text-white">
            <!-- &copy; {{year}} -->
            <p>© 2020, ECA. All Rights Reserved</p>
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="https://www.stempower.org" rel="noopener" target="_blank"><i
                class="fa fa-phone"/> + 1 703-463-4468</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.stempower.org" rel="noopener" target="_blank"><i
                class="fa fa-envelope-o"/> info@stempower.org
                Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
