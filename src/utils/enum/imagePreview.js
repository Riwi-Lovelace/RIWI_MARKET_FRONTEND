
export function previewImage(input, imageContainer) {
    const image = document.querySelector('.pictureProduct .image');
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            image.innerHTML = '';
            const img = document.createElement('img');
            img.src = e.target.result;
            image.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}
