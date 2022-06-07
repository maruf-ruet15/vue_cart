<script default>
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.keyword);
    },
  },
};
</script>
<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
  >
    <div class="container flex items-center mx-auto">
      <div class="w-1/4">
        <a href="#" class="flex items-center">
          <img
            src="../assets/tesla.png"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >M@ruf Car House</span
          >
        </a>
      </div>
      <div class="w-3/4 flex justify-between">
        <div
          class="mr-8 hidden items-center w-full md:flex md:w-auto"
          id="mobile-menu-3"
        >
          <ul
            class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
          >
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
                ><router-link :to="{ path: '/' }">Home</router-link></a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                ><router-link :to="{ path: '/products' }">Products</router-link></a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                ><router-link :to="{ path: '/about' }">About</router-link></a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                ><router-link :to="{ path: '/service' }"
                  >service</router-link
                ></a
              >
            </li>
          </ul>
        </div>
        <div class="flex">
          <form @submit.prevent="search" class="flex">
            <input
              v-model="keyword"
              type="text"
              id="search-navbar"
              class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Item..."
            />
            <button
              class="block ml-2 p-1 pl-1 text-gray-900 bg-green-500 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-green-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              search
            </button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>

<style></style>
