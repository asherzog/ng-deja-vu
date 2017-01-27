
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "cheese"; ALTER SEQUENCE cheese_id_seq RESTART WITH 1;')
  .then(() => {
    let cheeses = [
      {
        name: 'Boursin',
        image: 'https://leafimg-a.akamaihd.net/640/ppds/9e23263f-83b1-4885-ab12-e51076c8d6ad.jpg',
      },
      {
        name: 'Briere',
        image: 'http://www.seriouseats.com/images/2015/03/20150324-sheep-cheese-vicky-wasik-11.jpg',
      },
      {
        name: 'Camambert',
        image: 'http://images.nymag.com/restaurants/features/agendalisting090525_560.jpg',
      },
      {
        name: 'Munster',
        image: 'http://hartkeisonline.com/wp-content/uploads/munster.jpg?x78023',
      },
      {
        name: 'Roquefort',
        image: 'http://images.wisegeek.com/roquefort-on-slicer.jpg',
      },
      {
        name: 'Reblochon',
        image: 'http://www.cheesewiki.com/system/images/1531/medium/Reblochon1.jpg?1263229738',
      },
      {
        name: "Pont l'Évêque",
        image: 'http://www.patrimoine-normand.com/images/p/pon/pont-l-eveque-Fromages-normandie.jpeg',
      },
      {
        name: 'Époisses',
        image: 'https://www.tourisme-langres.com/objets_fichiers/photos/Epoisses-Syndicat-Defense-Epoisses.jpg',
      },
      {
        name: 'Beaufort',
        image: 'http://www.nortonstgrocer.com.au/wp-content/uploads/BEAUFORT.jpg',
      },
      {
        name: 'Comté',
        image: 'https://twocherubsantiques.files.wordpress.com/2010/12/dsc03306-640x360.jpg',
      },
      {
        name: 'Langres',
        image: 'http://www.bradgatescatering.com/Langres.jpg',
      },
      {
        name: 'Mimolette',
        image: 'http://www.gourmetbusiness.com/images/content/a61c5307-d87f-47ca-8131-10c421bd79e6.jpg',
      },
      {
        name: 'Valencay',
        image: 'https://www.tewksburyfinewine.com/images/sites/tewksburyfinewine/gallery/cheese968834.jpg',
      },
      {
        name: 'Salers',
        image: 'http://cheeseymarie.com/wp-content/uploads/2016/07/salers-cheese.jpg',
      },
      {
        name: 'Rigotte de Condrieu',
        image: 'http://cheeseymarie.com/wp-content/uploads/2016/07/salers-cheese.jpg',
      },
      {
        name: 'Morbier',
        image: 'http://www.interfrance.com/images/franche-comte/fcm_morbier.jpg',
      },
      {
        name: 'Cancoillotte',
        image: 'http://www.president.uk.com/sites/default/files/la_concol_cheese.jpg',
      }

    ];
    return knex('cheese').insert(cheeses);
  });
};
