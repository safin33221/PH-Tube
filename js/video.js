function getTimeString(time) {
    //get hours 
    const hours = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    const second = remainingSecond;
    return `${hours} hour ${minute} minute ${second} second`
}

//Create load vide 


const loadVideo = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => dispalyVideo(data.videos))
        .then(error => console.error(error))
}
const dispalyVideo = (videos) => {

    const videoContainer = document.getElementById('video-cotainer');
    videoContainer.innerHTML = ``


    if (videos.length == 0) {
        videoContainer.classList.remove("grid")
        videoContainer.innerHTML = `
        <div class="min-h-600 w-full flex flex-col gap-5 justify-center items-center">
            <img src="./assets/Icon.png" alt="">
            <h2 class="text-center text-xl font-bold">No content here in this categroy.</h2>

        </div>
        `
    }else{
        videoContainer.classList.add("grid")
    }


    videos.forEach((video) => {
        console.log(video);
        const card = document.createElement('div');
        card.classList = "card card-compact"
        card.innerHTML = `
        <figure class="h-[200px] relative">
            <img class="h-full w-full object-cover"
            src=${video.thumbnail}
            alt="Shoes" />
            ${video.others.posted_date?.length == 0 ? "" : `<span class="absolute right-2 bottom-2 bg-black rounded p-1 text-white text-xs" > ${getTimeString(video.others.posted_date)}</span>`}
        </figure>
        <div class="px-0 py-2">
            <div class="flex gap-5">
                <div> <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} /> </div>
                <div class="">
                    <h2 class="font-bold">${video.title}</h2>
                    <div class="flex items-center gap-2">
                        <p class="text-gray-400">${video.authors[0].profile_name}</p>
                        ${video.authors[0].verified === true ? '<img class="w-5 h-5" src ="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>' : ''}                    
                    </div >
    <p></p>
                
                </div >
            </div >
        </div >
    `;
        videoContainer.append(card);
    });
}


loadVideo()