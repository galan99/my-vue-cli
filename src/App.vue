<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body,
button,
dd,
dl,
dt,
form,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
input,
li,
ol,
p,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
}
body,
button,
input,
select,
textarea {
  font: 0.32rem/1.5 tahoma, arial, "Microsoft Yahei", \5b8b\4f53, sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:active {
  outline: none;
}
img {
  border: 0;
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  font-size: 0;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}
button,
input,
select,
textarea {
  font-size: 100%;
  outline: none;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
#app {
  width: 7.5rem;
  margin: 0 auto;
}
</style>
