<template>
  <div class="row">
    <div class="row w-100">
      <div class="col-md-12 w-100">
        <div class="form-group persianTextStyle">
          <label>جست و جو در بین مخاطبین</label>
          <input type="text" id="search-in-data" class="form-control mt-2" />
        </div>
      </div>

      <div v-if="inputList.length == 0" class="col-md-12 col-sm-12">
        <div
          style="justify-content: center; text-align: center; height: 400px"
        >
          <div
            class="card-body"
            style="justify-content: center; text-align: center"
          >
            <div
              style="
                background-image: url('/img/svg/doc_1.svg');
                height: 140px;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
              "
            ></div>
            <h3
              style="
                justify-content: center;
                text-align: center;
                font-size: 14px;
                font-weight: normal;
                margin-top: 14pt;
              "
            >
              لیست مخاطبان شما خالی ‌است
            </h3>
          </div>
        </div>
      </div>

      <div v-if="inputList.length > 0" class="col-md-12 mt-4 w-100">
        <ul
          id="data-list-ul"
          class="mt-2 ml-2 pl-2 w-100"
          style="overflow-y: scroll; height: 500px"
        >
          <li
            v-for="(item, index) in inputList"
            :key="index"
            :title="index"
            style="display: block"
          >
            <div class="d-flex align-items-center border-bottom pb-3">
              <div class="ms-3">
                <img
                  src="/img/svg/user.svg"
                  style="width: 70px; height: 70px"
                  alt="user"
                />
              </div>
              <div class="w-100">
                <div class="d-flex justify-content-between pt-3">
                  <h6
                    class="text-body mb-2 mt-2 mr-1 noselect_text"
                    style="text-align: right"
                  >
                    {{ item.name }} {{ item.family }} <br />

                    <label
                      class="mt-2"
                      style="font-weight: normal; font-size: 12px"
                      v-text="item['title']"
                    ></label>
                  </h6>
                  <router-link
                    :to="'/contacts/' + item.id"
                    class="btn btn-inverse-dark mt-2"
                    style="
                      background-color: transparent;
                      color: var(--dark);
                      border-color: transparent;
                    "
                  >
                    <i class="fas fa-eye" style="font-size: 12px"></i>
                    مشاهده
                  </router-link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  props: ["inputList"],
  data() {
    return {};
  },
  methods: {},

  watch: {},
  mounted() {
    $(document).ready(function () {
      $("#search-in-data").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#data-list-ul li").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });
    });
  },
};
</script>

<style></style>
