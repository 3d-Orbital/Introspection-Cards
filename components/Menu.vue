<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu" aria-expanded="true">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!--
                Icon when menu is closed.

                Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!--
                Icon when menu is open.

                Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company">
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page">Dashboard</a>
              <a href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
              <a href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>

                <!--
                  Set Color Them

                    3 ways to choos the color theme: UDropdown, UButton, Utoggle 
                --> 

              <UDropdown :items="color_mode" :popper="{ placement: 'bottom-start' }">
                <UButton color="white" label="" trailing-icon="i-heroicons-chevron-down-20-solid">{{ $colorMode.value }}
                </UButton>
              </UDropdown>
              <UDropdown :items="language" :popper="{ placement: 'bottom-start' }">
                <UButton color="white" label="" trailing-icon="i-heroicons-chevron-down-20-solid">{{ locale }}</UButton>
              </UDropdown>

              <div v-if="$colorMode.value == 'light'">
                <UButton
                  icon="i-heroicons-moon-16-solid"
                  size="sm"
                  color="primary"
                  variant="solid"
                  label="Light"
                  v-on:click="setColorTheme()"
                  :trailing="false"
                />
              </div>
              <div v-else-if="$colorMode.value == 'dark'">
                <UButton
                  icon="i-heroicons-sun-20-solid"
                  size="sm"
                  color="primary"
                  variant="Dark"
                  label="light"
                  v-on:click="setColorTheme()" 
                  :trailing="false"
                />
              </div>
              <b>{{ selected2 }}</b>
              <UToggle size="lg" 
                on-icon="i-heroicons-sun-20-solid"
                off-icon="i-heroicons-moon-16-solid"
                v-model="selected1" v-on:click="setColorTheme()" />
              <b class="dark:text-white">{{ selected1 }}</b>
              <a> {{ $t('welcome') }} </a>
              {{ '  | | '+ $colorMode.value }}
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button"
            class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>
          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <UDropdown :items="settings" :popper="{ placement: 'bottom-start' }">
              <UAvatar src="https://avatars.githubusercontent.com/u/5130818?v=4" />
            </UDropdown>
          </div>

        </div>
      </div>
    </div>


    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
          aria-current="page">home</a>
        <a href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
        <a href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      </div>
    </div>
  </nav>

</template>

<script setup lang="ts">
import type { isFunction } from '@vue/shared';

const { locale, setLocale } = useI18n()

const language = [
  [{
    label: 'English',
    value: 'English',
    click: () => {
      //set English language.
      setLocale('en')
    }
  }], [{
    label: 'Español',
    value: 'Español',
    click: () => {
      // set Spanish language.
      setLocale('es')
    }
  }]]

const colorMode = useColorMode()

const selected1 = ref(false)

var selected2 = false

const color_mode = [
  [{
    label: 'System',
    value: 'system',
    click: () => {
      // set Spanish language.
      colorMode.preference = 'system'
    }
  }],
  [{
    label: 'light',
    value: 'light',
    click: () => {
      //set English language.
      colorMode.preference = 'light'
    }
  }], [{
    label: 'Dark',
    value: 'dark',
    click: () => {
      // set Spanish language.
      colorMode.preference = 'dark'
    }
  }], [{
    label: 'Sepia',
    value: 'sepia',
    click: () => {
      // set Spanish language.
      colorMode.preference = 'sepia'
    }
  }]
]

const setColorTheme = () => {
  if (selected2) {
    useColorMode().preference = 'light'
    console.log("light Color")
    selected2 = false
  } else if (selected2 === false) {
    useColorMode().preference = 'dark'
    console.log("light Color")
    selected2 = true
  } else {
    useColorMode().preference = 'sepia'
    console.log("system")
  }
}

const settings = [
  [{
    label: 'Your Profile',
    value: 'Profile',
    click: () => {
      //set English language.
    }
  }], [{
    label: 'Settings',
    value: 'settings',
    click: () => {
      //set English language.
    }
  }], [{
    label: 'Sign Out',
    value: 'sing-out',
    click: () => {
      // set Spanish language.
    }
  }]]

</script>
