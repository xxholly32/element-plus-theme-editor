<script setup lang="ts">
import { changeThemeByCssvars, getPalette } from '@element-plus/theme';
const color = ref('#409eff')
const predefineColors = ref([
  '#409eff',
  '#da4a45',
  '#e09f00',
  '#67c03a',
  '#00bec3',
  '#9b59eb'
])

selectTheme(color.value)

watchEffect(() => {
  selectTheme(color.value)
})

function selectTheme(theme: string) {
  const { light: lightColors, dark: darkColors } = getPalette({ light: theme, dark: theme })
  const cssvars = {
    light: {
      '--el-color-primary': lightColors[5],
      '--el-color-primary-light-3': lightColors[4],
      '--el-color-primary-light-5': lightColors[3],
      '--el-color-primary-light-7': lightColors[2],
      '--el-color-primary-light-8': lightColors[1],
      '--el-color-primary-light-9': lightColors[0],
      '--el-color-primary-dark-2': lightColors[6],
    },
    dark: {
      '--el-color-primary': darkColors[5],
      '--el-color-primary-light-3': darkColors[4],
      '--el-color-primary-light-5': darkColors[3],
      '--el-color-primary-light-7': darkColors[2],
      '--el-color-primary-light-8': darkColors[1],
      '--el-color-primary-light-9': darkColors[0],
      '--el-color-primary-dark-2': darkColors[6],
    },
  }


  changeThemeByCssvars(cssvars[isDark.value ? 'dark' : 'light'])
}
</script>
<template>
  <div flex="~ col" gap-10 p-10>
    <div flex="~" gap-4 text-center items-center justify-center>
      <h1>theme color:</h1>
      <el-color-picker v-model="color" :predefine="predefineColors" />
      <el-button icon-btn @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </el-button>
      <a icon-btn rel="noreferrer" href="https://github.com/xxholly32/element-plus-theme-editor" target="_blank" title="GitHub">
        <div i-carbon-logo-github />
      </a>
    </div>
    <HelloWorld />
  </div>
</template>

<style>
#app {
  text-align: center;
  color: var(--el-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}
</style>
