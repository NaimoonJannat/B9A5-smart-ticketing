function scrollToMainSection(){
    const mainSection = document.getElementById('mainId');

        // Scroll options for smooth behavior
        const scrollOptions = {
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        };

        // Scroll to the main section
        mainSection.scrollIntoView(scrollOptions);
}