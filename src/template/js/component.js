Vue.component('lr-pic-text', {
  data: {},
  props: ['a_href'],
  props: ['im_src'],
  props: ['im_alt'],
  template: '<a v-bind:href=m_href><div class="lr_pic"><img v-bind:src=img_src v-bind:alt=img_alt></div><div class="lr_text"></div></a>'
})

Vue.component('io-pic-text', {
  data: {},
  props: ['a_href'],
  props: ['im_src'],
  props: ['im_alt'],
  template: '<a v-bind:href=m_href><div class="io_pic"><img v-bind:src=img_src v-bind:alt=img_alt></div><div class="io_text"></div></a>'
})

Vue.component('rl-pic-text', {
  data: {},
  props: ['a_href'],
  props: ['im_src'],
  props: ['im_alt'],
  template: '<a v-bind:href=m_href><div class="rl_pic"><img v-bind:src=img_src v-bind:alt=img_alt></div><div class="rl_text"></div></a>'
})

Vue.component('pic', {
  data: {},
  props: ['a_href'],
  props: ['im_src'],
  props: ['im_alt'],
  template: '<a v-bind:href=m_href><div class="rl_pic"><img v-bind:src=img_src v-bind:alt=img_alt></div><div class="rl_text"></div></a>'
})