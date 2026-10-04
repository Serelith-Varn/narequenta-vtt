export default class NarequentaCharacterData extends foundry.abstract.DataModel {
  static defineSchema() {
    const { SchemaField, StringField, NumberField, ObjectField } = foundry.data.fields;
    return {
      // From template.json base template & character fields
      biography: new StringField({initial: ""}),
      promise: new StringField({initial: ""}),
      
      resources: new SchemaField({
        hp: new SchemaField({
          value: new NumberField({initial: 100, min: 0}),
          min: new NumberField({initial: 0}),
          max: new NumberField({initial: 100})
        }),
        action_surges: new SchemaField({
          value: new NumberField({initial: 0, min: 0}),
          min: new NumberField({initial: 0}),
          max: new NumberField({initial: 5})
        })
      }),
      
      mitigation: new SchemaField({
        base: new NumberField({initial: 0}),
        static: new NumberField({initial: 0}),
        parry: new NumberField({initial: 0}),
        total: new NumberField({initial: 0})
      }),
      
      essences: new SchemaField({
        vitalis: new SchemaField({ value: new NumberField({initial: 100}), max: new NumberField({initial: 100}), label: new StringField({initial: "VITALIS"}) }),
        motus: new SchemaField({ value: new NumberField({initial: 100}), max: new NumberField({initial: 100}), label: new StringField({initial: "MOTUS"}) }),
        sensus: new SchemaField({ value: new NumberField({initial: 100}), max: new NumberField({initial: 100}), label: new StringField({initial: "SENSUS"}) }),
        verbum: new SchemaField({ value: new NumberField({initial: 100}), max: new NumberField({initial: 100}), label: new StringField({initial: "VERBUM"}) }),
        anima: new SchemaField({ value: new NumberField({initial: 100}), max: new NumberField({initial: 100}), label: new StringField({initial: "ANIMA"}) })
      }),
      
      calculator: new ObjectField({
        initial: {
          attack_roll: null,
          prof_roll: null,
          defense_roll: null,
          item_bonus: 0,
          item_weight: 15,
          active_motor: "vitalis",
          active_motor_val: 0,
          target_def_stat: "vitalis",
          apply_to: "hp",
          target_name: "None",
          target_ids: [],
          batch_data: "",
          output: ""
        }
      }),
      
      attributes: new ObjectField({initial: {}}),
      groups: new ObjectField({initial: {}})
    };
  }
}