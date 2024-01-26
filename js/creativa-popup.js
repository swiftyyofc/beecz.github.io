class CreativaPopup {

    static version = '0.2';
    static cdn = 'https://creativajs.altervista.org/popup/0.2/';

    static totalPopups = 0;
    static animationSpeed = 150;

    static loadContent(popupId, url) {
        let target = document.getElementById('ct-popup-other-content-' + popupId);
        let request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                let resp = request.responseText;
                target.innerHTML = resp;
            }
        }
        request.send();
    }

    static closeAll() {
        for (let i = CreativaPopup.totalPopups; i > 0; i--) {
            if (!document.getElementById('ct-popup-box-' + i)) {
                console.warn(`The popup with ID (${i}) does not exist.`);
            } else {
                CreativaPopup.close(i);
            }
        }
    }

    static close(popupId) {
        let selectedPopupBg = document.getElementById('ct-popup-bg-' + popupId);
        let selectedPopupBox = document.getElementById('ct-popup-box-' + popupId);

        // Check for blocked popup
        let isSelectedPopupBlocked = false;
        if (selectedPopupBg && (selectedPopupBg.getAttribute('isBlocked') == 'true')) {
            isSelectedPopupBlocked = true;
        }

        if (!isSelectedPopupBlocked) {

            if (!selectedPopupBg) {
                console.warn('Creativa Popup: ID not found: ' + popupId);
                return;
            }

            selectedPopupBg.classList.add('fade-ct-popup-animation-close');
            setTimeout(function() {
                selectedPopupBg.remove();
            }, CreativaPopup.animationSpeed);

            selectedPopupBox.classList.remove(selectedPopupBox.getAttribute('openAnimation') + '-ct-popup-animation-open');
            selectedPopupBox.classList.add(selectedPopupBox.getAttribute('closeAnimation') + '-ct-popup-animation-close');

            setTimeout(function() {
                const event = new CustomEvent('onPopupClose', {
                    detail: parseInt(CreativaPopup.totalPopups)
                });
                document.dispatchEvent(event);
                selectedPopupBox.remove();
                CreativaPopup.totalPopups--;
            }, CreativaPopup.animationSpeed);
        }
    }

    static timerClose(popupId, timerTime) {
        setTimeout(function() {
            CreativaPopup.close(popupId);
        }, timerTime * 1000);
    }

    static create(text, title, icon, inputOptions) {

        // Instance and popup ID
        CreativaPopup.totalPopups++;
        let popupId = CreativaPopup.totalPopups;

        // Popup background creation
        var divBackground = document.createElement('div');
        divBackground.className = 'ct-popup-background';
        divBackground.id = 'ct-popup-bg-' + popupId;
        divBackground.onclick = function() {
            CreativaPopup.timerClose(popupId, options);
        };

        // Popup box creation
        var divBox = document.createElement('div');
        divBox.className = 'ct-popup-box';
        divBox.id = 'ct-popup-box-' + popupId;
        divBox.innerHTML = `
            <span class="ct-popup-image" id="ct-popup-image-` + popupId + `"></span>
            <div class="ct-popup-content" id="ct-popup-content-` + popupId + `">
                <span class="ct-popup-icon" id="ct-popup-icon-` + popupId + `"></span>
                <h1 class="ct-popup-title" id="ct-popup-title-` + popupId + `"></h1>
                <p class="ct-popup-text" id="ct-popup-text-` + popupId + `"></p>
                <div class="ct-popup-other-content" id="ct-popup-other-content-` + popupId + `"></div>
            </div>
            <div class="ct-popup-close-icon" id="ct-popup-close-icon-` + popupId + `" onclick="CreativaPopup.close(` + popupId + `)">
                <div class="ct-popup-close-icon-line-first">
                    <div class="ct-popup-close-icon-line-second"></div>
                </div>
            </div>
        `;

        // Append popup to page
        document.body.appendChild(divBackground);
        document.body.appendChild(divBox);

        let options = {
            image: '',
            content: null,
            isPage: false,
            isBlocked: false,
            width: null,
            height: null,
            openAnimation: 'card-bottom',
            closeAnimation: 'card-top',
            animationType: '',
            animationSpeed: 500,
            position: 'center',
            bgColor: '#0a0a0a',
            titleColor: '#404040',
            textColor: '#606060',
            borderRadius: '8px',
            fontFamily: 'sans-serif',
            boxShadow: '8px -8px 8px 0px rgb(0 0 0 / 22%)',
            closeButton: true,
            background: true,
            box: true,
            timer: false,
        }

        // Popup components
        let popupBg = document.getElementById('ct-popup-bg-' + popupId);
        let popupBox = document.getElementById('ct-popup-box-' + popupId);
        let popupImage = document.getElementById('ct-popup-image-' + popupId);
        let popupIcon = document.getElementById('ct-popup-icon-' + popupId);
        let popupTitle = document.getElementById('ct-popup-title-' + popupId);
        let popupText = document.getElementById('ct-popup-text-' + popupId);
        let popupCloseIcon = document.getElementById('ct-popup-close-icon-' + popupId);
        let popupOtherContent = document.getElementById('ct-popup-other-content-' + popupId);

        // Input option values
        if (inputOptions) {
            Object.keys(inputOptions).forEach(function(key) {
                if (key === 'animationSpeed') CreativaPopup.animationSpeed = inputOptions[key];
                if (key in options) options[key] = inputOptions[key];
            });
        }

        // Box hide
        if (options.box === false) {
            options.bgColor = 'rgba(0, 0, 0, 0)';
            options.boxShadow = false;
        }

        // Box options
        Object.keys(options).forEach(function(key) {
            let backgroundOptions = ['isBlocked'];
            if (backgroundOptions.includes(key)) {
                popupBg.setAttribute(key, options[key]);
            } else {
                popupBox.setAttribute(key, options[key]);
            }
        });

        // Timer close
        if (options.timer) {
            CreativaPopup.timerClose(popupId, options.timer);
        }

        // Close button
        if (popupBox.getAttribute('closeButton') == 'false' || popupBg.getAttribute('isBlocked') == 'true') {
            popupCloseIcon.setAttribute('style', 'display: none;');
        }

        // No background
        if (popupBox.getAttribute('background') === 'false') {
            popupBg.setAttribute('style', 'display: none;');
        }

        // Text and title
        if (text) popupText.innerHTML = text;
        if (title) popupTitle.innerHTML = title;
        if (!title) popupTitle.remove();

        // Icon
        popupIcon.style.display = 'none';
        if (icon) {
            let iconUrl = '';
            switch (icon) {
                case 'error':
                    iconUrl = this.cdn + 'icons/error.png';
                    break;
                case 'success':
                    iconUrl = this.cdn + 'icons/success.png';
                    break;
                case 'info':
                    iconUrl = this.cdn + 'icons/info.png';
                    break;
                default:
                    iconUrl = icon;
            }
            popupIcon.style.backgroundImage = 'url(' + iconUrl + ')';
            popupIcon.style.display = 'block';
        }

        // Image
        popupImage.style.display = 'none';
        if (options.image) {
            popupImage.style.backgroundImage = 'url(' + options.image + ')';
            popupImage.style.display = 'block';
            popupImage.style.borderTopLeftRadius = options.borderRadius;
            popupImage.style.borderTopRightRadius = options.borderRadius;
        }

        // Other content
        if (!popupOtherContent) {
            popupOtherContent.style.marginTop = '0';
            popupOtherContent.style.innerHtml = '';
        } else {
            if (options.content) {
                if (!options.isPage) {
                    popupOtherContent.innerHTML = options.content;
                } else {
                    if (window.jQuery) {
                        $(popupOtherContent).load(options.content);
                    } else {
                        CreativaPopup.loadContent(popupId, options.content);
                    }
                }
                if (text || title) {
                    popupOtherContent.style.marginTop = '10px';
                }
            }
        }

        // z-index
        let zIndexBackground = (999999 + popupId + 1).toString();
        let zIndexBox = (999999 + popupId + 2).toString();
        popupBg.style.zIndex = zIndexBackground;

        // Background animation
        popupBg.style.animationDuration = parseInt(popupBox.getAttribute('animationSpeed')) / 1000 + 's';
        popupBg.classList.add('ct-popup-show');
        popupBg.classList.add('fade-ct-popup-animation-open');

        // Popup position
        let positionBottom = window.innerHeight - 100;
        let popupBoxPosition = '';
        if (options.position) {
            switch (options.position) {
                case 'top':
                    popupBoxPosition = 'top: 100px';
                    break;
                case 'bottom':
                    popupBoxPosition = 'top: ' + positionBottom + 'px';
                    break;
            }
        }

        // Box style
        let popupBoxStyle = `
            background-color: ${popupBox.getAttribute('bgColor')} !important;
            z-index: ${zIndexBox} !important;
            box-shadow: ${popupBox.getAttribute('boxShadow')} !important;
            ${popupBoxPosition} !important;
            border-radius: ${popupBox.getAttribute('borderRadius')} !important;
            font-family: ${popupBox.getAttribute('fontFamily')} !important;
            animation-timing-function: ${popupBox.getAttribute('animationType')} !important;
            animation-duration: ${popupBox.getAttribute('animationSpeed') / 1000}s !important;
        `;

        // Other box style
        if (options.width) popupBoxStyle += ' width: ' + options.width + ' !important;';
        if (options.height) popupBoxStyle += ' height: ' + options.height + ' !important;';

        // Box animation
        popupBox.classList.add('ct-popup-show');
        popupBox.classList.add(popupBox.getAttribute('openAnimation') + '-ct-popup-animation-open');

        // Box style application
        popupBox.setAttribute('style', popupBoxStyle);
        popupTitle.setAttribute('style', 'color: ' + popupBox.getAttribute('titleColor') + ' !important');
        popupText.setAttribute('style', 'color: ' + popupBox.getAttribute('textColor') + ' !important');

        // Box max height
        popupOtherContent.style.maxHeight = (window.innerHeight - 170) + 'px';
        window.addEventListener('resize', function() {
            popupOtherContent.style.maxHeight = (window.innerHeight - 170) + 'px';
        });

    }

}

// CSS load
window.onload = function() {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'creativa-popup.css';
    link.media = 'all';
    head.appendChild(link);
}

// Esc button to close
document.onkeydown = function(evt) {
    if (evt.key && evt.key.toString().toLowerCase() === 'escape') {
        if (CreativaPopup.totalPopups > 0) {
            CreativaPopup.close(CreativaPopup.totalPopups);
        }
    }
}

// Resize
window.onresize = function(event) {
    let allPopups = this.document.getElementsByClassName('ct-popup-box');
    for (let i = 0; i < allPopups.length; i++) {
        let element = document.getElementById(allPopups[i].id);
        if (element.getAttribute('position') == 'bottom') {
            positionBottom = window.innerHeight - 100;
            element.style.top = positionBottom + 'px';
        }
    }
}