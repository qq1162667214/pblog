<template>
	<!-- menu with submenu -->
	<li v-if="menu.children" class="has-sub" v-bind:class="{ 'active': subIsActive(menu.path) }">
		<a href="#" v-on:click.prevent.stop="expand()">
			<span v-if="menu.badge" class="badge pull-right">{{ menu.badge }}</span>
			<b v-else class="caret"></b>
			<i v-if="menu.icon" v-bind:class="menu.icon"></i>
			<div v-if="menu.img" class="icon-img"><img v-bind:src="menu.img" alt="" /></div>
			<span>{{ menu.title }}</span>
			<i v-if="menu.highlight" class="fa fa-paper-plane text-theme m-l-5"></i>
			<span v-if="menu.label" class="label label-theme m-l-5">{{ menu.label }}</span>
		</a>
		<ul class="sub-menu" v-bind:class="{ 'd-block': this.stat == 'expand', 'd-none': this.stat == 'collapse' }" v-bind:style="{ marginTop: (pageOptions.pageSidebarMinified) ? - (scrollTop + 40) + 'px' : '' }">
			<template v-for="submenu in menu.children">
				<top-menu-nav-list v-bind:menu="submenu" v-bind:key="submenu.path" ref="topMenuNavList" v-on:collapse-other="handleCollapseOther(submenu)"></top-menu-nav-list>
			</template>
		</ul>
	</li>
  
	<!-- menu without submenu -->
	<router-link v-else v-bind:to="menu.path" active-class="active" tag="li" v-on:click.native="collapseOther()">
		<a>
			<span v-if="menu.badge" class="badge pull-right">{{ menu.badge }}</span>
			<i v-if="menu.icon" v-bind:class="menu.icon"></i>
			<div v-if="menu.img" class="icon-img"><img v-bind:src="menu.img" alt="" /></div>
			<span>{{ menu.title }}</span>
			<i v-if="menu.highlight" class="fa fa-paper-plane text-theme m-l-5"></i>
			<span v-if="menu.label" class="label label-theme m-l-5">{{ menu.label }}</span>
		</a>
	</router-link>
</template>

<script>
import TopMenuNavList from './TopMenuNavList.vue'
import PageOptions from '../../config/PageOptions.vue'

export default {
	name: 'TopMenuNavList',
	props: ['menu'],
	components: {
		TopMenuNavList
	},
	data() {
		return {
			stat: '',
			pageOptions: PageOptions
		}
	},
	methods: {
		expand: function() {
			if (this.stat == '') {
				this.stat = (this.subIsActive(this.menu.path)) ? 'collapse' : 'expand';
			} else {
				this.stat = (this.stat == 'expand') ? 'collapse' : 'expand'
			}
			this.$emit('collapse-other', this.menu)
		},
		collapse: function(menu) {
			if (this.menu != menu) {
				this.stat = 'collapse'
			}
		},
		collapseOther: function() {
			this.$emit('collapse-other', this.menu)
		},
		handleCollapseOther: function(menu) {
			for (var i = 0; i < this.menu.children.length; i++) {
				this.$refs.topMenuNavList[i].collapse(menu);
			}
		},
		subIsActive(path) {
			const paths = Array.isArray(path) ? path : [path]
			return paths.some(path => {
				return this.$route.path.indexOf(path) === 0
			})
		}
  }
}
</script>
