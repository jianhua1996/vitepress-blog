<template>
	<div
		class="image-builder"
		style="width: 100%; display: flex; flex-wrap: wrap"
		:style="{
			justifyContent: source.length > 1 && size === 'small' ? 'space-between' : 'initial'
		}"
	>
		<img
			v-for="item in source"
			:src="withBase(`/${item}`)"
			alt="image"
			style="object-fit: contain"
			:style="style[size]"
		/>
	</div>
</template>

<script lang="ts" setup>
import { ref, defineProps, withDefaults } from 'vue'
import { withBase } from 'vitepress'

type Size = 'large' | 'medium' | 'small'

interface Props {
	source: string[]
	size: Size
}

const props = withDefaults(defineProps<Props>(), {
	size: 'medium'
})

const style = ref({
	large: {
		width: '100%'
	},
	medium: {
		width: 'calc(100% / 3 * 2)'
	},
	small: {
		width: 'calc(100% / 3)'
	}
})
</script>

<style scoped></style>
