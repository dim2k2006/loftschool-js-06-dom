var deleteTextNodes = function(container) {
    var type = container.nodeType,
        sibling = '',
        nodes = '';

    if (type === 3) {

        sibling = container.nextElementSibling;
        container.remove();
        if (sibling) {

            deleteTextNodes(sibling);

        }

    } else {

        nodes = container.childNodes;

        for (item of nodes) {

            deleteTextNodes(item);

        }

    }
};

module.exports = deleteTextNodes;