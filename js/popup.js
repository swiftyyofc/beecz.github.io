// Event listener for the popup closure

document.addEventListener('onPopupClose', function(e) {
    console.log('Creativa Popup closed ID: ' + e.detail);
});

function popup1() {
    CreativaPopup.create('Feel free to DM me &#10084', 'Discord');
}

function popup2() {
    CreativaPopup.create('This is the text of the popup.', 'Title', 'info');
}

function popup3() {
    CreativaPopup.create('This is the text of the popup.', 'Title', 'fruit.png');
}

function popup4() {
    CreativaPopup.create('This is the text of the popup.', 'Title', 'success', {
        image: 'image.jpg'
    });
}

function popup5() {
    CreativaPopup.create('You can\'t close this popup.', 'Title', '', {
        isBlocked: true
    });
}

function popup6() {
    CreativaPopup.create('', '', '', {
        content: '<i>This is <u>HTML</u> custom content.</i>'
    });
}

function popup7() {
    CreativaPopup.create('', '', '', {
        content: 'another-page.html',
        isPage: true
    });
}

function popup8() {
    CreativaPopup.create('This is the text of the popup.', 'Title', 'info', {
        width: '400px',
        height: '400px'
    });
}

function popup9() {
    CreativaPopup.create('This is the text of the popup.', 'Title', 'info', {
        openAnimation: 'card-left',
        closeAnimation: 'card-right'
    });
}

function popup10() {
    CreativaPopup.create('This is the text of the popup.', 'Title', '', {
        position: 'top',
        openAnimation: 'bubble',
        closeAnimation: 'bubble'
    });
}

function popup11() {
    CreativaPopup.create('First popup.', 'Title', '', {
        closeAnimation: 'bubble'
    });
    CreativaPopup.create('Second popup.', 'Title', '', {
        closeAnimation: 'card-left'
    });
    CreativaPopup.create('Third popup.', 'Title', '', {
        closeAnimation: 'card-right'
    });
}

function popup12() {
    CreativaPopup.create('This popup has a different background color.', 'Title', '', {
        bgColor: '#ff0000'
    });
}

function popup13() {
    CreativaPopup.create('Feel free to DM me <font class="contactding" onclick="allahm109kd(); allahm109kd2();" color="#FF0000">ThisishuskY#3603</font> &#10084<br> <font style="color: #696969; font-size: smaller;"> or join my discord server <a href="https://discord.gg/senexcheats" style="color: #ADD8E6;">https://discord.gg/senexcheats</a> </font>', 'Discord', '', {
        titleColor: '#6ffcff',
        textColor: '#b0b0b0'
    });

}

function allahm109kd() {
    navigator.clipboard.writeText("BeeCZ");
    setTimeout(function() {
        alert("Discord username was copied to the clipboard");
    }, 50);
}

function allahm109kd1() {
    navigator.clipboard.writeText("sukamprdele");
    setTimeout(function() {
        alert("Discord username was copied to the clipboard");
    }, 50);
}

function popup132() {
    CreativaPopup.create('Close me :)', '', '', {
        titleColor: '#b0b0b0',
        textColor: '#b0b0b0',
    });
}

function popup14() {
    CreativaPopup.create('This popup has a custom border radius.', 'Title', '', {
        borderRadius: '2px'
    });
}

function popup15() {
    CreativaPopup.create('This popup has a custom font.', 'Title', '', {
        fontFamily: 'Times New Roman'
    });
}

function popup16() {
    CreativaPopup.create('This popup has no close button.', 'Title', '', {
        closeButton: false
    });
}

function popup17() {
    CreativaPopup.create('This popup has no background.', 'Title', '', {
        background: false
    });
}

function popup18() {
    CreativaPopup.create('This popup will close after 3 seconds.', 'Title', '', {
        timer: 3,
        closeAnimation: 'card-right'
    });
}

function popup19() {
    CreativaPopup.create('This popup has a custom speed animation.', 'Title', '', {
        openAnimation: 'card-top',
        closeAnimation: 'card-bottom',
        animationSpeed: 400
    });
}

function popup20() {
    CreativaPopup.create('This is a popup without the box.', 'Title', '', {
        box: false,
        titleColor: '#fff',
        textColor: '#fff'
    });
}