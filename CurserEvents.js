AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      this.handleMouseClick();
    },
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["Captain-Aero", "Outer-Space", "Spider-Man", "Superman"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
  
        console.log("Place")
        console.log(placeContainer)
  
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "red",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      //Cursor 'mouseenter' Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
    handleMouseLeaveEvents: function () {
      //Cursor 'mouseleave' Events
      this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1,
            });
          }
        }
      });
    },
  
    handleMouseClick: function(){
      this.el.addEventListener("click", () =>{
        const placeContainer = document.querySelector("#places-container");
  
         console.log(placeContainer)
  
      const { state } = placeContainer.getAttribute("tour"); 
  
      if (state == "places_list" ){
        const id = this.el.getAttribute("id");
        const placesId = [ "Captain-Aero", "Outer-Space", "Spider-Man", "Superman" ];
        
        if(placesId.includes(id)){
          placeContainer.setAttribute("tour", {
            state: "View",
            data: id
          })
        }
      }
      })
    }
  });
  