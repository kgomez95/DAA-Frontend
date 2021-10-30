export const environment = {
  production: true,
  api: {
    baseUrl: 'http://localhost:50000',
    actions: {
      dataHeader: '/api/datatables/dataHeader',
      dataFilter: '/api/datatables/dataFilter',
      dataView: '/api/datatables/dataView'
    }
  },
  dataTables: {
    scoreGames: 'DT_SCORE_GAMES',
    videoGames: 'DT_VIDEOGAMES',
    platforms: 'DT_PLATFORMS'
  }
};
