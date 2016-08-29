var app = angular.module('crosswordApp')
app.service('CrosswordService', CrosswordService);

function CrosswordService() {

  this.getCrosswordData = function(){

    var self = this;
    self.crosswordData = {
      "acrossmap": null,
      "admin": false,
      "answers": {
        "across": ["SCRAP", "MESH", "HARKS", "TSO", "TRAVELOGUE", "ARENA", "SHIP", "RADARANGER", "DAMECHEESE", "UZO", "MOTH", "BYEBYE", "INFER", "TENS", "THEATER", "DAYTONA", "HAS", "AREA", "SCENA", "ROM", "SENATEIDEA", "KEYED", "AURA", "ELUDE", "NES", "HEARPERLMAN", "RARE", "STD", "SERRA", "SOU", "MISDATE", "SHANANA", "AMPAS", "ONE", "SPRITEDECORPS", "REA", "NESTS", "STEEPLE", "METEORS", "HAR", "SARIS", "PAC", "UTAH", "ASSUMEDAMEN", "SAN", "ELITE", "BAAS", "ROGER", "INSIDEOPED", "SNL", "VAPOR", "BROS", "ORG", "ITEMONE", "EYEBOLT", "YAYS", "NADAL", "SAVEUS", "VAIN", "LEA", "THANEALLEN", "IMEDNOVELS", "HAYS", "PATTI", "GIRLGROUPS", "ETS", "SPOSE", "NOSE", "ANTSY"],
        "down": ["STRUT", "CRAZE", "RADON", "AVA", "PERM", "MONTH", "EGGHEADED", "SUE", "HERBTEA", "HADER", "ARAB", "REMY", "KNEEDEEP", "SAC", "THEFORUM", "SISENORA", "OPERAMAN", "LAOTSE", "SENT", "HIYA", "YEA", "SHADED", "ARES", "ANDES", "ATE", "SEARACE", "CYRANO", "SERMON", "ELAINE", "NURSES", "INTERS", "KERNELS", "ALUM", "HEADPIN", "ROAST", "STP", "SHEERER", "ASSAM", "STEAMER", "ARMANI", "PROTIP", "AERATE", "SASHED", "ITSAGO", "PEC", "THUS", "EULOGY", "RERAN", "PASSOVERS", "ABSINTHE", "SANTAHAT", "SALEDAYS", "DOPESLAP", "SNOB", "EER", "IRESIGN", "DOTING", "VOLE", "BYU", "MANS", "EENIE", "LADLE", "ALEUT", "YELPS", "SASSY", "ALTO", "VETS", "NORA", "APS", "MIO", "VON"]
      },
      "author": "Paolo Pasco",
      "autowrap": null,
      "bbars": null,
      "circles": null,
      "clues": {
        "across": ["1. Ditch", "6. See-through clothing material", "10. Listens to Shakespeare?", "15. Taiping Rebellion general", "18. Tourist's report", "20. Ring or sphere", "21. Mail", "22. Reason to scream \"Why won't this damn thing locate airplanes!\"?", "23. Honorary title in Wisconsin?", "25. ___ Aduba of \"Orange Is the New Black\"", "26. Insect that shorted out an early computer, spawning the term \"computer bug\"", "27. \"Ciao\"", "29. Surmise", "30. Hamiltons", "32. Domain of \"Hamilton\"", "34. City with 500 attractions?", "36. Takes in", "38. Bay ___", "39. Section of \"Aida,\" e.g.", "41. Letters after CD", "42. \"Hey, let's gather 100 people to enact laws and ratify treaties\"?", "46. Fired (up)", "47. Glow", "48. Get by", "49. Super ___", "50. Listen to violinist Itzhak's music?", "52. Like blue moons", "53. Norm: Abbr.", "54. California missionary JunÃ­pero ___", "55. \"Ready to relieve 'em of a ___ or two\" (\"Les MisÃ©rables\" lyric)", "56. Stamp incorrectly, in a way", "58. Group that appeared in the movie \"Grease\"", "60. Oscars grp.", "64. Out of gas, informally", "65. Soft drink favored by the Marines?", "68. Stephen of \"Interview With the Vampire\"", "69. Sticky spots?", "71. Cathedral feature", "72. Blazing successes", "74. \"Oh, you're funny-y-y-y ...\"", "76. Indian wear", "77. Super ___", "78. Setting for the beginning of \"The Book of Mormon\"", "79. Church response that's taken as a given?", "83. Lead-in to Pablo or Carlos", "84. Like Navy SEALs", "85. \"Old MacDonald Had a Farm\" sounds", "86. \"Got it\"", "87. Newspaper essay on why not to go outdoors?", "89. Skit show, for short", "90. E-cigarette output", "91. Frat boy types", "92. Assn.", "93. Top of the agenda", "95. Fastener with a ring-shaped head", "97. Cries of approval", "101. Tennis's King of Clay", "102. Cry from comic book civilians", "105. Futile", "107. Meadow", "108. Woody playing a medieval baron?", "110. Books written entirely in chat rooms?", "113. Robert of \"Airplane!\"", "114. Singer LaBelle", "115. TLC and Destiny's Child", "116. Most \"Doctor Who\" characters, for short", "117. \"What if ...,\" informally", "118. ___ cone", "119. On edge"],
        "down": ["1. Walk with pride", "2. Crosswords in 1924-25, e.g.", "3. Home inspector's concern", "4. \"Selma\" director DuVernay", "5. Locks in place for a while?", "6. What the \"1\" of \"1\/2\" represents", "7. Intellectual", "8. Litigate", "9. Home remedy drink", "10. Bill of \"Trainwreck\"", "11. Aladdin, e.g.", "12. \"Ratatouille\" rat", "13. Embroiled (in)", "14. Biological pouch", "15. Los Angeles Lakers' home until 1999", "16. Assent to a married mujer", "17. 89-Across character played by Adam Sandler", "19. \"Tao Te Ching\" philosopher", "21. Mailed", "24. \"Howdy\"", "28. \"___, verily\"", "31. Gray, say", "33. Mythical father of Harmonia, strangely enough", "35. Southern chain", "37. Took in", "39. America's Cup, e.g.", "40. Rostand protagonist ___ de Bergerac", "42. Sunday delivery", "43. Bush labor secretary Chao", "44. Sips", "45. Puts under", "46. Bits of truth", "47. Name on many a college hall, informally", "50. One easily bowled over?", "51. Laugh-filled broadcast", "53. Racer's brand", "54. More see-through", "57. Noted tea locale", "58. The Titanic, e.g.", "59. Gucci competitor", "61. Bit of expert advice", "62. Fill with gas", "63. Like pageant contestants, typically", "66. \"Full speed ahead!\"", "67. Push-up muscle, informally", "70. \"That means ...\"", "73. Passing remarks?", "75. Showed over", "77. Nisan observances", "79. Green spirit", "80. Something felt at Christmas", "81. Post-Christmas events", "82. Hit upside the head, in slang", "83. Snoot", "84. Eternally, to poets", "87. Words of concession", "88. Liable to spoil?", "90. Cousin of a lemming", "91. Sch. whose honor code includes chastity", "94. Staffs", "95. Start of a few choice words?", "96. Big dipper", "98. Native of Alaska", "99. Goes \"Ow, ow, ow!\"", "100. Like the response \"Talk to the hand!\"", "103. Adele, voicewise", "104. Spot checkers?", "106. One of Asta's masters", "109. College-level H.S. courses", "111. \"Dios ___!\"", "112. The \"V\" of fashion's \"DVF\""]
      },
      "code": null,
      "copyright": "2016, The New York Times",
      "date": "8\/28\/2016",
      "dow": "Sunday",
      "downmap": null,
      "editor": "Will Shortz",
      "grid": ["S", "C", "R", "A", "P", ".", "M", "E", "S", "H", ".", "H", "A", "R", "K", "S", ".", ".", "T", "S", "O", "T", "R", "A", "V", "E", "L", "O", "G", "U", "E", ".", "A", "R", "E", "N", "A", ".", "S", "H", "I", "P", "R", "A", "D", "A", "R", "A", "N", "G", "E", "R", ".", "D", "A", "M", "E", "C", "H", "E", "E", "S", "E", "U", "Z", "O", ".", "M", "O", "T", "H", ".", "B", "Y", "E", "B", "Y", "E", ".", "I", "N", "F", "E", "R", "T", "E", "N", "S", ".", "T", "H", "E", "A", "T", "E", "R", ".", ".", "D", "A", "Y", "T", "O", "N", "A", ".", ".", ".", "H", "A", "S", ".", "A", "R", "E", "A", ".", "S", "C", "E", "N", "A", ".", "R", "O", "M", "S", "E", "N", "A", "T", "E", "I", "D", "E", "A", ".", "K", "E", "Y", "E", "D", ".", "A", "U", "R", "A", "E", "L", "U", "D", "E", ".", "N", "E", "S", ".", "H", "E", "A", "R", "P", "E", "R", "L", "M", "A", "N", "R", "A", "R", "E", ".", "S", "T", "D", ".", "S", "E", "R", "R", "A", ".", "S", "O", "U", ".", ".", ".", "M", "I", "S", "D", "A", "T", "E", ".", "S", "H", "A", "N", "A", "N", "A", ".", "A", "M", "P", "A", "S", "O", "N", "E", ".", "S", "P", "R", "I", "T", "E", "D", "E", "C", "O", "R", "P", "S", ".", "R", "E", "A", "N", "E", "S", "T", "S", ".", "S", "T", "E", "E", "P", "L", "E", ".", "M", "E", "T", "E", "O", "R", "S", ".", ".", ".", "H", "A", "R", ".", "S", "A", "R", "I", "S", ".", "P", "A", "C", ".", "U", "T", "A", "H", "A", "S", "S", "U", "M", "E", "D", "A", "M", "E", "N", ".", "S", "A", "N", ".", "E", "L", "I", "T", "E", "B", "A", "A", "S", ".", "R", "O", "G", "E", "R", ".", "I", "N", "S", "I", "D", "E", "O", "P", "E", "D", "S", "N", "L", ".", "V", "A", "P", "O", "R", ".", "B", "R", "O", "S", ".", "O", "R", "G", ".", ".", ".", "I", "T", "E", "M", "O", "N", "E", ".", ".", "E", "Y", "E", "B", "O", "L", "T", ".", "Y", "A", "Y", "S", "N", "A", "D", "A", "L", ".", "S", "A", "V", "E", "U", "S", ".", "V", "A", "I", "N", ".", "L", "E", "A", "T", "H", "A", "N", "E", "A", "L", "L", "E", "N", ".", "I", "M", "E", "D", "N", "O", "V", "E", "L", "S", "H", "A", "Y", "S", ".", "P", "A", "T", "T", "I", ".", "G", "I", "R", "L", "G", "R", "O", "U", "P", "S", "E", "T", "S", ".", ".", "S", "P", "O", "S", "E", ".", "N", "O", "S", "E", ".", "A", "N", "T", "S", "Y"],
      "gridnums": [1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14, 0, 0, 15, 16, 17, 18, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 21, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 24, 0, 0, 0, 0, 25, 0, 0, 0, 26, 0, 0, 0, 0, 27, 28, 0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 30, 0, 0, 31, 0, 32, 0, 0, 33, 0, 0, 0, 0, 0, 34, 35, 0, 0, 0, 0, 0, 0, 0, 0, 36, 37, 0, 0, 38, 0, 0, 0, 0, 39, 40, 0, 0, 0, 0, 41, 0, 0, 42, 43, 44, 0, 0, 0, 45, 0, 0, 0, 0, 46, 0, 0, 0, 0, 0, 47, 0, 0, 0, 48, 0, 0, 0, 0, 0, 49, 0, 0, 0, 50, 0, 0, 0, 0, 0, 51, 0, 0, 0, 0, 52, 0, 0, 0, 0, 53, 0, 0, 0, 54, 0, 0, 0, 0, 0, 55, 0, 0, 0, 0, 0, 56, 0, 0, 0, 57, 0, 0, 0, 58, 0, 0, 0, 0, 0, 59, 0, 60, 0, 61, 62, 63, 64, 0, 0, 0, 65, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 68, 0, 0, 69, 0, 0, 70, 0, 0, 71, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 73, 0, 0, 0, 0, 0, 0, 74, 0, 75, 0, 76, 0, 0, 0, 0, 0, 77, 0, 0, 0, 78, 0, 0, 0, 79, 80, 81, 0, 0, 0, 82, 0, 0, 0, 0, 0, 83, 0, 0, 0, 84, 0, 0, 0, 0, 85, 0, 0, 0, 0, 86, 0, 0, 0, 0, 0, 87, 0, 0, 0, 88, 0, 0, 0, 0, 0, 89, 0, 0, 0, 90, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 92, 0, 0, 0, 0, 0, 93, 0, 0, 94, 0, 0, 0, 0, 0, 95, 0, 0, 0, 0, 96, 0, 0, 97, 98, 99, 100, 101, 0, 0, 0, 0, 0, 102, 103, 104, 0, 0, 0, 0, 105, 0, 0, 106, 0, 107, 0, 0, 108, 0, 0, 0, 0, 109, 0, 0, 0, 0, 0, 110, 111, 0, 0, 0, 0, 112, 0, 0, 0, 113, 0, 0, 0, 0, 114, 0, 0, 0, 0, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116, 0, 0, 0, 0, 117, 0, 0, 0, 0, 0, 118, 0, 0, 0, 0, 119, 0, 0, 0, 0],
      "hastitle": true,
      "hold": null,
      "id": null,
      "id2": null,
      "interpretcolors": null,
      "jnotes": null,
      "key": null,
      "mini": null,
      "notepad": null,
      "publisher": "The New York Times",
      "rbars": null,
      "shadecircles": null,
      "size": {
        "cols": 21,
        "rows": 21
      },
      "title": "THE FIRST SHALL BE LAST",
      "track": null,
      "type": null,
      "uniclue": false
    };
    console.log(self.crosswordData);
    return self.crosswordData;
  }

  this.formatGridData = function(crosswordGridData){

    return crosswordGridData.map(function(item, gridItemIndex){
      var squareObj = {};
      if(item === '.'){
        squareObj.correctStr = '';
        squareObj.void = true;
      }else{
        squareObj.void = false;
        squareObj.correctStr = item;
      }
      return squareObj;
    });
  };

  this.formatClueData = function(crosswordClueData){
    var clues = {
      across: {},
      down: {}
    };
    for (var clueKey in crosswordClueData){
      crosswordClueData[clueKey].forEach(function(clue){
        var match = clue.match(/^\d+/);
        clues[clueKey][match[0]] = clue
      });
    }
    console.log(clues);
    return clues;
  };

  this.setCrosswordGridNums = function(crosswordData){
    return crosswordData.gridnums.map(function(item){
      return item === 0 ? false : item;
    });
  };

  this.getCanonicalIndex = function(x, y){
    var self = this;
    var cols = self.getCrosswordSize().cols;
    return y * cols + x;
  };

  this.splitGridIntoRows = function(crosswordGrid, crosswordSize){
    var self = this;
    var chunked = _.chunk(crosswordGrid, crosswordSize.cols);
    _.each(chunked, function(row, rowIndex){
      _.each(row, function(square, colIndex){
        square.y = rowIndex;
        square.x = colIndex;
        square.canonicalIndex = self.getCanonicalIndex(square.x, square.y);
      });
    });
    console.log('chunked', chunked);
    return chunked;
  };

  this.getCrosswordSize = function(){
    var self = this;
    return self.crosswordData.size;
  };

}


