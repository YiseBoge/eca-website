<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">

        <div class="row">

          <!-- Blog Entries Column -->
          <div class="col-md-8">

            <h1 class="my-4">Page Heading
              <small>Secondary Text</small>
            </h1>

            <!-- Blog Post -->
            <div class="card mb-4">
              <img alt="Card image cap" class="card-img-top" src="http://placehold.it/750x300">
              <div class="card-body">
                <h2 class="card-title">Post Title</h2>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque,
                  nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate
                  voluptatibus possimus, veniam magni quis!</p>
                <a class="btn btn-primary" href="#">Read More &rarr;</a>
              </div>
              <div class="card-footer text-muted">
                January 1, 2017
              </div>
            </div>

            <!-- Blog Post -->
            <div class="card mb-4">
              <img alt="Card image cap" class="card-img-top" src="http://placehold.it/750x300">
              <div class="card-body">
                <h2 class="card-title">Post Title</h2>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque,
                  nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate
                  voluptatibus possimus, veniam magni quis!</p>
                <a class="btn btn-primary" href="#">Read More &rarr;</a>
              </div>
              <div class="card-footer text-muted">
                Posted on January 1, 2017 by
                <a href="#">Start Bootstrap</a>
              </div>
            </div>

            <!-- Blog Post -->
            <div class="card mb-4">
              <img alt="Card image cap" class="card-img-top" src="http://placehold.it/750x300">
              <div class="card-body">
                <h2 class="card-title">Post Title</h2>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque,
                  nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate
                  voluptatibus possimus, veniam magni quis!</p>
                <a class="btn btn-primary" href="#">Read More &rarr;</a>
              </div>
              <div class="card-footer text-muted">
                Posted on January 1, 2017 by
                <a href="#">Start Bootstrap</a>
              </div>
            </div>

            <!-- Pagination -->
            <!--            <ul class="pagination justify-content-center mb-4">-->
            <!--              <li class="page-item">-->
            <!--                <a class="page-link" href="#">&larr; Older</a>-->
            <!--              </li>-->
            <!--              <li class="page-item disabled">-->
            <!--                <a class="page-link" href="#">Newer &rarr;</a>-->
            <!--              </li>-->
            <!--            </ul>-->
            <pagination>
              THis is the pagination
            </pagination>

          </div>

          <!-- Sidebar Widgets Column -->
          <div class="col-md-4">

            <!-- Search Widget -->
            <div class="card my-4">
              <h5 class="card-header">Search</h5>
              <div class="card-body">
                <div class="input-group">
                  <input class="form-control" placeholder="Search for..." type="text">
                  <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">Go!</button>
              </span>
                </div>
              </div>
            </div>

            <!-- Categories Widget -->
            <div class="card my-4">
              <h5 class="card-header">Categories</h5>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6">
                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">HTML</a>
                      </li>
                      <li>
                        <a href="#">Freebies</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#">JavaScript</a>
                      </li>
                      <li>
                        <a href="#">CSS</a>
                      </li>
                      <li>
                        <a href="#">Tutorials</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        <!-- /.row -->

      </div>
    </section>
  </div>
</template>
<script>
    export default {
        name: "news"
    };
</script>
<style>
</style>
