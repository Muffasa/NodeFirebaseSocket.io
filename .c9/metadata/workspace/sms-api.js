{"changed":false,"filter":false,"title":"sms-api.js","tooltip":"/sms-api.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":3,"column":66},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":267},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":37},"action":"insert","lines":["var request = require('request');"],"id":268}],[{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["/"],"id":269}],[{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"insert","lines":["*"],"id":270}],[{"start":{"row":24,"column":169},"end":{"row":24,"column":170},"action":"insert","lines":["*"],"id":271}],[{"start":{"row":24,"column":170},"end":{"row":24,"column":171},"action":"insert","lines":["/"],"id":272}],[{"start":{"row":25,"column":8},"end":{"row":25,"column":25},"action":"remove","lines":["return d.promise;"],"id":273}],[{"start":{"row":9,"column":61},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":274},{"start":{"row":10,"column":0},"end":{"row":10,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":10,"column":8},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":275},{"start":{"row":11,"column":0},"end":{"row":11,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":11,"column":8},"end":{"row":11,"column":25},"action":"insert","lines":["return d.promise;"],"id":276}],[{"start":{"row":10,"column":8},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":277},{"start":{"row":11,"column":0},"end":{"row":11,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":11,"column":8},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":278},{"start":{"row":12,"column":0},"end":{"row":12,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":12,"column":8},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":279},{"start":{"row":13,"column":0},"end":{"row":13,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":11,"column":8},"end":{"row":15,"column":2},"action":"insert","lines":["request('http://www.google.com', function (error, response, body) {","  if (!error && response.statusCode == 200) {","    console.log(body) // Show the HTML for the Google homepage.","  }","})"],"id":281}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "],"id":282},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "],"id":283},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["."],"id":284}],[{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"insert","lines":["g"],"id":285}],[{"start":{"row":11,"column":17},"end":{"row":11,"column":18},"action":"insert","lines":["e"],"id":286}],[{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":["t"],"id":287}],[{"start":{"row":11,"column":21},"end":{"row":11,"column":42},"action":"remove","lines":["http://www.google.com"],"id":288},{"start":{"row":11,"column":21},"end":{"row":11,"column":155},"action":"insert","lines":["https://rest.nexmo.com/sms/json?api_key=7be722e0&api_secret=e89df2c2&from=MoneyTunes&to=\"+fixedTo+\"&text=Your varification code: \"+cod"]}],[{"start":{"row":11,"column":155},"end":{"row":11,"column":156},"action":"insert","lines":["d"],"id":289}],[{"start":{"row":11,"column":155},"end":{"row":11,"column":156},"action":"remove","lines":["d"],"id":290}],[{"start":{"row":11,"column":155},"end":{"row":11,"column":156},"action":"insert","lines":["e"],"id":291}],[{"start":{"row":11,"column":156},"end":{"row":11,"column":157},"action":"remove","lines":["'"],"id":292}],[{"start":{"row":11,"column":109},"end":{"row":11,"column":110},"action":"remove","lines":["\""],"id":293}],[{"start":{"row":11,"column":109},"end":{"row":11,"column":110},"action":"insert","lines":["'"],"id":294}],[{"start":{"row":11,"column":119},"end":{"row":11,"column":120},"action":"remove","lines":["\""],"id":295}],[{"start":{"row":11,"column":119},"end":{"row":11,"column":120},"action":"insert","lines":["'"],"id":296}],[{"start":{"row":11,"column":150},"end":{"row":11,"column":151},"action":"remove","lines":["\""],"id":297}],[{"start":{"row":11,"column":150},"end":{"row":11,"column":151},"action":"insert","lines":["'"],"id":298}],[{"start":{"row":11,"column":157},"end":{"row":11,"column":158},"action":"remove","lines":[" "],"id":299},{"start":{"row":11,"column":157},"end":{"row":12,"column":0},"action":"insert","lines":["",""]},{"start":{"row":12,"column":0},"end":{"row":12,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":12,"column":42},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":300},{"start":{"row":13,"column":0},"end":{"row":13,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"insert","lines":["v"],"id":301}],[{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"insert","lines":["a"],"id":302}],[{"start":{"row":13,"column":14},"end":{"row":13,"column":15},"action":"insert","lines":["r"],"id":303}],[{"start":{"row":13,"column":15},"end":{"row":13,"column":16},"action":"insert","lines":[" "],"id":304}],[{"start":{"row":13,"column":16},"end":{"row":13,"column":17},"action":"insert","lines":["t"],"id":305}],[{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"insert","lines":["e"],"id":306}],[{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"insert","lines":["s"],"id":307}],[{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":["t"],"id":308}],[{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":[" "],"id":309}],[{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"insert","lines":["="],"id":310}],[{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"insert","lines":[" "],"id":311}],[{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"insert","lines":["b"],"id":312}],[{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"insert","lines":["o"],"id":313}],[{"start":{"row":13,"column":23},"end":{"row":13,"column":25},"action":"remove","lines":["bo"],"id":314},{"start":{"row":13,"column":23},"end":{"row":13,"column":27},"action":"insert","lines":["body"]}],[{"start":{"row":13,"column":27},"end":{"row":13,"column":28},"action":"insert","lines":[";"],"id":315}],[{"start":{"row":8,"column":26},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":316},{"start":{"row":9,"column":0},"end":{"row":9,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["i"],"id":317}],[{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["f"],"id":318}],[{"start":{"row":9,"column":10},"end":{"row":9,"column":12},"action":"insert","lines":["()"],"id":319}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["t"],"id":320}],[{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"insert","lines":["o"],"id":321}],[{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["<"],"id":322}],[{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["1"],"id":323}],[{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":["0"],"id":324}],[{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"remove","lines":["0"],"id":325}],[{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"remove","lines":["1"],"id":326}],[{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"remove","lines":["<"],"id":327}],[{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["."],"id":328}],[{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["t"],"id":329}],[{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"remove","lines":["t"],"id":330}],[{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["l"],"id":331}],[{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":["e"],"id":332}],[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["n"],"id":333}],[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"remove","lines":["n"],"id":334}],[{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"remove","lines":["e"],"id":335}],[{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"remove","lines":["l"],"id":336}],[{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["s"],"id":337}],[{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":["i"],"id":338}],[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["z"],"id":339}],[{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":["e"],"id":340}],[{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"remove","lines":["e"],"id":341}],[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"remove","lines":["z"],"id":342}],[{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"remove","lines":["i"],"id":343}],[{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"remove","lines":["s"],"id":344}],[{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["l"],"id":345}],[{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":["e"],"id":346}],[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["n"],"id":347}],[{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":["g"],"id":348}],[{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["h"],"id":349}],[{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":["t"],"id":350}],[{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"insert","lines":["<"],"id":351}],[{"start":{"row":9,"column":21},"end":{"row":9,"column":22},"action":"insert","lines":["1"],"id":352}],[{"start":{"row":9,"column":22},"end":{"row":9,"column":23},"action":"insert","lines":["0"],"id":353}],[{"start":{"row":9,"column":24},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":354},{"start":{"row":10,"column":0},"end":{"row":10,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["d"],"id":355}],[{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["."],"id":356}],[{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"insert","lines":["r"],"id":357}],[{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"insert","lines":["e"],"id":358}],[{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"insert","lines":["j"],"id":359}],[{"start":{"row":10,"column":13},"end":{"row":10,"column":14},"action":"insert","lines":["e"],"id":360}],[{"start":{"row":10,"column":10},"end":{"row":10,"column":14},"action":"remove","lines":["reje"],"id":361},{"start":{"row":10,"column":10},"end":{"row":10,"column":16},"action":"insert","lines":["reject"]}],[{"start":{"row":10,"column":16},"end":{"row":10,"column":18},"action":"insert","lines":["()"],"id":362}],[{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"insert","lines":[";"],"id":363}],[{"start":{"row":10,"column":19},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":364},{"start":{"row":11,"column":0},"end":{"row":11,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"remove","lines":["t"],"id":365}],[{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"remove","lines":["h"],"id":366}],[{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["t"],"id":367}],[{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":["h"],"id":368}]]},"ace":{"folds":[],"scrolltop":420,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":43,"column":5},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":21,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1437373784501}