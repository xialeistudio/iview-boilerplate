<template>
  <Menu theme="light">
    <MenuItem>
      <router-link to="/">首页</router-link>
    </MenuItem>
    <Submenu>
      <template slot="title">一级菜单</template>
      <MenuItem>
        <router-link to="/secondary">二级菜单</router-link>
      </MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
export default {
  name: "MenuBar"
};
</script>
