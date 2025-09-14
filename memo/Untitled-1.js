// @ts-check

/**
 * 画像のモーダルプレビューを実装
 * @returns {void}
 */
function generateImagePreview() {
    /**
     * @type {NodeListOf<HTMLImageElement>}
     */
    const images = document.querySelectorAll('.contents img');

    const insertDialogElement = () => {
        const dialog = document.createElement('dialog');
        const menu = document.createElement('menu');
        const closeLi = document.createElement('li');
        const newTabLi = document.createElement('li');
        const closeButton = document.createElement('button');
        const newTabButton = document.createElement('button');
        const previewImage = document.createElement('img');

        closeButton.textContent = '閉じる';
        closeButton.setAttribute('autofocus', '');
        closeButton.addEventListener('click', () => {
            dialog.close();
        });
        closeLi.appendChild(closeButton);

        newTabButton.textContent = '画像を新しいタブで開く';
        newTabButton.addEventListener('click', () => {
            window.open(previewImage.src);
        });
        newTabLi.appendChild(newTabButton);
        menu.append(closeLi, newTabLi);
        dialog.append(menu, previewImage);
        document.body.appendChild(dialog);
        return dialog;
    };

    const dialog = insertDialogElement();
    for (const image of images) {
        image.addEventListener('click', () => {
            const { src, alt } = image;
            const targetImage = dialog.querySelector('img');
            if (!targetImage) return;
            targetImage.src = src;
            targetImage.alt = alt;

            dialog.showModal();
        });
    }
}
generateImagePreview();
