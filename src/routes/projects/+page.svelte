<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<section id="projects" class="flex flex-col max-w-screen-lg mx-auto mt-20 p-4 w-full">
	<h1 class="h1 my-8">Projects</h1>
	<ul class="grid lg:grid-cols-2 grid-cols-1 gap-8 w-full">
		<li class="flex items-stretch">
			<ProjectCard
				title="Personal Website (2024)"
				description="My personal website, the very one you are at right now! Made using SvelteKit, Skeleton UI + Tailwind, and TypeScript."
				date="Dec 2023 - Present"
				gitHubLink="https://github.com/austinh-io/Personal-Website-2024"
				tags={['SvelteKit', 'Skeleton', 'Tailwind', 'TypeScript']}
				imageSource="./images/personal_website.png"
			/>
		</li>
		<li class="flex items-stretch">
			<ProjectCard
				title="React/TypeScript/Tailwind (RTT) WordGuess Game"
				description="This is another WordGuess game, this time made with React, TypeScript, and Tailwind."
				date="Dec 2023 - Jan 2024"
				gitHubLink="https://github.com/austinh-io/RTT-WordGuess"
				demoLink="https://projects.austinh.io/rtt-wordguess"
				tags={['React', 'Tailwind', 'TypeScript', 'Framer Motion']}
				imageSource="./images/rtt_wordguess.png"
			/>
		</li>
		<li class="flex items-stretch">
			<ProjectCard
				title="TypeScript E-Commerce Frontend"
				description="The frontend mockup of an e-commerce site. Made with just TypeScript, CSS/HTML, and Vite."
				date="Aug 2023 - Feb 2024"
				gitHubLink="https://github.com/austinh-io/ts-e-commerce-frontend"
				demoLink="https://projects.austinh.io/simple-ecom/"
				tags={['HTML', 'CSS', 'TypeScript']}
				imageSource="./images/simple_ecom.png"
			/>
		</li>
	</ul>
	<slot />
</section>
