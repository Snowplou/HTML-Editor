function updateCode() {

    try {
        document.getElementById("htmlRunner").innerHTML = document.getElementById("htmlInput").value
        eval(document.getElementById("jsInput").value)
        
        let cssOriginal = document.getElementById("cssInput").value
        let cssId = cssOriginal.split("#")
        for (let value in cssId) {
            cssId[value] = cssId[value].split("{")
            for (let value0 in cssId[value]) {
                cssId[value][value0] = cssId[value][value0].split("}")
            }
        }

        for (let i = 1; i < cssId.length; i++) {
            let cssIdStyles = cssId[i][1][0].split("\n")
            for (let style in cssIdStyles) {
                cssIdStyles[style] = cssIdStyles[style].split(":")
            }
            for (let style in cssIdStyles) {
                if (cssIdStyles[style].length == 2) {
                    cssIdStyles[style][1] = cssIdStyles[style][1].split(";")[0]
                    if(document.getElementById(cssId[i][0][0]) != null) document.getElementById(cssId[i][0][0]).style[cssIdStyles[style][0]] = cssIdStyles[style][1]
                }
            }
        }

        let cssClass = cssOriginal.split(".")
        for (let value in cssClass) {
            cssClass[value] = cssClass[value].split("{")
            for (let value0 in cssClass[value]) {
                cssClass[value][value0] = cssClass[value][value0].split("}")
            }
        }

        for (let i = 1; i < cssClass.length; i++) {
            let cssClassStyles = cssClass[i][1][0].split("\n")
            for (let style in cssClassStyles) {
                cssClassStyles[style] = cssClassStyles[style].split(":")
            }
            for (let style in cssClassStyles) {
                if (cssClassStyles[style].length == 2) {
                    cssClassStyles[style][1] = cssClassStyles[style][1].split(";")[0]
                    let classGroup = document.getElementsByClassName(cssClass[i][0][0])
                    for(let i = 0; i < classGroup.length; i++){
                        classGroup[i].style[cssClassStyles[style][0]] = cssClassStyles[style][1]
                    }
                }
            }
        }

    } catch (err) {
        let para = document.createElement("p");
        para.innerHTML = err;

        document.getElementById("htmlRunner").innerHTML = "";
        document.getElementById("htmlRunner").appendChild(para)

    }

}