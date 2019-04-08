<template>
	<!-- begin navbar-collapse -->
	<div class="collapse navbar-collapse pull-left" id="top-navbar" v-bind:class="{ 'd-block': pageOptions.pageMobileMegaMenu }">
		<ul class="nav navbar-nav">
			<li class="dropdown dropdown-lg">
				<b-dropdown variant="link" menu-class="dropdown-menu-lg" class="dropdown-lg">
					<template slot="button-content">
						<i class="fa fa-th-large fa-fw"></i> Mega <b class="caret"></b>
					</template>
					<div class="row">
						<div class="col-lg-4 col-md-4">
							<h4 class="dropdown-header">UI Kits</h4>
							<div class="row m-b-20">
								<div class="col-lg-6">
									<ul class="nav d-block">
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> FontAwesome</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Ionicons</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Simple Line Icons</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Typography</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Media Object</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Widget Boxes</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Tabs & Accordions</a></li>
									</ul>
								</div>
								<div class="col-lg-6">
									<ul class="nav d-block">
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Unlimited Nav Tabs</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Modal & Notification</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Buttons</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-4">
							<h4 class="dropdown-header">Page Options <span class="label label-inverse">11</span></h4>
							<div class="row m-b-20">
								<div class="col-lg-6">
									<ul class="nav d-block">
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Blank Page</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Page with Footer <span class="badge badge-success">NEW</span></a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Page without Sidebar</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Page with Right Sidebar</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Page with Minified Sidebar</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Page with Two Sidebar</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Page with Line Icons</a></li>
									</ul>
								</div>
								<div class="col-lg-6">
									<ul class="nav d-block">
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Full Height Content</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Page with Mega Menu</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Page with Light Sidebar</a></li>
										<li><a href="javascript:;" class="text-ellipsis"><i class="fa fa-angle-right fa-fw fa-lg text-inverse"></i> Page with Large Sidebar</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-4">
							<h4 class="dropdown-header">Paragraph</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero purus, fermentum at libero convallis, auctor dignissim mauris. Nunc laoreet pellentesque turpis sodales ornare. Nunc vestibulum nunc lorem, at sodales velit malesuada congue. Nam est tortor, tincidunt sit amet eros vitae, aliquam finibus mauris.
							</p>
							<p>
								Fusce ac ligula laoreet ante dapibus mattis. Nam auctor vulputate aliquam. Suspendisse efficitur, felis sed elementum eleifend, ipsum tellus sodales nisi, ut condimentum nisi sem in nibh. Phasellus suscipit vulputate purus at venenatis. Quisque luctus tincidunt tempor.
							</p>
						</div>
					</div>
				</b-dropdown>
			</li>
			<li>
				<a href="javascript:;">
					<i class="fa fa-gem fa-fw"></i> Client
				</a>
			</li>
			<li class="dropdown">
				<b-dropdown variant="link">
					<template slot="button-content">
						<i class="fa fa-database fa-fw"></i> New <b class="caret"></b>
					</template>
					<b-dropdown-item href="#">Action</b-dropdown-item>
					<b-dropdown-item href="#">Another action</b-dropdown-item>
					<b-dropdown-item href="#">Something else here...</b-dropdown-item>
					<b-dropdown-divider></b-dropdown-divider>
					<b-dropdown-item href="#">Separated link</b-dropdown-item>
					<b-dropdown-divider></b-dropdown-divider>
					<b-dropdown-item href="#">One more separated link</b-dropdown-item>
				</b-dropdown>
			</li>
		</ul>
	</div>
	<!-- end navbar-collapse -->
</template>

<script>
import PageOptions from '../../config/PageOptions.vue'

export default {
  name: 'HeaderMegaMenu',
  data() {
		return {
			pageOptions: PageOptions
		}
  }
}
</script>
