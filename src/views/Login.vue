<template>
  <div class="flex h-screen w-screen items-center overflow-hidden px-2" style="margin-top: 50px;">
    <!-- Login -->
    <div
      class="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto"
    >
      <div
        class="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"
      ></div>
      <div class="mx-auto mb-2 space-y-3">
        <h1 class="text-center text-3xl font-bold text-gray-700">Sign in</h1>
        <p class="text-gray-500">Sign in to access your account</p>
      </div>

      <div class="flex-auto p-6">
        <form id="" class="mb-4" @submit.prevent="performLogin">
          <div class="mb-4">
            <label
              for="email"
              class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
              >Email or Username</label
            >
            <input
              type="text"
              class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
              id="email"
              v-model="email"
              placeholder="Enter your email or username"
              autofocus=""
            />
          </div>
          <div class="mb-4">
            <div class="flex justify-between">
              <label
                class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                for="password"
                >Password</label
              >
              <a
                href="auth-forgot-password-basic.html"
                class="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
              >
                <small class=" ">Forgot Password?</small>
              </a>
            </div>
            <div class="relative flex w-full flex-wrap items-stretch">
              <input
                type="password"
                id="password"
                class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                v-model="password"
                placeholder="············"
              />
            </div>
          </div>
          <div class="mb-4">
            <div class="block">
              <input
                class="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-indigo-500 focus:border-indigo-500 focus:shadow"
                type="checkbox"
                id="remember-me"
                style="
                  background-image: url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M6 10l3 3l6-6\'/%3e%3c/svg%3e');
                "
                checked
              />
              <label class="inline-block" for="remember-me">
                Remember Me
              </label>
            </div>
          </div>
          <div class="mb-4">
            <button
              class="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>

        <p class="mb-4 text-center">
          New on login?
          <a
            href="/register"
            class="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
    <!-- /Login -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async performLogin() {
      const credentials = {
        email: this.email,
        password: this.password,
      };

      const success = await this.login(credentials);
      if (success == true) {
        // Redirect to the desired route on successful login
        this.$router.push("/");
        Swal.fire({
                    icon: 'success',
                    title: 'Login Successfully',
                    text: 'Lets Go Shopping !',
                });
      } else {
        alert("Login Failed");
        Swal.fire({
                    icon: 'error',
                    titleText: 'Gagal Login'
                });
      }

    },
  },
};
</script>
