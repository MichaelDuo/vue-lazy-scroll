# vue-lazy-scroll
- Vue infinite scrolling
- NOTE: This project is stll under development, not recommanded use in production.

## Usage
```Vue
<template>
  <div class="scrollable">
    <LazyScroll :loadMore="<YourLoadFunction>">
  </div>
</template>

<script>
import LazyScroll from "./vue-lazy-scroll/src"
export default {
  components: { LazyScroll },
  methods: {
    YourLoadFunction(){
      // Load Logic
    }
  }
}
</script>
```
