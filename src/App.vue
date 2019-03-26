<template>
  <div>
    <header-bar/>
    <Row>
      <Col span="4">
        <menu-bar/>
      </Col>
      <Col span="4">
        <router-view></router-view>
      </Col>
    </Row>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";
import MenuBar from "@/components/MenuBar";
export default {
  name: "App",
  components: { HeaderBar, MenuBar }
};
</script>

<style>
</style>
