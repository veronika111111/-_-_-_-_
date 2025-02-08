<script>
    import About from '$lib/images/about.svg';
    import {goto} from "$app/navigation";
    import {fetchBlogs} from "$lib/api";

    let blogs = $state([]);


    fetchBlogs().then(res => {
        blogs = res;
    });
</script>
<div class="container mx-auto mt-8">
    <h2 class="mb-4">Статьи</h2>
    <div class="flex flex-row flex-wrap gap-3">
        {#each blogs as blog}
            <div onclick={() => goto(`/blog/${blog.id}`)} class="flex flex-col border-2 border-white px-4 py-2 rounded  max-w-[400px]">
                <h3 class="text-left">
                    {blog.heading}
                </h3>
                <p class="text-xs mb-4">
                    {blog.description}
                </p>

                <span class="text-right underline underline-white p-1">
                    Перейти
                </span>
            </div>
        {/each}
    </div>
</div>
