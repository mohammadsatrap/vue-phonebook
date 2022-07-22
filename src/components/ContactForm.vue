<template>
  <div>
    <div class="row mb-4">
      <div class="col-md-4 mt-4">
        <div class="form-group persianTextStyle">
          <label class="noselect_text">نام</label>
          <input
            type="text"
            class="form-control mt-2"
            v-model="componentValue['name']"
          />
        </div>
      </div>

      <div class="col-md-4 mt-4">
        <div class="form-group persianTextStyle">
          <label class="noselect_text">نام خانوادگی</label>
          <input
            type="text"
            class="form-control mt-2"
            v-model="componentValue['family']"
          />
        </div>
      </div>

      <div class="col-md-4 mt-4">
        <div class="form-group persianTextStyle">
          <label class="noselect_text">عنوان</label>
          <input
            type="text"
            class="form-control mt-2"
            v-model="componentValue['title']"
          />
        </div>
      </div>

      <div class="col-md-12 mt-4">
        <div class="form-group persianTextStyle">
          <label class="noselect_text">تلفن همراه</label>
          <input
            type="text"
            class="form-control mt-2"
            v-model="componentValue['mobile']"
          />
        </div>
      </div>

      <div class="col-md-12 mt-4">
        <div class="form-group persianTextStyle noselect_text">
          <label style="cursor: pointer" @click="addMoreItem()">
            <i class="fas fa-plus"></i> افزودن فیلد</label
          >
        </div>
      </div>

      <div
        class="col-md-12 mt-2"
        v-for="(item, index) in componentValue.more"
        :key="index"
      >
        <div class="row persianTextStyle">
          <div class="col-md-6 mt-2">
            <label class="noselect_text">عنوان</label>
            <select class="form-select" v-model="item['title']">
              <option
                v-for="(option, optionIndex) in selectTitleList"
                :key="optionIndex"
                v-text="option"
              ></option>
            </select>
          </div>

          <div class="col-md-6 mt-2">
            <label class="noselect_text">مقدار</label>
            <input
              type="text"
              class="form-control persianTextStyle"
              v-model="item['value']"
            />
            <label
              style="
                float: left;
                top: -30px;
                left: 13px;
                position: relative;
                cursor: pointer;
              "
              ><i @click="removeMoreItem(index)" class="fas fa-minus"></i
            ></label>
          </div>
        </div>
      </div>

      <div class="col-md-12 mt-4 mb-4">
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  computed: {
    componentValue: {
      get() {
        return this.modelValue;
      },
      set(componentValue) {
        this.$emit("update:modelValue", componentValue);
      },
    },
  },

  data() {
    return {
      selectTitleList: ["تلفن", "ایمیل", "تلفن محل کار", "کد پستی", "نشانی"],
    };
  },

  methods: {
    addMoreItem() {
      this.componentValue["more"].push({
        title: "",
        value: "",
      });
    },

    removeMoreItem: function (item) {
      this.componentValue["more"].splice(item, 1);
    },
  },
};
</script>
