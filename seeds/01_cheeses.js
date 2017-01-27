
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "cheese"; ALTER SEQUENCE cheese_id_seq RESTART WITH 1;')
  .then(() => {
    let cheeses = [
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      {
        name: '',
        image_url: '',
      },
      
    ];
    return knex('cheese').insert(cheeses);
  });
};
