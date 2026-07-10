function sunday() {
    return `<svg viewbox="-50 -50 100 100">
        <circle class="sun" cx="0" cy="0" r="22"></circle>
    </svg>`;
}

function sunCloudy() {
    return `<svg viewbox="-50 -50 100 100">
        <circle class="sun" cx="0" cy="0" r="22"></circle>
        <circle class="cloud" cx="-30" cy="30" r="20"></circle>
        <circle class="cloud" cx="-15" cy="30" r="20"></circle>
        <circle class="cloud" cx="0" cy="30" r="20"></circle>
        <circle class="cloud" cx="-25" cy="10" r="15"></circle>
        <circle class="cloud" cx="-7" cy="15" r="15"></circle>
    </svg>`;
}

function cloudy() {
    return `<svg viewbox="-63 -40 100 100">
        <circle class="cloud" cx="-30" cy="30" r="20"></circle>
        <circle class="cloud" cx="-15" cy="30" r="20"></circle>
        <circle class="cloud" cx="0" cy="30" r="20"></circle>
        <circle class="cloud" cx="-25" cy="10" r="15"></circle>
        <circle class="cloud" cx="-7" cy="15" r="15"></circle>
    </svg>`;
}

function rainy() {
    return `<svg viewbox="-63 -40 100 100">
        <line
            class="rain"
            x1="-25"
            y1="15"
            x2="-25"
            y2="35"
        ></line>
        <line
            class="rain"
            x1="-14"
            y1="5"
            x2="-14"
            y2="25"
        ></line>
        <line class="rain" x1="-5" y1="20" x2="-5" y2="45"></line>
        <circle class="cloud" cx="-30" cy="30" r="20"></circle>
        <circle class="cloud" cx="-15" cy="30" r="20"></circle>
        <circle class="cloud" cx="0" cy="30" r="20"></circle>
        <circle class="cloud" cx="-25" cy="10" r="15"></circle>
        <circle class="cloud" cx="-7" cy="15" r="15"></circle>
    </svg>`;
}

export function getWeatherSVG(value) {
    let html = "";
    if(value <= 1) {
        html = sunday();
    }
    else if(value <= 3) {
        html = sunCloudy();
    }
    else if(value <= 7) {
        html = cloudy();
    }
    else if(value <= 22) {
        html = rainy();
    }
    const parser = new DOMParser();
    const wrapper = parser.parseFromString(html, "text/html");
    return wrapper.querySelector("svg");
}