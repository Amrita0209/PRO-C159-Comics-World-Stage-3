AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "Captain-Aero",
        title: "Captain Aero",
        url: "./assets/thumbnails/1.jpg",
      },
      {
        id: "Outer-Space",
        title: "Outer Space",
        url: "./assets/thumbnails/2.jpg",
      },

      {
        id: "Spider-Man",
        title: "Spider Man",
        url: "./assets/thumbnails/3.jpg",
      },
      {
        id: "Superman",
        title: "Superman",
        url: "./assets/thumbnails/4.jpg",
      },
    ];

  
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const border = this.createBorder(position, item.id)
               
      // Thumbnail Element
      const image = this.createImages(item)
     
      // Title Text Element
      const text = this.createTitle(position, item)
      
      this.placesContainer.appendChild(border);
      border.appendChild(image)
      border.appendChild(text);
    }

  },

  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");

    entityEl.setAttribute("id", id)
    entityEl.setAttribute("position", position )
    entityEl.setAttribute("geometry", {
      primitive: "plane", 
      width:16,
      height:16,
      
    })
    entityEl.setAttribute("material", {
      color: "white",
      opacity: 0.5
    })
    entityEl.setAttribute("visible", true)
    return entityEl
  },

  createImages: function(item){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width:15,
      height:15,
      
      })
      entityEl.setAttribute("material", {
        src: item.url,
        opacity: 1
    })
    return entityEl
  },

  createTitle: function(position, item){
    const entityEl = document.createElement("a-entity");
    const pos = position
    pos.y = -20

    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("position", pos)
    entityEl.setAttribute("text", {
      font: "exo2bold", 
      align: "center", 
      width: 70, 
      color: "#e65100", 
      value: item.title,
  })
  return entityEl
  }


});
