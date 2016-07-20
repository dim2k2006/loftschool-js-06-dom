var deleteTextNodes = function(container) {
    var nodes = container.childNodes;

    for (item of nodes) {

        if (item.nodeType === 3) {

            container.removeChild(item);

        }

    }
};

var container = document.querySelector('.container');

deleteTextNodes(container);

// module.exports = deleteTextNodes;