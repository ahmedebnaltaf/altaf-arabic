window.ALTAF_CATALOG = {
  "platform_version": "2.0-scalable",
  "brand": "ALTAF ARABIC",
  "teacher": "Ahmed Altaf",
  "books": [
    {
      "id": "book1",
      "number": 1,
      "title_ar": "الكتاب الأول",
      "title_en": "Book 1",
      "status": "active",
      "unit_count": 16,
      "unit_dir": "data/books/book1/",
      "unit_file_pattern": "unit{NN}.js"
    },
    {
      "id": "book2",
      "number": 2,
      "title_ar": "الكتاب الثاني",
      "title_en": "Book 2",
      "status": "planned",
      "unit_count": 0,
      "unit_dir": "data/books/book2/",
      "unit_file_pattern": "unit{NN}.js"
    }
  ],
  "audio": {
    "core_base": "assets/audio/core/",
    "conversation_base": "assets/audio/conversation/",
    "core_naming": "U{unit}_D{dialogue}_S{sentence}.mp3",
    "conversation_naming": "C{conversation}_S{sentence}_{language}.mp3"
  }
};
