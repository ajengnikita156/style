<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    ...mapActions("auth", ["signup"]),
    async performsignup() {
      const credentials = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password,
        confirm_password: this.confirm_password,
      };

      const success = await this.signup(credentials);

      if (success) {
        // Redirect to the desired route on successful login
        this.$router.push("/login");
      } else {
        alert("signup Failed");
      }
    },
  },
};
</script>

<template>
  <div style="margin-top: 109px;">
  <form
    class="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"
    @submit.prevent="performsignup"
  >
   <center> <h1 class="mb-6 text-xl font-semibold lg:text-2xl">REGISTRATION</h1></center>
    <div
      class="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex"
    >
      <div
        class="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5"
        style="
          background-image: url(https://espay.id/wp-content/uploads/2020/01/registrasi.png);
        "
      ></div>
      <div class="w-full sm:w-3/5">
        <div>
          <label class=""> Full Name </label>
          <input
            v-model="name"
            type="text"
            placeholder="Full Name "
            class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label class=""> Phone </label>
          <input
            v-model="phone"
            type="number"
            placeholder="Phone "
            class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label class=""> Email </label>
          <input
            v-model="email"
            type="email"
            placeholder="Email Address"
            class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label class=""> Password </label>
          <input
            v-model="password"
            type="password"
            placeholder="* * * * * *"
            class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label class=""> Confirm Password </label>
          <input
            v-model="confirm_password"
            type="password"
            placeholder="* * * * * *"
            class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          />
        </div>

        <div>
          <button
            type="submit"
            class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  </form></div>
</template>
