(function () { var designJSON = {
  "name": "boilerplate",
  "label": "Boilerplate",
  "version": "0.2.0",
  "author": "upfront.io",
  "assets": {
    "css": [
      "./css/bootstrap.css"
    ]
  },
  "wrapper": "<div class='container doc-section'></div>",
  "componentProperties": {
    "well-large": {
      "label": "Large",
      "type": "option",
      "value": "well-lg"
    },
    "panel-styles": {
      "label": "Panel Styles",
      "type": "select",
      "options": [
        {
          "caption": "Default"
        },
        {
          "caption": "Primary",
          "value": "panel-primary"
        },
        {
          "caption": "Success",
          "value": "panel-success"
        },
        {
          "caption": "Info",
          "value": "panel-info"
        },
        {
          "caption": "Warning",
          "value": "panel-warning"
        },
        {
          "caption": "Danger",
          "value": "panel-danger"
        }
      ]
    },
    "img-styles": {
      "label": "Image Styles",
      "type": "select",
      "options": [
        {
          "caption": "Default"
        },
        {
          "caption": "Rounded",
          "value": "img-rounded"
        },
        {
          "caption": "Circle",
          "value": "img-circle"
        },
        {
          "caption": "Thumbnail",
          "value": "img-thumbnail"
        }
      ]
    }
  },
  "imageRatios": {
    "16:9": {
      "label": "16:9",
      "ratio": "16x9"
    },
    "1:1": {
      "label": "1:1",
      "ratio": "1x1"
    }
  },
  "groups": [
    {
      "label": "Headers",
      "components": [
        "header",
        "hero",
        "h1",
        "h2"
      ]
    },
    {
      "label": "Text",
      "components": [
        "p",
        "quote"
      ]
    },
    {
      "label": "Images",
      "components": [
        "image"
      ]
    },
    {
      "label": "Embeds",
      "components": [
        "media"
      ]
    },
    {
      "label": "Lists",
      "components": [
        "list-group",
        "list-group-item",
        "list-group-box-item"
      ]
    },
    {
      "label": "Boxes",
      "components": [
        "panel",
        "well"
      ]
    },
    {
      "label": "Grid",
      "components": [
        "main-and-sidebar"
      ]
    }
  ],
  "defaultComponents": {
    "paragraph": "p",
    "image": "image"
  },
  "defaultContent": [
    {
      "component": "header"
    },
    {
      "component": "p"
    }
  ],
  "prefilledComponents": {},
  "metadata": [
    {
      "identifier": "title",
      "type": "text",
      "matches": [
        "header.title",
        "hero.title",
        "h1.title",
        "h2.title"
      ]
    },
    {
      "identifier": "description",
      "type": "text",
      "matches": [
        "p.text"
      ]
    }
  ],
  "components": [
    {
      "name": "panel",
      "html": "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\" doc-editable=\"title\">Panel Title</h3>\n  </div>\n  <div class=\"panel-body\" doc-editable=\"body\">\n    Panel content\n  </div>\n</div>",
      "label": "Panel",
      "properties": [
        "panel-styles"
      ]
    },
    {
      "name": "well",
      "html": "<div class=\"well\">\n  Look, I&apos;m in a well!\n</div>",
      "label": "Well",
      "properties": [
        "well-large"
      ]
    },
    {
      "name": "media",
      "html": "<div class=\"embed-responsive embed-responsive-16by9\" doc-html=\"iframe\"></div>",
      "label": "Media"
    },
    {
      "name": "main-and-sidebar",
      "html": "<div class=\"row\">\n  <div class=\"col-md-8\" doc-container=\"main\"></div>\n  <div class=\"col-md-4\" doc-container=\"sidebar\"></div>\n</div>",
      "label": "Main and Sidebar"
    },
    {
      "name": "h1",
      "html": "<h1 class=\"title\" doc-editable=\"title\">\n  Title\n</h1>",
      "label": "Title H1"
    },
    {
      "name": "h2",
      "html": "<h1 class=\"title\" doc-editable=\"title\">\n  Title\n</h1>",
      "label": "Title H2"
    },
    {
      "name": "header",
      "html": "<div class=\"page-header\">\n  <h1 doc-editable=\"title\">Example page header Subtext for header</h1>\n</div>",
      "label": "Header"
    },
    {
      "name": "hero",
      "html": "<div class=\"jumbotron\">\n  <h1 doc-editable=\"title\">Hello, world!</h1>\n  <p doc-editable=\"text\">\n    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.\n  </p>\n  <p>\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" doc-editable=\"button\">Learn more</a>\n  </p>\n</div>",
      "label": "Large Image"
    },
    {
      "name": "image",
      "html": "<figure style=\"text-align: center\">\n  <img doc-image=\"image\" class=\"img-responsive img-rounded center\" style=\"margin: 0 auto\">\n  <figcaption doc-editable=\"caption\" class=\"caption\">\n    Image Caption.\n  </figcaption>\n</figure>",
      "label": "Image"
    },
    {
      "name": "list-group",
      "html": "<ul class=\"list-group\" doc-container=\"list\"></ul>",
      "label": "List Group",
      "directives": {
        "list": {
          "allowedChildren": [
            "list-group-item",
            "list-group-box-item"
          ]
        }
      }
    },
    {
      "name": "list-group-box-item",
      "html": "<li class=\"list-group-item\">\n  <h4 class=\"list-group-item-heading\" doc-editable=\"title\">List group item heading</h4>\n  <p class=\"list-group-item-text\" doc-editable=\"text\">\n    Donec id elit non mi porta gravida at eget metus.\n    Maecenas sed diam eget risus varius blandit.\n  </p>\n</li>",
      "label": "List Group Box Item",
      "allowedParents": [
        "list-group"
      ]
    },
    {
      "name": "list-group-item",
      "html": "<li class=\"list-group-item\" doc-editable=\"text\">Cras justo odio</li>",
      "label": "List Group Item",
      "allowedParents": [
        "list-group"
      ]
    },
    {
      "name": "p",
      "html": "<p doc-editable=\"text\">\n  Studio Ghibli, Inc. is a Japanese animation film studio based in Koganei, Tokyo, Japan. The studio is best known for its anime feature films. Studio Ghibli began in June 1985 after the success of Nausica&#xE4; of the Valley of the Wind with funding by Tokuma Shoten. The company&#x2019;s logo features the character Totoro (a large forest spirit) from Miyazaki&#x2019;s film My Neighbor Totoro. At one time the studio was based in Kichij&#x14D;ji, Musashino, Tokyo.\n</p>",
      "label": "Paragraph"
    },
    {
      "name": "quote",
      "html": "<blockquote>\n  <p>\n    <span class=\"quotation-mark\">&#x201C;</span><span class=\"quote\" doc-editable=\"text\">We depict hatred, but it is to depict that there are more important things. We depict a curse, to depict the joy of liberation.</span>\n  </p>\n  <footer doc-editable=\"author\">\n    Hayao Miyazaki\n  </footer>\n</blockquote>",
      "label": "Quote"
    }
  ]
}; if(typeof module !== 'undefined' && module.exports) {return module.exports = designJSON;} else { this.design = this.design || {}; this.design.boilerplate = designJSON;} }).call(this);