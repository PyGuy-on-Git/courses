const chapters = document.getElementsByClassName("chapters")

for (let i = 0; i < chapters.length; i++) {
    chapters[i].addEventListener("click", function() { 

        // Scroll to title functionality

        let height = parseFloat(chapters[i].getAttribute("data-scroll"))
        window.scrollTo({top: height, behavior: 'smooth'})

        // Show sub-chapters functionality
        
    })
}