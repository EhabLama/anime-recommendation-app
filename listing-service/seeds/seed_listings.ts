exports.seed = function(knex) {
    // Delete ALL existing entries
    return knex('listing').del()
      .then(function () {
        // Inserts seed entries
        return knex('listing').insert([
          {anime_id: 51868, input_anime_title: 'dokidoki ghost mansion', facet_Attribute: 'Plot', recommended_anime_title: 'Death of Iconic Character', recommended_anime_id: 41457},
          {anime_id: 369, input_anime_title: 'boogiepop wa warawanai', facet_Attribute: 'CharacterTraits', recommended_anime_title: 'Vengeance-driven', recommended_anime_id: 41457},
          {anime_id: 234, input_anime_title: 'dan doh!!', facet_Attribute: 'CharacterTraits', recommended_anime_title: 'Vengeance-driven', recommended_anime_id: 41457},
          {anime_id: 33232, input_anime_title: 'area 88 movie', facet_Attribute: 'CharacterTraits', recommended_anime_title: 'Vengeance-driven', recommended_anime_id: 41457},
          {anime_id: 45584, input_anime_title: 'don\'t cry (movie)', facet_Attribute: 'CharacterTraits', recommended_anime_title: 'Mastermind-villain', recommended_anime_id: 41457},
          {anime_id: 886, input_anime_title: 'amaenaide yo!! katsu!!', facet_Attribute: 'Plot', recommended_anime_title: 'Redemption arc', recommended_anime_id: 41457},
          {anime_id: 1136, input_anime_title: 'betterman', facet_Attribute: 'CharacterTraits', recommended_anime_title: 'Vengeance-driven', recommended_anime_id: 41457},
          {anime_id: 11241, input_anime_title: 'brave 10', facet_Attribute: 'Plot', recommended_anime_title: 'Redemption arc', recommended_anime_id: 41457},
          {anime_id: 53633, input_anime_title: 'bullbuster', facet_Attribute: 'Plot', recommended_anime_title: 'Death of Iconic Character', recommended_anime_id: 41457},
          {anime_id: 6280, input_anime_title: 'cat shit one', facet_Attribute: 'Plot', recommended_anime_title: 'Death of Iconic Character', recommended_anime_id: 41457},
        ]);
      });
  };