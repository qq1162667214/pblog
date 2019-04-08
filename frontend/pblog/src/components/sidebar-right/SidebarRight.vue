<template>
	<div>
		<!-- begin #sidebar-right -->
		<div id="sidebar-right" class="sidebar sidebar-right">
			<!-- begin sidebar scrollbar -->
			<div data-scrollbar="true" data-height="100%">
				<!-- begin sidebar user -->
				<ul class="nav m-t-10">
					<li class="nav-widget">
						<p>Accordion</p>
						<!-- begin #accordion -->
						<div id="accordion" class="card-accordion">
							<!-- begin b-card -->
							<b-card no-body>
								<b-card-header header-tag="header" class="card-header bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.accordion1>
									<i class="fa fa-plus-circle pull-right text-success"></i> 
									Accordion #1
								</b-card-header>
								<b-collapse id="accordion1" visible accordion="my-accordion">
									<b-card-body>
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
									</b-card-body>
								</b-collapse>
							</b-card>
							<!-- end b-card -->
							<!-- begin b-card -->
							<b-card no-body>
								<b-card-header header-tag="header" class="card-header bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.accordion2>
									<i class="fa fa-plus-circle pull-right text-success"></i> 
									Accordion #2
								</b-card-header>
								<b-collapse id="accordion2" accordion="my-accordion">
									<b-card-body>
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
									</b-card-body>
								</b-collapse>
							</b-card>
							<!-- end b-card -->
							<!-- begin b-card -->
							<b-card no-body>
								<b-card-header header-tag="header" class="card-header bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.accordion3>
									<i class="fa fa-plus-circle pull-right text-success"></i> 
									Accordion #3
								</b-card-header>
								<b-collapse id="accordion3" accordion="my-accordion">
									<b-card-body>
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
									</b-card-body>
								</b-collapse>
							</b-card>
							<!-- end b-card -->
							<!-- begin b-card -->
							<b-card no-body>
								<b-card-header header-tag="header" class="card-header bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.accordion4>
									<i class="fa fa-plus-circle pull-right text-success"></i> 
									Accordion #4
								</b-card-header>
								<b-collapse id="accordion4" accordion="my-accordion">
									<b-card-body>
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
									</b-card-body>
								</b-collapse>
							</b-card>
							<!-- end b-card -->
							<!-- begin b-card -->
							<b-card no-body>
								<b-card-header header-tag="header" class="card-header bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.accordion5>
									<i class="fa fa-plus-circle pull-right text-success"></i> 
									Accordion #5
								</b-card-header>
								<b-collapse id="accordion5" accordion="my-accordion">
									<b-card-body>
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
									</b-card-body>
								</b-collapse>
							</b-card>
							<!-- end b-card -->
							<!-- begin b-card -->
							<b-card no-body>
								<b-card-header header-tag="header" class="card-header bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.accordion6>
									<i class="fa fa-plus-circle pull-right text-success"></i> 
									Accordion #6
								</b-card-header>
								<b-collapse id="accordion6" accordion="my-accordion">
									<b-card-body>
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
									</b-card-body>
								</b-collapse>
							</b-card>
							<!-- end b-card -->
							<!-- begin b-card -->
							<b-card no-body>
								<b-card-header header-tag="header" class="card-header bg-black-darker b-0 text-white pointer-cursor" v-b-toggle.accordion7>
									<i class="fa fa-plus-circle pull-right text-success"></i> 
									Accordion #7
								</b-card-header>
								<b-collapse id="accordion7" accordion="my-accordion">
									<b-card-body>
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
									</b-card-body>
								</b-collapse>
							</b-card>
							<!-- end b-card -->
						</div>
						<!-- end #accordion -->
					</li>
				</ul>
				<!-- end sidebar user -->
			</div>
			<!-- end sidebar scrollbar -->
		</div>
		<div class="sidebar-bg sidebar-right"></div>
		<!-- end #sidebar-right -->
	</div>
</template>

<script>
import PageOptions from '../../config/PageOptions.vue'

export default {
  name: 'SidebarRight',
  data() {
		return {
			pageOptions: PageOptions
		}
  }
}
</script>
