<script>
    let isHidden = true;

    function toggleMenu() {
        isHidden = !isHidden;
    }
</script>

<div class="mr-5">
    <button class="pb-0.5 text-teal-200 text-xl hover:text-white" on:click={toggleMenu}>
        <i class="fa-solid fa-calendar" />
    </button>
</div>

<div class="absolute h-screen w-screen overflow-hidden left-0 right-0 top-0 bottom-0" hidden={isHidden} on:click={toggleMenu}>
    <div class="flex h-full w-full place-content-center place-items-center bg-black/25">
        <iframe src="https://calendly.com/jared-amen" width="25%" height="950" class="drop-shadow-xl rounded-lg" scrolling="no" frameborder="0" hidden={isHidden} />
    </div>
</div>