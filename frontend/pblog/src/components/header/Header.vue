<template>
	<div>
		<!-- begin #header -->
		<div id="header" class="header navbar-default">
			<!-- begin navbar-header -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle pull-right" v-on:click="toggleMobileRightSidebar" v-if="pageOptions.pageWithTwoSidebar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<button type="button" class="navbar-toggle pull-left" v-on:click="toggleMobileSidebar" v-if="pageOptions.pageWithTwoSidebar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<router-link to="/dashboard/v2" class="navbar-brand"><span class="navbar-logo"></span> <b>Color</b> Admin</router-link>
				<button type="button" class="navbar-toggle" v-on:click="toggleMobileSidebar" v-if="!pageOptions.pageWithTwoSidebar && (!pageOptions.pageWithTopMenu && !pageOptions.pageWithoutSidebar)">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<button type="button" class="navbar-toggle" v-on:click="toggleMobileTopMenu" v-if="pageOptions.pageWithTopMenu && pageOptions.pageWithoutSidebar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<button type="button" class="navbar-toggle p-0 m-r-0" v-on:click="toggleMobileMegaMenu" v-if="pageOptions.pageWithMegaMenu">
					<span class="fa-stack fa-lg text-inverse m-t-2">
						<i class="far fa-square fa-stack-2x"></i>
						<i class="fa fa-cog fa-stack-1x"></i>
					</span>
				</button>
			</div>
			<!-- end navbar-header -->
			
			<header-mega-menu v-if="pageOptions.pageWithMegaMenu"></header-mega-menu>
		
			<!-- begin header-nav -->
			<ul class="navbar-nav navbar-right">
				<li v-if="!pageOptions.pageWithLanguageBar" v-bind:class="{ 'hidden-sm': pageOptions.pageWithMegaMenu }">
					<form class="navbar-form" v-on:submit="checkForm">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Enter keyword" />
							<button type="submit" class="btn btn-search"><i class="fa fa-search"></i></button>
						</div>
					</form>
				</li>
				<li class="dropdown">
					<b-dropdown variant="link" menu-class="media-list dropdown-menu-right" toggle-class="f-s-14">
						<template slot="button-content">
							<i class="fa fa-bell"></i>
							<span class="label">0</span>
						</template>
						<b-dropdown-header>NOTIFICATIONS (0)</b-dropdown-header>
						<li class="text-center width-300 p-b-10">
							No notification found
						</li>
					</b-dropdown>
				</li>
				<li class="dropdown navbar-language" v-if="pageOptions.pageWithLanguageBar">
					<b-dropdown variant="link" menu-class="p-b-0">
						<template slot="button-content">
							<span class="flag-icon flag-icon-us" title="us"></span>
							<span class="name">EN</span> <b class="caret"></b>
						</template>
						<b-dropdown-item href="javascript:;"><span class="flag-icon flag-icon-us" title="us"></span> English</b-dropdown-item>
						<b-dropdown-item href="javascript:;"><span class="flag-icon flag-icon-cn" title="cn"></span> Chinese</b-dropdown-item>
						<b-dropdown-item href="javascript:;"><span class="flag-icon flag-icon-jp" title="jp"></span> Japanese</b-dropdown-item>
						<b-dropdown-item href="javascript:;"><span class="flag-icon flag-icon-be" title="be"></span> Belgium</b-dropdown-item>
						<b-dropdown-divider class="m-b-0"></b-dropdown-divider>
						<b-dropdown-item href="javascript:;" class="text-center">more options</b-dropdown-item>
					</b-dropdown>
				</li>
				<li class="dropdown navbar-user">
					<b-dropdown variant="link" menu-class="dropdown-menu-right">
						<template slot="button-content">
							<div class="image image-icon bg-black text-grey-darker">
								<i class="fa fa-user"></i>
							</div>
							<span class="d-none d-md-inline">Adam Schwartz</span> <b class="caret"></b>
						</template>
						<b-dropdown-item href="javascript:;">Edit Profile</b-dropdown-item>
						<b-dropdown-item href="javascript:;"><span class="badge badge-danger pull-right">2</span> Inbox</b-dropdown-item>
						<b-dropdown-item href="javascript:;">Calendar</b-dropdown-item>
						<b-dropdown-item href="javascript:;">Setting</b-dropdown-item>
						<b-dropdown-divider></b-dropdown-divider>
						<b-dropdown-item href="javascript:;">Log Out</b-dropdown-item>
					</b-dropdown>
				</li>
				<li class="divider d-none d-md-block" v-if="pageOptions.pageWithTwoSidebar"></li>
				<li class="d-none d-md-block" v-if="pageOptions.pageWithTwoSidebar">
					<a href="javascript:;" v-on:click="toggleRightSidebar" data-click="right-sidebar-toggled" class="f-s-14">
						<i class="fa fa-th"></i>
					</a>
				</li>
			</ul>
			<!-- end header navigation right -->
		</div>
		<!-- end #header -->
	</div>
</template>

<script>
import PageOptions from '../../config/PageOptions.vue'
import HeaderMegaMenu from './HeaderMegaMenu.vue'

export default {
  name: 'Header',
	components: {
		HeaderMegaMenu
	},
  data() {
		return {
			pageOptions: PageOptions
		}
  },
	methods: {
		toggleMobileSidebar() {
			this.pageOptions.pageMobileSidebarToggled = !this.pageOptions.pageMobileSidebarToggled;
		},
		toggleMobileRightSidebar() {
			this.pageOptions.pageMobileRightSidebarToggled = !this.pageOptions.pageMobileRightSidebarToggled;
		},
		toggleMobileTopMenu() {
			this.pageOptions.pageMobileTopMenu = !this.pageOptions.pageMobileTopMenu;
		},
		toggleMobileMegaMenu() {
			this.pageOptions.pageMobileMegaMenu = !this.pageOptions.pageMobileMegaMenu;
		},
		toggleRightSidebar() {
			this.pageOptions.pageRightSidebarToggled = !this.pageOptions.pageRightSidebarToggled;
		},
		checkForm: function(e) {
			e.preventDefault();
			this.$router.push({ path: '/extra/search' })
		}
	}
}
</script>
