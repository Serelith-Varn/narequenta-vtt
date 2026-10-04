import NarequentaCharacterData from "./models/character-model.mjs";

Hooks.once("init", function() {
  console.log("Nárëquenta | Initializing System Data Models");
  
  // Assign custom data model to character actor type
  CONFIG.Actor.dataModels["character"] = NarequentaCharacterData;
});