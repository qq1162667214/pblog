<template>
	<div>
		<!-- begin breadcrumb -->
		<ol class="breadcrumb pull-right">
			<li class="breadcrumb-item active"><a href="javascript:;">Home</a></li>
		</ol>
		<!-- end breadcrumb -->
		<!-- begin page-header -->
		<h1 class="page-header">Home <small>header small text goes here...</small></h1>
		<!-- end page-header -->
		<panel title="Panel title here">
			<p>
				{{msg}}
			</p>
		</panel>
	</div>
</template>
<script>
	// @ is an alias to /src
	//import HelloWorld from '@/components/HelloWorld.vue'
	import {testDjango} from './apis/test'
	export default {
		name: 'home',
		data() {
			return {
				msg: '后台服务尚未运行'
			}
		},
		methods: {
			updateMsg(data) {
					this.msg = data
			}
		},
		mounted() {
			window.console.log('请求django后台')
			testDjango(this.updateMsg)
		}
	}
</script>