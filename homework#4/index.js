var scanDOM = function() {
    var container = document,
        nodes = container.querySelectorAll('*'),
        n,
        walk = container.createTreeWalker(container,NodeFilter.SHOW_TEXT,null,false),
        tagsCount = {},
        classCount = {},
        textCount = [],
        tagName = '',
        className = '';

    for (item of nodes) {

        tagName = item.tagName;
        className = item.className;

        if (tagsCount.hasOwnProperty(tagName)) {

            tagsCount[tagName] += 1;

        } else {

            tagsCount[tagName] = 1;

        }

        if (classCount.hasOwnProperty(className)) {

            classCount[className] += 1;

        } else {

            if (className !== '') {

                classCount[className] = 1;

            }

        }

    }

    while(n = walk.nextNode()) {

        textCount.push(n);

    }

    // Вывод тэгов
    for (var key in tagsCount) {

        console.log(`Тэгов ${key.toLowerCase()}: ${tagsCount[key]}`);

    }

    // Вывод классов
    for (var key in classCount) {

        console.log(`Элементов с классом ${key.toLowerCase()}: ${classCount[key]}`);

    }

    // Вывод текстовых узлов
    console.log(`Текстовых узлов: ${textCount.length}`);
};

module.exports = scanDOM;