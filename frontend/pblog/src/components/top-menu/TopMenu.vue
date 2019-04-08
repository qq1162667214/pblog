<template>
	<!-- begin #top-menu -->
	<div id="top-menu" class="top-menu" v-bind:class="{ 'd-block': pageOptions.pageMobileTopMenu }">
		<!-- begin top-menu nav -->
		<top-menu-nav></top-menu-nav>
		<!-- end top-menu nav -->
	</div>
	<!-- end #top-menu -->
</template>

<script>
import TopMenuNav from './TopMenuNav.vue'
import PageOptions from '../../config/PageOptions.vue'

export default {
  name: 'TopMenu',
	components: {
		TopMenuNav
	},
  data() {
		return {
			pageOptions: PageOptions
		}
  }
}
</script>
