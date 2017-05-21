var ScratchBlocks = require("scratch-blocks");

window.onload = function() {

    var options = {
        readOnly: true,
        css: true,
        media: './media/',
        rtl: false,
        scrollbars: false,
        sounds: true,
        oneBasedIndex: true
    };

    var div = document.createElement("DIV");
    div.id = "ScratchBlocksWorkspace";
    document.body.appendChild(div);
    div.style.visibility = "hidden";
    div.style.position = "absolute";

    /* Inject your workspace */
    var workspace = ScratchBlocks.inject("ScratchBlocksWorkspace", options);

    window.createScratchBlockSVG = function (blockXML) {
        if (blockXML.tagName.toUpperCase() === "XML") {
            ScratchBlocks.Xml.domToWorkspace(blockXML, workspace);
            var draggables = document.getElementsByClassName("blocklyBlockCanvas");
            if (draggables.length > 0) {
                workspace.cleanUp();
                var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
                svg.setAttribute("class", "scratchblocks");
                svg.setAttribute("height", draggables[0].getBoundingClientRect().height);
                svg.setAttribute("width", draggables[0].getBoundingClientRect().width);
                svg.setAttribute("viewBox", draggables[0].getBBox().x + " " + draggables[0].getBBox().y + " " + draggables[0].getBBox().width + " " + draggables[0].getBBox().height);
                svg.appendChild(draggables[0].cloneNode(true));
                blockXML.parentElement.replaceChild(svg, blockXML);
            }
            workspace.clear();
        }
    };

    var blocks = document.getElementsByClassName("scratchblocks");
    for (i = 0; i < blocks.length; i++) {
        window.createScratchBlockSVG(blocks[i]);
    }

}
