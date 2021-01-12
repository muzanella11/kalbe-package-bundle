<template>
  <div class="l-low-effort">
    <!-- Begin Hero -->
    <section class="section section--hero">
      <div class="hero__container container">
        <div class="hero__wrapper">
          <h1>
            Bundle Paket
          </h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
    </section>
    <!-- End Hero -->

    <!-- Begin Main -->
    <section class="section section--main pt-5">
      <div class="main__container container">
        <div class="main__filters mb-4">
          <div
            v-for="(itemPackage, indexPackage) in entries.package"
            :key="indexPackage"
            class="row mb"
          >
            <div class="col-lg-12 col-12 mb-4">
              <h3>
                {{ itemPackage.packageName }}
              </h3>
            </div>
            <div class="col-lg-3 col-12 mb-4">
              <el-select
                v-model="entry.package[itemPackage.id]"
                :placeholder="`Pilih ${itemPackage.packageName}`"
                class="w-100"
                :disabled="itemPackage.id !== 1 && !entry.package[itemPackage.id - 1]"
              >
                <el-option
                  v-for="item in itemPackage.data"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
        </div>

        <div class="main__entries">
          <div
            v-if="packageBundle.length > 0"
            class="row"
          >
            <div
              v-for="(item, index) in packageBundle"
              :key="index"
              class="col-lg-3 col-md-6 mb-4"
            >
              <div class="card">
                <img :src="item.image" style="max-height: 200px;">
                <div class="card-body">
                  <h5 class="card-title">
                    {{ item.label }}
                  </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>

          <div
            v-else
            class="row"
          >
            <div class="col-12">
              Bundle paket tidak ditemukan :(
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Main -->
  </div>
</template>

<script src="./bundle-paket.js"></script>
